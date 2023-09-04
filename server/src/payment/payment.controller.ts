import {
  Body,
  Controller,
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

@Controller('payment')
export class PaymentController {
  constructor(
    @InjectModel('CreditCard')
    private readonly CreditCardModel: Model<CreditCardMethod>,
    @InjectModel('Wallet') private readonly walletModel: Model<Wallet>,
    @Inject(forwardRef(() => PaymentService))
    private readonly paymentService: PaymentService,
  ) {}

  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post('/add-payment/:action')
  async createPaymentMethod(
    @Req() { user }: Request & { user: User },
    @Param('action') action: ActionPostPayment,
    @Body() paymentDto: CrediCardDto | CreateBankDto,
  ): Promise<Wallet> {
    return this.paymentService.createPaymentMethod(user.id, paymentDto, action);
  }
}
