import { Module } from '@nestjs/common';
import { UserSchema } from 'src/users/schema/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from 'src/users/users.service';
import { AuthService } from 'src/auth/auth.service';
import { CvuGeneratorSchema } from './schema/cvu.model';
import { CvuGeneratorService } from './cvu-generator.service';

@Module({
  providers: [CvuGeneratorService, AuthService, UsersService],
  controllers: [],
  exports: [CvuGeneratorService],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
      {
        name: 'CvuGenerator',
        schema: CvuGeneratorSchema,
      },
    ]),
  ],
})
export class PaymentModule {}
