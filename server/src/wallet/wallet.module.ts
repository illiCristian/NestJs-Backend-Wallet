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
import { CvuGeneratorService } from './cvu-alias-generator/cvu-generator.service';
import { MovementSchema } from 'src/movements/schema/movement.model';
import { MovementsService } from 'src/movements/movements.service';
import { NotificationGateway } from 'src/notifications/notifications.gateway';
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
      {
        name: 'Movement',
        schema: MovementSchema,
      },
    ]),
  ],
  providers: [
    WalletService,
    UsersService,
    JwtService,
    PaymentService,
    CvuGeneratorService,
    MovementsService,
    NotificationGateway,
  ],
  exports: [WalletService, MongooseModule],
})
export class WalletModule {}
