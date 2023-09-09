import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { PaymentTypes } from '../interfaces/payment.types';
import { CreditCardSchema } from './creditCard.schema';

@Schema()
export class CreditCardMethod extends mongoose.Document {
  _id?: string;

  @Prop({ required: true })
  paymentType: PaymentTypes;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  cardNumber: string;

  @Prop({ required: true })
  expirationDate: string;

  @Prop({ required: true })
  cvv: string;

  @Prop({ default: 1000000 })
  balance: number;
}

export const CreditCardModel = mongoose.model<CreditCardMethod>(
  'CreditCard',
  CreditCardSchema,
);
export { CreditCardSchema };
