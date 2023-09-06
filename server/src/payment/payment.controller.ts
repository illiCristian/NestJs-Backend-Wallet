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
import { CreditCardMethod } from './schema/creditCard.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PaymentService } from 'src/payment/payment.service';
import { Wallet } from 'src/wallet/schema/wallet.model';
import { CrediCardDto } from './dto/create-card.dto';
import { CreateBankDto } from './dto/create-bank..dto';
import { ActionPostPayment } from './interfaces/payment.action';
import { User } from 'src/users/schema/user.model';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/users/guard/auth-guard';
import { BankAccountMethod } from './schema/accountBank.model';

@Controller('payment')
export class PaymentController {
  constructor(
    @InjectModel('CreditCard')
    private readonly CreditCardModel: Model<CreditCardMethod>,
    @InjectModel('BankAccount')
    private readonly bankAccountModel: Model<BankAccountMethod>,
    @InjectModel('Wallet') private readonly walletModel: Model<Wallet>,
    @Inject(forwardRef(() => PaymentService))
    private readonly paymentService: PaymentService,
  ) {}

  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post('add-payment/:action')
  async createPaymentMethod(
    @Req() { user }: Request & { user: User },
    @Param('action') action: ActionPostPayment,
    @Body() paymentDto: CrediCardDto | CreateBankDto,
  ): Promise<Wallet> {
    const { id } = user;
    return this.paymentService.createPaymentMethod(id, paymentDto, action);
  }

  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('credit-cards')
  async getAllPaymentMethodsCards(
    @Req() { user }: Request & { user: User },
  ): Promise<CreditCardMethod[]> {
    return await this.paymentService.getAllPaymentMethodsCards(user.id);
  }

  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('account-banks')
  async getAllPaymentMethodsBanks(
    @Req() { user }: Request & { user: User },
  ): Promise<BankAccountMethod[]> {
    return await this.paymentService.getAllPaymentMethodsBanks(user.id);
  }
}
