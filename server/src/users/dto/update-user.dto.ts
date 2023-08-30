import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  // Otros campos que deseas permitir actualizar
}
