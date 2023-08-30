import { Document } from 'mongoose';

export interface WalletInterface extends Document {
  readonly _id?: string;
  readonly balance?: number;
}
