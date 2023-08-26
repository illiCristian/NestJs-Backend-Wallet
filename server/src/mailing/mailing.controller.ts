import { EmailDto } from './dto/email.dto';
import { Body, Controller, Get } from '@nestjs/common';
import { MailingService } from './mailing.service';
import { EmailCodeDto } from './dto/emailCode.dto';

@Controller('mailing')
export class MailingController {
  constructor(readonly mailingService: MailingService) {}
  @Get('send-mail')
  public sendMail(@Body() emailDto: EmailDto) {
    return this.mailingService.sendEmail(emailDto);
  }
  @Get('validate-code')
  public validateCode(@Body() emailCodeDto: EmailCodeDto) {
    return this.mailingService.validateCode(emailCodeDto);
  }
}
