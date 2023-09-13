import { Card } from '@/components/SendMoney/SelectMethod/Card';
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
//import { TransferData } from './interfaces/transfer-data';
import { CvuGeneratorService } from './cvu-alias-generator/cvu-generator.service';
import { UsersService } from 'src/users/users.service';

import { TransferResult } from './interfaces/Transfer-result';

import { CreateWalletDto } from './dto/create-wallet.dto';
import { CreditCardMethod } from 'src/payment/schema/creditCard.model';
import { PaymentService } from 'src/payment/payment.service';
import { PaymentTypes } from 'src/payment/interfaces/payment.types';
import { ActionGetInfo } from './interfaces/operations-get-wallet';
import { ActionPostWallet } from './interfaces/operations-post-wallet.types';
import { TransferDto } from './dto/transfer-dto';
import { Movement } from 'src/movements/schema/movement.model';
import { MovementsService } from 'src/movements/movements.service';
//import { CreateMovementDto } from 'src/movements/dto/create-movement.dto';
import { type } from 'os';
import { NotificationGateway } from 'src/notifications/notifications.gateway';

@Injectable()
export class WalletService {
  private walletDto: CreateWalletDto;
  constructor(
    @InjectModel('Wallet') private readonly walletModel: Model<Wallet>,
    @InjectModel('Movement') private readonly movementModel: Model<Movement>,
    @InjectModel('CreditCard')
    private readonly creditCardModel: Model<CreditCardMethod>,

    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,

    @Inject(forwardRef(() => PaymentService))
    private readonly paymentService: PaymentService,

    @Inject(forwardRef(() => CvuGeneratorService))
    private readonly cvuGeneratorService: CvuGeneratorService,

    @Inject(forwardRef(() => MovementsService))
    private readonly movementService: MovementsService,
    @Inject(forwardRef(() => NotificationGateway))
    private readonly notificationGateway: NotificationGateway,
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
      const cvu = await this.cvuGeneratorService.generateUniqueCVU();
      const alias = await this.cvuGeneratorService.generateUniqueAlias();
      //const alias = await this;

      const { ...data } = this.walletDto;

      const newWallet = new this.walletModel({
        alias,
        data,
        cvu: cvu,
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
    selectedPaymentId: string,
    action: ActionPostWallet,
    paymentTypes: PaymentTypes, // Categoría de pago (card o bank)
  ): Promise<Wallet | { amount: number; selectedPaymentId: string } | string> {
    const user = await this.userService.getUserAndCheck(userId);
    const wallet = await this.findById(user.walletId.toString());
    if (!wallet) {
      throw new NotFoundException('Wallet not found');
    }

    switch (action) {
      case 'deposit':
        if (paymentTypes === 'creditCard') {
          const card = await this.paymentService.getCardById(selectedPaymentId);

          if (!card) {
            throw new NotFoundException('Card not found');
          }
          console.log(amount);
          if (amount <= 0) {
            throw new BadRequestException('Invalid amount');
          }
          if (card.balance < amount) {
            throw new UnprocessableEntityException('Insufficient balance');
          }

          card.balance -= amount;

          await card.save();
          const movement = await this.movementService.createMovement(
            {
              movement: action,
              type: paymentTypes,
              amount,
              source: card._id,
              destination: wallet._id,
              nameDest: user.name,
              status: 'Successful',
            },
            userId,
          );
          await movement.save();

          wallet.balance = wallet.balance + amount;

          await wallet.save();
        }
        if (paymentTypes === 'accountBank') {
          const bankAccount = await this.paymentService.getBankAccountById(
            selectedPaymentId,
          );
          console.log(bankAccount);
          if (!bankAccount) {
            throw new NotFoundException('Bank account not found');
          }
          if (bankAccount.balance < amount) {
            throw new UnprocessableEntityException('Insufficient balance');
          }

          if (amount <= 0) {
            throw new BadRequestException('Invalid amount');
          }
          wallet.balance = Number(wallet.balance) + Number(amount);

          await wallet.save();

          bankAccount.balance -= amount;

          await bankAccount.save();
          const movement = await this.movementService.createMovement(
            {
              movement: action,
              type: paymentTypes,
              amount,
              source: bankAccount._id,
              destination: wallet._id,
              nameDest: user.name,
              status: 'Successful',
            },
            userId,
          );
          await movement.save();
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
          const movement = await this.movementService.createMovement(
            {
              movement: action,
              type: paymentTypes,
              amount,
              source: wallet._id,
              destination: card._id,
              nameDest: card.name,
              status: 'Successful',
            },
            userId,
          );
          await movement.save();
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
          const movement = await this.movementService.createMovement(
            {
              movement: action,
              type: paymentTypes,
              amount,
              source: wallet._id,
              destination: bankAccount._id,
              nameDest: bankAccount.bankName,
              status: 'Successful',
            },
            userId,
          );
          await movement.save();
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
    walletDto: TransferDto,
    userId: string,
  ): Promise<TransferResult> {
    const fromUser = await this.userService.getUserAndCheck(fromUserId);
    const toUser = await this.userService.getUserAndCheck(userId);

    const fromWallet = await this.findById(fromUser.walletId.toString());
    const toWallet = await this.findById(toUser.walletId.toString());

    if (!fromWallet || !toWallet) {
      throw new NotFoundException('Wallet not found');
    }

    if (String(fromWallet._id) === String(toWallet._id)) {
      throw new BadRequestException(
        'You cannot transfer funds to the same wallet',
      );
    }
    if (fromWallet.balance < walletDto.balance) {
      const movement = await this.movementService.createMovement(
        {
          movement: 'Transfer',
          type: 'Transfer Funds',
          amount: walletDto.balance,
          source: fromWallet._id,
          destination: toWallet._id,
          nameDest: toUser.name,
          status: 'Rejected',
        },
        fromUserId,
      );
      await movement.save();
      throw new UnprocessableEntityException('Insufficient balance');
    }

    fromWallet.balance -= walletDto.balance;
    toWallet.balance += walletDto.balance;

    fromUser.notificaciones.push(
      `Realizaste una transferencia de $ ${walletDto.balance} a ${toUser.name}`,
    );
    toUser.notificaciones.push(
      `Recibiste una transferencia de $ ${walletDto.balance} de ${fromUser.name}`,
    );
    this.notificationGateway.sendNotificationToUser(
      userId,
      `Recibiste una transferencia de $ ${walletDto.balance} de ${fromUser.name}`,
    );
    await Promise.all([fromUser.save(), toUser.save()]);
    await Promise.all([fromWallet.save(), toWallet.save()]);
    const movement = await this.movementService.createMovement(
      {
        movement: 'Transfer',
        type: 'Transfer Funds',
        amount: walletDto.balance,
        source: fromWallet._id,
        destination: toWallet._id,
        nameDest: toUser.name,
        status: 'Successful',
      },
      fromUserId,
    );
    await movement.save();

    return {
      fromWallet: fromWallet.toObject(),
      toWallet: toWallet.toObject(),
      message: 'Operation successful',
    };
  }

  async getWallets(): Promise<Wallet[]> {
    return this.walletModel.find().exec();
  }
  async getWalletByCvu(cvu: string): Promise<Wallet | null> {
    return this.walletModel.findOne({ cvu }).exec();
  }
  async getWalletByAlias(alias: string): Promise<Wallet | null> {
    return this.walletModel.findOne({ alias }).exec();
  }
}
