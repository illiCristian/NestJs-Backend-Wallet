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

import { TransferResult } from './interfaces/Transfer-result';

import { CreateWalletDto } from './dto/create-wallet.dto';
import { CreditCardMethod } from 'src/payment/schema/creditCard.model';
import { PaymentService } from 'src/payment/payment.service';
import { PaymentTypes } from 'src/payment/interfaces/payment.types';
import { ActionGetInfo } from './interfaces/operations-get-wallet';
import { ActionPostWallet } from './interfaces/operations-post-wallet.types';

@Injectable()
export class WalletService {
  private walletDto: CreateWalletDto;
  constructor(
    @InjectModel('Wallet') private readonly walletModel: Model<Wallet>,
    @InjectModel('CreditCard')
    private readonly creditCardModel: Model<CreditCardMethod>,

    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,

    @Inject(forwardRef(() => PaymentService))
    private readonly paymentService: PaymentService,
  ) {
    this.walletDto = new this.walletModel();
  }

  async findById(walletId: string): Promise<Wallet | null> {
    return this.walletModel.findById(walletId).exec();
  }

  async getWalletAndCheck(walletId: string): Promise<Wallet> {
    const wallet = this.walletModel.findById(walletId).exec();

    if (!wallet) {
      throw new NotFoundException('Wallet not found');
    }

    return wallet;
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

  // async operationsWallet(
  //   userId: string,
  //   amount: number,
  //   action: ActionPostWallet,
  // ): Promise<Wallet | { amount: number } | string> {
  //   const user = await this.userService.getUserAndCheck(userId);
  //   const wallet = await this.findById(user.walletId.toString());
  //   if (!wallet) {
  //     throw new NotFoundException('Wallet not found');
  //   }

  //   switch (action) {
  //     case 'deposit':
  //       wallet.balance += amount;
  //       await wallet.save();
  //       return wallet;

  //     case 'withdraw':
  //       wallet.balance -= amount;
  //       await wallet.save();
  //       return wallet;
  //     default:
  //       throw new Error('Invalid action');
  //   }
  // }

  async operationsWallet(
    userId: string,
    amount: number,
    selectedPaymentId: string,
    action: ActionPostWallet,
    paymentTypes: PaymentTypes, // Categoría de pago (card o bank)
  ): Promise<Wallet | { amount: number; selectedPaymentId: string } | string> {
    const user = await this.userService.getUserAndCheck(userId);
    const wallet = await this.findById(user.walletId.toString());
    if (!wallet) {
      throw new NotFoundException('Wallet not found');
    }
    const bankAccount = await this.paymentService.getBankAccountById(
      wallet.paymentMethodsBanks[0],
    );
    if (!bankAccount) {
      throw new NotFoundException('Bank account not found');
    }
    switch (action) {
      case 'deposit':
        if (paymentTypes === 'creditCard') {
          const card = await this.paymentService.getCardById(selectedPaymentId);
          if (!card) {
            throw new NotFoundException('Card not found');
          }
          card.balance -= amount;
          await card.save();
          wallet.balance += amount;
        }
        if (paymentTypes === 'accountBank') {
          const bankAccount = await this.paymentService.getBankAccountById(
            selectedPaymentId,
          );
          if (!bankAccount) {
            throw new NotFoundException('Bank account not found');
          }
          bankAccount.balance -= amount;
          await bankAccount.save();
        }
        wallet.balance += amount;
        await wallet.save();
        return wallet;
      case 'withdraw':
        if (paymentTypes === 'creditCard') {
          const card = await this.paymentService.getCardById(selectedPaymentId);
          if (!card) {
            throw new NotFoundException('Card not found');
          }
          card.balance += amount;
          await card.save();
          wallet.balance -= amount;
        }
        if (paymentTypes === 'accountBank') {
          const bankAccount = await this.paymentService.getBankAccountById(
            selectedPaymentId,
          );
          if (!bankAccount) {
            throw new NotFoundException('Bank account not found');
          }
          bankAccount.balance += amount;
          await bankAccount.save();
        }
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
