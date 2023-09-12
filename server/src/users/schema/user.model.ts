import * as mongoose from 'mongoose';
import { UserSchema } from './user.schema';

export interface User extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  walletId: mongoose.Schema.Types.ObjectId;
  roles: string[];
  id: string;
  notificaciones: string[];
}

export const UserModel = mongoose.model<User>('User', UserSchema);

export { UserSchema };
