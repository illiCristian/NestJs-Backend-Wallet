import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailDto } from './dto/email.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { EmailCodeDto } from './dto/emailCode.dto';
import { error } from 'console';
/* generateCode(email): string {

} */
@Injectable()
export class MailingService {
  constructor(
    private readonly mailerService: MailerService,
    private jwtService: JwtService,
    @InjectModel('Email') private readonly emailModel,
  ) {}
  public async generateCodeToken(email: string): Promise<string> {
    const min = 1000;
    const max = 9999;
    const code = Math.floor(Math.random() * (max - min + 1)) + min;
    return code.toString();
    /*  const token = await this.jwtService.signAsync({
      code: code.toString(),
      email: email,
    });
    console.log('token');
    console.log(token);
    console.log('token');
    return token; */ // Convierte el número en una cadena de texto
  }
  /* ({ code: code.toString(), email: email }); */
  public async sendEmail(emailDto: EmailDto): Promise<string> {
    const code = await this.generateCodeToken(emailDto.email);
    const emailExists = await this.emailModel.findOne({
      email: emailDto.email,
    });

    if (emailExists) {
      const { isValidate } = emailExists;
      if (isValidate) throw new UnauthorizedException('Email ya validado');
      await this.emailModel.findOneAndUpdate(
        { email: emailDto.email },
        { code: code },
      );
      console.log('Email actualizado');
    } else {
      const newEmail = await this.emailModel.create({
        code: code,
        email: emailDto.email,
      });
    }

    const res = await this.mailerService
      .sendMail({
        to: emailDto.email,
        from: 'noreply@nestjs.com',
        subject: 'Testing Nest Mailermodule with template ✔',
        template: 'action',
        context: {
          code: code,
          username: 'john doe',
        },
      })
      .then((success) => {
        console.log(success);
        return 'Email enviado correctamente';
      })
      .catch((err) => {
        console.log(err);
        throw new UnauthorizedException('Error al enviar el email');
      });
    return 'Email enviado correctamente';
  }

  public async validateCode(emaiCodelDto: EmailCodeDto): Promise<string> {
    const { code, email } = emaiCodelDto;
    const user = await this.emailModel.findOne({
      email: email,
    });
    if (!user) new UnauthorizedException('Email no encontrado');
    if (user.code === code) {
      user.isValidate = true;
      await user.save();
      return 'Email validado correctamente';
    } else {
      throw new UnauthorizedException('Codigo incorrecto');
    }
  }
}
