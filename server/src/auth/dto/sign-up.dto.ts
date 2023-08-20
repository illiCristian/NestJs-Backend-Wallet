import { IsNotEmpty, IsEmail, MinLength, IsString } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Email no valido' })
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @IsString()
  password: string;
}
