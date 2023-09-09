import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PaymentTypes } from '../interfaces/payment.types';

@Schema()
export class BankAccount {
  @Prop({ required: true })
  paymentType: PaymentTypes;

  @Prop({ required: true })
  bankName: string;

  @Prop({ required: true })
  accountNumber: string;

  @Prop({ default: 1000000 })
  balance: number;
}

export const BankAccountSchema = SchemaFactory.createForClass(BankAccount);
