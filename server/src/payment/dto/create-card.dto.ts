import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PaymentTypes } from '../interfaces/payment.types';

export class CrediCardDto {
  @ApiProperty()
  @IsNotEmpty()
  paymentType: PaymentTypes;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(16)
  @MaxLength(16)
  @Matches(/^\d[\d\s-]*$/, {
    message: 'Number card no valid',
  })
  cardNumber: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: 'Fecha de vencimiento no válida. Formato: MM/YY',
  })
  expirationDate: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(4)
  @IsString()
  @Matches(/^\d[\d\s-]*$/, {
    message: 'CVV de tarjeta no válido',
  })
  cvv: string;
}
