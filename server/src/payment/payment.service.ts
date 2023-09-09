import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreditCardMethod } from './schema/creditCard.model';
import { Model } from 'mongoose';
import { WalletService } from 'src/wallet/wallet.service';
import { UsersService } from 'src/users/users.service';
import { Wallet } from 'src/wallet/schema/wallet.model';
import { CrediCardDto } from './dto/create-card.dto';
import { CreateBankDto } from './dto/create-bank..dto';
import { ActionPostPayment } from './interfaces/payment.action';
import { BankAccountMethod } from './schema/accountBank.model';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel('CreditCard')
    private readonly creditCardModel: Model<CreditCardMethod>,
    @InjectModel('BankAccount')
    private readonly bankAccountModel: Model<BankAccountMethod>,
    @InjectModel('Wallet') private readonly walletModel: Model<Wallet>,
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
    @Inject(forwardRef(() => WalletService))
    private readonly walletService: WalletService,
  ) {}

  async createPaymentMethod(
    userId: string,
    paymentDto: CrediCardDto | CreateBankDto,
    action: ActionPostPayment,
  ): Promise<Wallet> {
    try {
      const user = await this.userService.getUserAndCheck(userId);

      if (!user) {
        throw new NotFoundException('User not found');
      }

      const updateWallet = await this.walletService.findById(
        user.walletId.toString(),
      );

      if (!updateWallet) {
        throw new NotFoundException('Wallet not found');
      }

      let newPaymentMethod: CreditCardMethod | BankAccountMethod;
      switch (action) {
        case 'card':
          newPaymentMethod = new this.creditCardModel(paymentDto);
          await newPaymentMethod.save();
          updateWallet.paymentMethodsCards.push(newPaymentMethod._id);
          break;
        case 'bank':
          newPaymentMethod = new this.bankAccountModel(paymentDto);
          await newPaymentMethod.save();
          updateWallet.paymentMethodsBanks.push(newPaymentMethod._id);
          break;
        default:
          throw new Error('Invalid action');
      }

      await updateWallet.save();
      return updateWallet;
    } catch (error) {
      /*  if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException(
          'Can not add payment method, card no valid',
        );
      } */
      console.log(error);
    }
  }

  async getCardById(cardId: string): Promise<CreditCardMethod | null> {
    const card = await this.creditCardModel.findById(cardId).exec();
    return card;
  }

  async getBankAccountById(
    bankAccountId: string,
  ): Promise<BankAccountMethod | null> {
    const bankAccount = await this.bankAccountModel
      .findById(bankAccountId)
      .exec();
    return bankAccount;
  }

  async getAllPaymentMethodsCards(userId: string): Promise<CreditCardMethod[]> {
    const user = await this.userService.getUserAndCheck(userId);
    const wallet = await this.walletService.getWalletAndCheck(
      user.walletId.toString(),
    );

    // Obtén todas las tarjetas de crédito de la wallet
    const creditCards: CreditCardMethod[] = [];

    for (const creditCardId of wallet.paymentMethodsCards) {
      const creditCard = await this.getCardById(creditCardId);

      if (creditCard) {
        creditCards.push(creditCard);
      }
    }

    return creditCards;
  }

  async getAllPaymentMethodsBanks(
    userId: string,
  ): Promise<BankAccountMethod[]> {
    const user = await this.userService.getUserAndCheck(userId);
    const wallet = await this.walletService.getWalletAndCheck(
      user.walletId.toString(),
    );

    // Obtén todas las tarjetas de crédito de la wallet
    const accountBanks: BankAccountMethod[] = [];

    for (const accountBankId of wallet.paymentMethodsBanks) {
      const accountBank = await this.getBankAccountById(accountBankId);

      if (accountBank) {
        accountBanks.push(accountBank);
      }
    }

    return accountBanks;
  }
}
