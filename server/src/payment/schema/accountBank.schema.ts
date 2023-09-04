import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PaymentTypes } from '../interfaces/payment.types';

@Schema()
export class BankAccount {
  _id?: string;

  @Prop({ required: true })
  paymentType: PaymentTypes;

  @Prop({ required: true })
  bankName: string;

  @Prop({ required: true })
  accountNumber: string;
}

export const BankAccountSchema = SchemaFactory.createForClass(BankAccount);
