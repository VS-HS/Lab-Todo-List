import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('OpenAPI definition')
    .setDescription('by Daniel Lastanao and Enrique Subías')
    .setVersion('0')
    .addServer('http://localhost:8080 - Generated server url')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(8080);
}
bootstrap().then((r) => console.log('Server started' + r));
