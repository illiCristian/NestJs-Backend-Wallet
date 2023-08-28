import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class EmailDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Email no valido' })
  email: string;
}
