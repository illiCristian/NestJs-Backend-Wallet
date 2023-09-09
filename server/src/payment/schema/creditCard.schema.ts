import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PaymentTypes } from '../interfaces/payment.types';

@Schema()
export class CreditCardMethod {
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

export const CreditCardSchema = SchemaFactory.createForClass(CreditCardMethod);
