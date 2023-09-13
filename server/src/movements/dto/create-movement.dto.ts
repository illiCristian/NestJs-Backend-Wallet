import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovementDto {
  @IsNotEmpty()
  @IsString()
  movement: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  source: string;

  @IsNotEmpty()
  @IsString()
  destination: string;

  @IsNotEmpty()
  @IsString()
  nameDest: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}
