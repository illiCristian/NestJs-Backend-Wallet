import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PaymentTypes } from '../interfaces/payment.types';

@Schema()
export class CreditCardMethod {
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

export const CreditCardSchema = SchemaFactory.createForClass(CreditCardMethod);
