import { Args, Query, Resolver } from '@nestjs/graphql';
import { SorareService } from './sorare.service';
import { debugResolver } from './utils/logging';

@Resolver('Sorare')
export class SorareResolver {
  constructor(private readonly sorareService: SorareService) {
    debugResolver(`constructor FootballerResolver`);
  }

  @Query('listClubs')
  async listClubs(
    @Args('user') _rarity: string,
  ): Promise<{ club: string; league: string; so5league: string }[]> {
    debugResolver(`FootballerResolver.listClubs() -> ...`);
    const response = await this.sorareService.listClubs();
    return response;
  }
}
