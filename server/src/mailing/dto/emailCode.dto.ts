import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class EmailCodeDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Email no valido' })
  email: string;

  @IsString()
  @IsNotEmpty()
  code: string;
}
