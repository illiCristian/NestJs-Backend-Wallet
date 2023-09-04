import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwtstrategy';
import { UsersService } from 'src/users/users.service';
import { WalletService } from 'src/wallet/wallet.service';
import { UserSchema } from 'src/users/schema/user.model';
import { WalletSchema } from 'src/wallet/schema/wallet.model';
import { PaymentService } from 'src/payment/payment.service';
import { CreditCardSchema } from 'src/payment/schema/creditCard.model';
import { BankAccountSchema } from 'src/payment/schema/accountBank.model';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_EXPIRES },
      }),
    }),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Wallet', schema: WalletSchema },
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
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    UsersService,
    WalletService,
    PaymentService,
  ],
  exports: [PassportModule, JwtStrategy],
})
export class AuthModule {}
