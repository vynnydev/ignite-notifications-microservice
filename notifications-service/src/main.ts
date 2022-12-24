import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe());

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: process.env.KAFKA_CLIENT_ID,
        brokers: ['host.docker.internal:9092'],
        ssl: process.env.KAFKA_USE_SSL === 'true',
              ...(process.env.KAFKA_SASL_USERNAME &&
                process.env.KAFKA_SASL_USERNAME !== '' &&
                process.env.KAFKA_SASL_PASSWORD &&
                process.env.KAFKA_SASL_PASSWORD !== '' && {
                  sasl: {
                    mechanism: 'plain',
                    username: process.env.KAFKA_SASL_USERNAME,
                    password: process.env.KAFKA_SASL_PASSWORD,
                  },
                }),
      },
      consumer: {
        groupId:
          !process.env.KAFKA_CONSUMER_GROUP_ID ||
          process.env.KAFKA_CONSUMER_GROUP_ID === ''
            ? 'my-consumer-' + Math.random()
            : process.env.KAFKA_CONSUMER_GROUP_ID,
      },
    },
  });

  const config = new DocumentBuilder()
    .setTitle('Notification Service')
    .setDescription('Notification Service for Store and User developed in NestJS, based in Clean Architecture')
    .setVersion('1.0')
    .addTag('notifications')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
