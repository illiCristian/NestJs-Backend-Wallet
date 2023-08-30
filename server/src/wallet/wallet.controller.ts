import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  forwardRef,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { Wallet } from './schema/wallet.model';
import { TransferData } from './interfaces/transfer-data';
import { TransferResult } from './interfaces/Transfer-result';
import { UsersService } from 'src/users/users.service';
import { ActionGetInfo, ActionPostWallet } from './interfaces/wallet.types';

@Controller('wallet')
export class WalletController {
  constructor(
    @Inject(forwardRef(() => WalletService))
    private readonly walletService: WalletService,
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}

  @Post(':userId/deposit')
  async depositToWallet(
    @Param('userId') userId: string,
    @Body() depositData: { amount: number },
  ): Promise<Wallet> {
    return this.walletService.depositToWallet(userId, depositData.amount);
  }

  @Get(':userId/balance')
  async getWalletBalance(
    @Param('userId') userId: string,
  ): Promise<{ balance: number }> {
    return this.walletService.getWalletBalance(userId);
  }

  @Get(':userId/wallet/:action')
  async getInfoWallet(
    @Param('userId') userId: string,
    @Param('action') action: ActionGetInfo,
  ): Promise<Wallet | { balance: number } | string> {
    return this.walletService.getInfoWallet(userId, action);
  }

  @Post(':userId/wallet/:action')
  async operationsWallet(
    @Param('userId') userId: string,
    @Param('action') action: ActionPostWallet,
    @Body() depositData: { amount: number },
  ): Promise<Wallet | { amount: number } | string> {
    return this.walletService.operationsWallet(
      userId,
      depositData.amount,
      action,
    );
  }

  @Post(':userId/withdraw')
  async withdrawFromWallet(
    @Param('userId') userId: string,
    @Body('balance') balance: number,
  ): Promise<Wallet | null> {
    return this.walletService.withdraw(userId, balance);
  }

  @Post(':userId/transfer')
  async transferBetweenWallets(
    @Param('userId') userId: string,
    @Body() transferData: TransferData,
  ): Promise<TransferResult> {
    return this.walletService.transferFunds(userId, transferData);
  }
}
