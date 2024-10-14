import { Module } from '@nestjs/common';
import { SorareModule } from './sorare.module';

@Module({
  imports: [SorareModule],
})
export class AppModule {}
