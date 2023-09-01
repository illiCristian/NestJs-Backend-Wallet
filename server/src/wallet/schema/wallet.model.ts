/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { WalletSchema } from './wallet.schema';

export interface Wallet extends mongoose.Document {
  // userId: mongoose.Schema.Types.ObjectId;
  balance: number;
  status: boolean;
  name: string;
}

export const WalletModel = mongoose.model<Wallet>('Wallet', WalletSchema);
export { WalletSchema };
