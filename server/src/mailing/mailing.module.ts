import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailingService } from './mailing.service';
import { MailingController } from './mailing.controller';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailSchema } from './schema/validateMail.schema';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    MongooseModule.forFeature([{ name: 'Email', schema: EmailSchema }]),
  ],
  providers: [MailingService, ConfigService],
  controllers: [MailingController],
})
export class MailingModule {}
