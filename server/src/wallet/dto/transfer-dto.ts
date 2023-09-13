import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class TransferDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  balance: number;
}
