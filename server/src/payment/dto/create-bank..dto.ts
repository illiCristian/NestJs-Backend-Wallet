import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PaymentTypes } from '../interfaces/payment.types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBankDto {
  @ApiProperty()
  @IsNotEmpty()
  paymentType: PaymentTypes;

  @ApiProperty({
    example: 'John Doe',
    description: 'Nombre del titular de la cuenta',
  })
  @IsNotEmpty()
  @IsString()
  accountHolderName: string;

  @ApiProperty({ example: '1551441545', description: 'Número de cuenta' })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(16)
  @Matches(/^\d[\d\s-]*$/, {
    message: 'Number account bank no valid',
  })
  accountNumber: string;

  @ApiProperty({
    example: 'Banco Santander Rio',
    description: 'Nombre del Banco',
  })
  @IsNotEmpty()
  @IsString()
  bankName: string;
}
