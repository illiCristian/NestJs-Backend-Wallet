import { EmailDto } from './dto/email.dto';
import { Body, Controller, Get } from '@nestjs/common';
import { MailingService } from './mailing.service';

@Controller('mailing')
export class MailingController {
  constructor(readonly mailingService: MailingService) {}
  @Get('send-mail')
  public sendMail(@Body() emailDto: EmailDto) {
    this.mailingService.sendEmail(emailDto);
  }
}
