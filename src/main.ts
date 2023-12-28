import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const protocol: string = process.env.PROTOCOL || 'http';
  const domain: string = process.env.DOMAIN || 'localhost';
  const port = process.env.PORT || 3000;
  const globalPrefix: string = 'api';

  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Exchange Rate API')
    .setDescription('API to get currency exchange')
    .setVersion('1.0')
    .addTag('Exchange Rate')
    .addTag('Auth')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document);

  await app.listen(port, () =>
    Logger.log(
      `🚀 Application is running on: ${protocol}://${domain}:${port}/${globalPrefix}`,
    ),
  );
}
bootstrap();
