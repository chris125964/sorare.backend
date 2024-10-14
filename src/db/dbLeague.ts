import Database = require('better-sqlite3');
import { DB, COL_TYPE } from './database';
import { DAOLeague } from '../dao/daoLeague';
import { debugDatabaseSo5League } from '../utils/logging';

export class DBLeague extends DB {
  private cache: { id: number; name: string; country: string }[];

  constructor(db: Database) {
    super(db, 'league', [
      { name: 'id', type: COL_TYPE.INTEGER, primaryKey: true },
      { name: 'name', type: COL_TYPE.CHAR_200, notNull: true },
      { name: 'country', type: COL_TYPE.CHAR_20, notNull: true },
    ]);
    this.cache = [];
  }

  findById(id: number, useCache = true): DAOLeague {
    const found = false;
    const name = 'undefined';
    const country = 'undefined';

    let tdbLeague = DAOLeague.withIDC(undefined);
    if (!found) {
      const idStatement = this.getSelectString(['id']);
      const result = this.DB.prepare(idStatement);
      const idC = result.get(id);
      debugDatabaseSo5League(idStatement + '[' + id + ' ]');
      tdbLeague = DAOLeague.withIDC(idC);
      if (idC && useCache) {
        this.cache.push({ id, name, country });
      }
    }
    return tdbLeague;
  }
}
