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

  @Prop({ unique: [true, 'This card already exists!'] })
  cardNumber: string;

  @Prop({ required: true })
  expirationDate: string;

  @Prop({ required: true })
  cvv: string;
}

export const CreditCardModel = mongoose.model<CreditCardMethod>(
  'CreditCard',
  CreditCardSchema,
);
export { CreditCardSchema };
