import { WalletData } from './wallet-data';

export interface TransferResult {
  fromWallet: WalletData;
  toWallet: WalletData;
  message: string;
}
