import { Module } from '@nestjs/common';
import { MovementsService } from './movements.service';
import { MovementsController } from './movements.controller';
import { UsersService } from 'src/users/users.service';
import { WalletService } from 'src/wallet/wallet.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MovementSchema } from './schema/movement.model';
import { WalletSchema } from 'src/wallet/schema/wallet.model';
import { UserSchema } from 'src/users/schema/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Movement', schema: MovementSchema },
      { name: 'User', schema: UserSchema },
      { name: 'Wallet', schema: WalletSchema },
    ]),
  ],
  controllers: [MovementsController],
  providers: [MovementsService, UsersService, WalletService],
  exports: [MongooseModule, MovementsService],
})
export class MovementsModule {}
