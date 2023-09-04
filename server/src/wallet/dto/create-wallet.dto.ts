import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateWalletDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  balance?: number;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsArray()
  @IsMongoId({ each: true }) // Esto valida que cada elemento sea un ObjectId válido
  paymentMethods: string[];
}
