import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MailingModule } from './mailing/mailing.module';
//Config agregada para nodemailer
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { WalletModule } from './wallet/wallet.module';
import { MovementsModule } from './movements/movements.module';
import { PaymentModule } from './payment/payment.module';
import { GatewayModule } from './notifications/gateway-module';

//import { CvuGeneratorService } from './cvu-generator/cvu-generator.service';
@Module({
  //Importamos los modulos que vamos a usar
  imports: [
    //Si no importamos los modulos creados no los podemos usar
    UsersModule,
    AuthModule,
    MailingModule,
    WalletModule,
    PaymentModule,
    //CvuGeneratorService,

    GatewayModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailerModule.forRootAsync({
      useFactory: () => ({
        //transport: 'smtps://user@domain.com:pass@smtp.domain.com',
        transport: {
          service: 'gmail',
          host: 'smtp.gmail.com',
          port: 587,
          ignoreTLS: true,
          secure: false,
          tls: {
            rejectUnauthorized: false,
          },
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        },
        template: {
          dir: process.cwd() + '/templates/',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
    ConfigModule.forRoot({
      envFilePath: '.env.local',
      isGlobal: true,
    }),
    //Conexion con la base de datos
    MongooseModule.forRoot(process.env.MONGO_URI),
    MovementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
