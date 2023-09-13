import * as mongoose from 'mongoose';
import { MovementSchema } from './movement.schema';

export interface Movement extends mongoose.Document {
  walletId: mongoose.Schema.Types.ObjectId;
  movement: string;
  type: string;
  amount: number;
  source: string;
  destination: string;
  nameDest: string;
  status: string;
  date: Date;
}

export const MovementModel = mongoose.model<Movement>(
  'Movement',
  MovementSchema,
);

export { MovementSchema };
