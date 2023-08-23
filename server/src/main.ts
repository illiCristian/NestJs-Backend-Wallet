import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Para que todas las rutas empiecen a partir de /api
  app.setGlobalPrefix('/api');

  //Para el class validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  //Cors
  app.enableCors();

  //Config necesaria para documentar con swagger
  //http://localhost:8000/docs para ver la documentacion
  const config = new DocumentBuilder()
    .setTitle('Mercado Clone API')
    .setDescription('Documentacion del clone Mercado Pago')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  //Puerto en el cual corre el servidor
  await app.listen(parseInt(process.env.PORT) || 8000);
}
bootstrap();
