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

  @ApiProperty({
    example: 'John Doe',
    description: 'Nombre del titular de la tarjeta',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: '1111 2222 3333 4444',
    description: 'Número de la tarjeta con un minimo y maximo de 16 digitos',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(16)
  @MaxLength(16)
  @Matches(/^\d[\d\s-]*$/, {
    message: 'Number card no valid',
  })
  cardNumber: string;

  @ApiProperty({
    example: '08/23',
    description: 'Fecha de vencimiento de la tarjeta de 3 o 4 dígitos',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: 'Fecha de vencimiento no válida. Formato: MM/YY',
  })
  expirationDate: string;

  @ApiProperty({
    example: '123',
    description: 'Código de seguridad de la tarjeta',
  })
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(4)
  @IsString()
  @Matches(/^\d[\d\s-]*$/, {
    message: 'CVV de tarjeta no válido',
  })
  cvv: string;
}
