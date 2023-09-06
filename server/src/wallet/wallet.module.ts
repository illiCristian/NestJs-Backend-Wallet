import { Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';

import { MongooseModule } from '@nestjs/mongoose';
import { WalletSchema } from './schema/wallet.model';
import { UsersService } from 'src/users/users.service';
import { UserSchema } from 'src/users/schema/user.model';
import { JwtService } from '@nestjs/jwt';
import { CreditCardSchema } from 'src/payment/schema/creditCard.model';
import { BankAccountSchema } from 'src/payment/schema/accountBank.model';
import { PaymentService } from 'src/payment/payment.service';

@Module({
  controllers: [WalletController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Wallet',
        schema: WalletSchema,
      },
      {
        name: 'User',
        schema: UserSchema,
      },
      {
        name: 'CreditCard',
        schema: CreditCardSchema,
      },
      {
        name: 'BankAccount',
        schema: BankAccountSchema,
      },
    ]),
  ],
  providers: [WalletService, UsersService, JwtService, PaymentService],
  exports: [WalletService, MongooseModule],
})
export class WalletModule {}
