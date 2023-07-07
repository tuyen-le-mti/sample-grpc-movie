import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-client.options';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  app.connectMicroservice<MicroserviceOptions>(
    grpcClientOptions(configService),
  );

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
