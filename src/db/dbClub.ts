import Database = require('better-sqlite3');
import { COL_TYPE, DB } from './database';
import { DAOClub } from '../dao/daoClub';
import { debugDatabaseClub } from '../utils/logging';

/**
 * @group Database
 *
 * @class DBClub
 * @extends {DB}
 */
export class DBClub extends DB {
  private cache: {
    id: number;
    name: string;
    so5league_id: number;
    league_id: number;
  }[];

  constructor(db: Database) {
    super(db, 'club', [
      { name: 'id', type: COL_TYPE.INTEGER, primaryKey: true },
      { name: 'name', type: COL_TYPE.CHAR_200, notNull: true },
      { name: 'so5league_id', type: COL_TYPE.REF_INTEGER, table: 'so5League' },
      { name: 'league_id', type: COL_TYPE.REF_INTEGER, table: 'league' },
    ]);
    this.cache = [];
  }

  findAll(): DAOClub[] {
    const idStatement = this.getSelectString([]);
    debugDatabaseClub(idStatement);
    const idResult = this.DB.prepare(idStatement);
    const info = idResult.all();
    const clubs: DAOClub[] = [];
    for (const inf of info) {
      const club = DAOClub.Default(
        inf.id,
        inf.name,
        inf.so5league_id,
        inf.league_id,
      );
      clubs.push(club);
    }
    return clubs;
  }
}
