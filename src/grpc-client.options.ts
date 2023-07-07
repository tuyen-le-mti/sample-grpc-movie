import { ConfigService } from '@nestjs/config';
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { MOVIE_PACKAGE_NAME } from './modules/movie/protos/movie';

export function grpcClientOptions(configService: ConfigService): ClientOptions {
  return {
    transport: Transport.GRPC,
    options: {
      package: MOVIE_PACKAGE_NAME,
      protoPath: [join(__dirname, './modules/movie/protos/movie.proto')],
      url: configService.get('MOVIE_API_GRPC_URL'),
      loader: {
        defaults: true,
      },
    },
  };
}
