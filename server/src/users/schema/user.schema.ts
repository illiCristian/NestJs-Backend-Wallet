import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema({
  timestamps: true,
})
export class User {
  _id?: string;

  @Prop()
  name: string;

  @Prop({ unique: [true, 'Email ya registrado en la base de datos'] })
  email: string;

  @Prop({ trim: true })
  password: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' }) // Agrega esta línea
  walletId: mongoose.Schema.Types.ObjectId;

  @Prop({ type: [String], default: ['user'] })
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
