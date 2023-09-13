import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { CreditCardSchema } from './schema/creditCard.model';
import { WalletSchema } from 'src/wallet/schema/wallet.model';
import { UserSchema } from 'src/users/schema/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from 'src/users/users.service';
import { WalletService } from 'src/wallet/wallet.service';
import { BankAccountSchema } from './schema/accountBank.model';
import { JwtService } from '@nestjs/jwt';
import { CvuGeneratorService } from 'src/wallet/cvu-alias-generator/cvu-generator.service';
import { MovementSchema } from 'src/movements/schema/movement.model';
import { MovementsService } from 'src/movements/movements.service';
import { NotificationGateway } from 'src/notifications/notifications.gateway';

@Module({
  providers: [
    PaymentService,
    UsersService,
    WalletService,
    JwtService,
    CvuGeneratorService,
    MovementsService,
    NotificationGateway,
  ],
  controllers: [PaymentController],
  exports: [PaymentService],
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
})
export class PaymentModule {}
