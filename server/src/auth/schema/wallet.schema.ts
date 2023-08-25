import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
export type WalletDocument = HydratedDocument<Wallet>;

@Schema({
  timestamps: true,
})
export class Wallet {
  @Prop({ default: 0 })
  balance: number;

  @Prop({ default: false })
  status: boolean;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);

/*   @Prop({ type: String, default: new Types.ObjectId() })
  _id: Types.ObjectId;

    @Prop({ unique: false })
  balance: number;

 */
