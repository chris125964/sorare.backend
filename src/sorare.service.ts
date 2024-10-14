import { Injectable } from '@nestjs/common';

@Injectable()
export class SorareService {
  getSorare(): string {
    return `This is Sorare`;
  }
}
