import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
  forwardRef,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from 'src/wallet/schema/wallet.model';
import { TransferData } from './interfaces/transfer-data';

import { UsersService } from 'src/users/users.service';
import { ActionGetInfo, ActionPostWallet } from './interfaces/wallet.types';
import { TransferResult } from './interfaces/Transfer-result';

import { CreateWalletDto } from './dto/create-wallet.dto';
import { CreditCardMethod } from 'src/payment/schema/creditCard.model';

@Injectable()
export class WalletService {
  private walletDto: CreateWalletDto;
  constructor(
    @InjectModel('Wallet') private readonly walletModel: Model<Wallet>,
    @InjectModel('CreditCard')
    private readonly creditCardModel: Model<CreditCardMethod>,

    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {
    this.walletDto = new this.walletModel();
  }

  async findById(walletId: string): Promise<Wallet | null> {
    return this.walletModel.findById(walletId).exec();
  }

  async createWallet(): Promise<Wallet> {
    try {
      const { ...data } = this.walletDto;

      const newWallet = new this.walletModel({
        data,
      });

      await newWallet.save();
      return newWallet;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(`Wallet already exists!`);
      }
      throw new InternalServerErrorException(
        'Something happened creating the wallet',
      );
    }
  }

  async getInfoWallet(
    userId: string,
    action: ActionGetInfo,
  ): Promise<Wallet | { balance: number } | string> {
    const user = await this.userService.getUserAndCheck(userId);
    const walletInfo = await this.findById(user.walletId.toString());
    if (!walletInfo) {
      throw new NotFoundException('Wallet not found');
    }

    switch (action) {
      case 'info':
        return walletInfo;
      case 'id':
        return walletInfo._id;
      case 'balance':
        return { balance: walletInfo.balance };
      default:
        throw new Error('Invalid action');
    }
  }

  async operationsWallet(
    userId: string,
    amount: number,
    action: ActionPostWallet,
  ): Promise<Wallet | { amount: number } | string> {
    const user = await this.userService.getUserAndCheck(userId);
    const wallet = await this.findById(user.walletId.toString());
    if (!wallet) {
      throw new NotFoundException('Wallet not found');
    }

    switch (action) {
      case 'deposit':
        wallet.balance += amount;
        await wallet.save();
        return wallet;

      case 'withdraw':
        wallet.balance -= amount;
        await wallet.save();
        return wallet;
      default:
        throw new Error('Invalid action');
    }
  }

  async transferFunds(
    fromUserId: string,
    transferData: TransferData,
  ): Promise<TransferResult> {
    const fromUser = await this.userService.getUserAndCheck(fromUserId);
    const toUser = await this.userService.getUserAndCheck(
      transferData.toUserId,
    );

    const fromWallet = await this.findById(fromUser.walletId.toString());
    const toWallet = await this.findById(toUser.walletId.toString());

    if (!fromWallet || !toWallet) {
      throw new NotFoundException('Wallet not found');
    }

    if (fromWallet.balance < transferData.balance) {
      throw new UnprocessableEntityException('Insufficient balance');
    }

    fromWallet.balance -= transferData.balance;
    toWallet.balance += transferData.balance;

    await Promise.all([fromWallet.save(), toWallet.save()]);

    return {
      fromWallet: fromWallet.toObject(),
      toWallet: toWallet.toObject(),
      message: 'Operation successful',
    };
  }
}
