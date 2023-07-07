/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MovieController } from './controllers';

@Module({
  imports: [ConfigModule],
  controllers: [MovieController],
  providers: [],
  exports: [],
})
export class MovieModule {}
