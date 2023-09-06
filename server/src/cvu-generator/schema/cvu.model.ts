import mongoose from 'mongoose';
import { Prop, Schema } from '@nestjs/mongoose';
import { CvuGeneratorSchema } from './cvu.schema';

@Schema({ timestamps: true })
export class CvuGenerator extends mongoose.Document {
  @Prop({ unique: true, required: true })
  cvu: string;

  // Otros campos de CVU, si es necesario
}

export const CvuGeneratorModel = mongoose.model<CvuGenerator>(
  'CvuGenerator',
  CvuGeneratorSchema,
);
export { CvuGeneratorSchema };
