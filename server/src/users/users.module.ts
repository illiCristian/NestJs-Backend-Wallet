import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletSchema } from 'src/wallet/schema/wallet.model';
import { WalletService } from 'src/wallet/wallet.service';
import { UserSchema } from './schema/user.model';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PaymentService } from 'src/payment/payment.service';
import { CreditCardSchema } from 'src/payment/schema/creditCard.model';
import { BankAccountSchema } from 'src/payment/schema/accountBank.model';
import { CvuGeneratorService } from 'src/wallet/cvu-alias-generator/cvu-generator.service';
<<<<<<< HEAD
import { MovementSchema } from 'src/movements/schema/movement.model';
import { MovementsService } from 'src/movements/movements.service';
=======
import { NotificationGateway } from 'src/notifications/notifications.gateway';
>>>>>>> 33adf027bcf5cdcb119ae6f1d4e02ecbccd32fa8

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Wallet', schema: WalletSchema },
      { name: 'Movement', schema: MovementSchema },
      {
        name: 'CreditCard',
        schema: CreditCardSchema,
      },
      {
        name: 'BankAccount',
        schema: BankAccountSchema,
      },
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
  controllers: [UsersController],
  providers: [
    UsersService,
    WalletService,
    PaymentService,
    CvuGeneratorService,
<<<<<<< HEAD
    MovementsService,
=======
    NotificationGateway,
>>>>>>> 33adf027bcf5cdcb119ae6f1d4e02ecbccd32fa8
  ],
  exports: [MongooseModule, UsersService],
})
export class UsersModule {}
