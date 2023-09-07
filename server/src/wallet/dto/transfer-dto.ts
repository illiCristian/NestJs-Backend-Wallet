import { IsNotEmpty, IsNumber } from 'class-validator';

export class TransferDto {
  @IsNotEmpty()
  @IsNumber()
  balance: number;
}
