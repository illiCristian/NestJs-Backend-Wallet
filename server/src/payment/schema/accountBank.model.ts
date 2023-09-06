import { Prop, Schema } from '@nestjs/mongoose';
import { PaymentTypes } from '../interfaces/payment.types';
import { BankAccountSchema } from './accountBank.schema';
import mongoose from 'mongoose';

@Schema()
export class BankAccountMethod extends mongoose.Document {
  _id?: string;

  @Prop({ required: true })
  paymentType: PaymentTypes;

  @Prop({ required: true })
  bankName: string;

  @Prop({ required: true })
  accountNumber: string;

  @Prop({ default: 1000000 })
  balance: number;
}

export const BankAccountModel = mongoose.model<BankAccountMethod>(
  'BankAccount',
  BankAccountSchema,
);
export { BankAccountSchema };
