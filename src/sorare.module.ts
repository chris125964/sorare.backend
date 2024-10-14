import { Module } from '@nestjs/common';
import { SorareController } from './sorare.controller';
import { SorareService } from './sorare.service';

@Module({
  controllers: [SorareController],
  providers: [SorareService],
})
export class SorareModule {}
