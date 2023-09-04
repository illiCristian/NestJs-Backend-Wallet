import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Req,
  UseGuards,
  forwardRef,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { Wallet } from './schema/wallet.model';
import { TransferData } from './interfaces/transfer-data';
import { TransferResult } from './interfaces/Transfer-result';
import { UsersService } from 'src/users/users.service';
import { ActionGetInfo, ActionPostWallet } from './interfaces/wallet.types';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/users/guard/auth-guard';
import { Request } from 'express';
import { User } from 'src/users/schema/user.model';

@Controller('wallet')
export class WalletController {
  constructor(
    @Inject(forwardRef(() => WalletService))
    private readonly walletService: WalletService,
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}

  // Peticion del usuario autenticado sin roles de administrador
  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('/wallet/:action')
  async getInfoWallet(
    @Req() { user }: Request & { user: User },
    @Param('action') action: ActionGetInfo,
  ): Promise<Wallet | { balance: number } | string> {
    return this.walletService.getInfoWallet(user.id, action);
  }

  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post('/wallet/:action')
  async operationsWallet(
    @Req() { user }: Request & { user: User },
    @Param('action') action: ActionPostWallet,
    @Body() depositData: { amount: number },
  ): Promise<Wallet | { amount: number } | string> {
    return this.walletService.operationsWallet(
      user.id,
      depositData.amount,
      action,
    );
  }

  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post(':userId/transfer')
  async transferBetweenWallets(
    @Req() { user }: Request & { user: User },
    @Body() transferData: TransferData,
  ): Promise<TransferResult> {
    return this.walletService.transferFunds(user.id, transferData);
  }
}
