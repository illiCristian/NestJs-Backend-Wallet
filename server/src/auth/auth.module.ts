import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
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

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),

    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Wallet', schema: WalletSchema },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UsersService, WalletService],
  exports: [PassportModule, JwtStrategy],
})
export class AuthModule {}
