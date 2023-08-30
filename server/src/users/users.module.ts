import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletSchema } from 'src/wallet/schema/wallet.model';
import { WalletService } from 'src/wallet/wallet.service';
import { UserSchema } from './schema/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Wallet', schema: WalletSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, WalletService],
  exports: [MongooseModule, UsersService],
})
export class UsersModule {}
