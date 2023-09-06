import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class CvuGenerator {
  _id?: string;

  @Prop({
    type: String,
    unique: true, // Asegura que el CVU sea único
    required: true,
  })
  cvu: string;
}

export const CvuGeneratorSchema = SchemaFactory.createForClass(CvuGenerator);
