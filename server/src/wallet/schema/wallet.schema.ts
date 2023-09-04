import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Wallet {
  @Prop({ default: 'Mercado Pago' })
  name: string;

  @Prop({ default: false })
  status: boolean;

  @Prop({ default: 0 })
  balance: number;

  @Prop({ type: [String], default: [] })
  paymentMethods: string[];
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
