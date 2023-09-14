import { Module } from '@nestjs/common';
import { MovementsService } from './movements.service';
import { MovementsController } from './movements.controller';
import { UsersService } from 'src/users/users.service';
import { WalletService } from 'src/wallet/wallet.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MovementSchema } from './schema/movement.model';
import { WalletSchema } from 'src/wallet/schema/wallet.model';
import { UserSchema } from 'src/users/schema/user.model';
import { BankAccountSchema } from 'src/payment/schema/accountBank.model';
import { CreditCardSchema } from 'src/payment/schema/creditCard.model';
import { PaymentService } from 'src/payment/payment.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { CvuGeneratorService } from 'src/wallet/cvu-alias-generator/cvu-generator.service';
import { NotificationGateway } from 'src/notifications/notifications.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Movement', schema: MovementSchema },
      { name: 'User', schema: UserSchema },
      { name: 'Wallet', schema: WalletSchema },
      { name: 'BankAccount', schema: BankAccountSchema },
      { name: 'CreditCard', schema: CreditCardSchema },
    ]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: () => {
        return {
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: process.env.JWT_EXPIRES,
          },
        };
      },
    }),
  ],
  controllers: [MovementsController],
  providers: [
    MovementsService,
    UsersService,
    WalletService,
    PaymentService,
    CvuGeneratorService,
    NotificationGateway,
  ],
  exports: [MongooseModule, MovementsService],
})
export class MovementsModule {}
