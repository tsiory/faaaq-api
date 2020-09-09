import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /// SETUP SWAGGER
  const options = new DocumentBuilder()
    .setTitle('FAAAQ API')
    .setDescription('The FAAAQ API description.')
    .setVersion('1.0')
    .addServer('https://faaaq-api.herokuapp.com')
    .setContact(
      'Tsiory Fitiavana ANHY KRISHNA',
      null,
      'tsiory.krishna@gmail.com',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  ///

  app.enableCors();

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
