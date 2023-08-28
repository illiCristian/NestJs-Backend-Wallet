import { EmailDto } from './dto/email.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { MailingService } from './mailing.service';
import { EmailCodeDto } from './dto/emailCode.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Mailing')
@Controller('mailing')
export class MailingController {
  constructor(readonly mailingService: MailingService) {}
  @Post('send-mail')
  public sendMail(@Body() emailDto: EmailDto) {
    return this.mailingService.sendEmail(emailDto);
  }
  @Post('validate-code')
  public validateCode(@Body() emailCodeDto: EmailCodeDto) {
    return this.mailingService.validateCode(emailCodeDto);
  }
}
