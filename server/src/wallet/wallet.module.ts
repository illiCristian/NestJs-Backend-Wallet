import { Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';

import { MongooseModule } from '@nestjs/mongoose';
import { WalletSchema } from './schema/wallet.model';
import { UsersService } from 'src/users/users.service';
import { UserSchema } from 'src/users/schema/user.model';

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
    ]),
  ],
  providers: [WalletService, UsersService],
  exports: [WalletService, MongooseModule],
})
export class WalletModule {}
