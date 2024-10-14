import { Controller, Get } from '@nestjs/common';
import { SorareService } from './sorare.service';

@Controller('sorare')
export class SorareController {
  constructor(private readonly sorareService: SorareService) {}

  @Get()
  getHi(): string {
    return this.sorareService.getSorare();
  }
}
