import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type MovementDocument = HydratedDocument<Movement>;
@Schema({
  timestamps: true,
})
export class Movement {
  _id?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' })
  walletId: mongoose.Schema.Types.ObjectId;

  @Prop()
  movement: string;

  @Prop()
  type: string;

  @Prop()
  amount: number;

  @Prop()
  source: string;

  @Prop()
  destination: string;

  @Prop()
  nameDest: string;

  @Prop()
  status: string;

  @Prop()
  date: Date;
}

export const MovementSchema = SchemaFactory.createForClass(Movement);
