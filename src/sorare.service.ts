import { Injectable } from '@nestjs/common';
import { createDB } from './db/database';
import { DBClub } from './db/dbClub';
import { DBLeague } from './db/dbLeague';
import { DBSo5League } from './db/dbSO5League';
import { TClub } from './types';

@Injectable()
export class SorareService {
  // constructor(private readonly sorareService: SorareService) {
  //   debugService(`constructor SorareResolver`);
  // }

  getSorare(): string {
    return `This is Sorare`;
  }

  async listClubs(): Promise<TClub[]> {
    const db = createDB('backend');
    const dbClub = new DBClub(db);
    const clubs = dbClub.findAll();
    const dbLeague = new DBLeague(db);
    const dbSO5League = new DBSo5League(db);

    const clubs2 = clubs.map((club) => {
      const league = dbLeague.findById(club.LeagueId);
      const so5league = dbSO5League.findById(club.So5LeagueId);
      return {
        club: club.Name,
        so5league: so5league.Name,
        league: league.Name,
      };
    });

    return clubs2;
  }
}
