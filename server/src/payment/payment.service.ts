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
          updateWallet.paymentMethods.push(newPaymentMethod._id);
          break;
        case 'bank':
          newPaymentMethod = new this.bankAccountModel(paymentDto);
          await newPaymentMethod.save();
          updateWallet.paymentMethods.push(newPaymentMethod._id);
          break;
        default:
          throw new Error('Invalid action');
      }

      await updateWallet.save();
      return updateWallet;
    } catch (error) {
      // Manejo de errores específicos
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        // Manejo de otros errores
        throw new InternalServerErrorException(
          'Can not add payment method, card no valid',
        );
      }
    }
  }
}
