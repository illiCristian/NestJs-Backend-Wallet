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

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  accountNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(16)
  @Matches(/^\d[\d\s-]*$/, {
    message: 'Number account bank no valid',
  })
  accountHolderName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  bankName: string;
}
