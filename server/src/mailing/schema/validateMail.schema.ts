import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WalletDocument = HydratedDocument<Email>;

@Schema({
  timestamps: true,
})
export class Email {
  @Prop()
  code: string;

  @Prop()
  email: string;

  @Prop({ default: false })
  isValidate: boolean;
}

export const EmailSchema = SchemaFactory.createForClass(Email);
