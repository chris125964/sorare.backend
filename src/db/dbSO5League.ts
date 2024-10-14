import Database = require('better-sqlite3');
import { COL_TYPE, DB } from './database';
import { debugDatabaseSo5League } from 'src/utils/logging';
import { DAOSo5League } from 'src/dao/daoSO5League';

export class DBSo5League extends DB {
  private cache: {
    id: number;
    name: string;
  }[];

  constructor(db: Database) {
    super(db, 'so5league', [
      { name: 'id', type: COL_TYPE.INTEGER, primaryKey: true },
      { name: 'name', type: COL_TYPE.CHAR_200, notNull: true },
    ]);
    this.cache = [];
  }

  findById(id: number, useCache = true): DAOSo5League {
    const found = false;
    const name = 'undefined';

    // if (useCache) {
    //   const idx = this.cache.findIndex((row) => row.id === id);
    //   if (idx >= 0) {
    //     found = true;
    //     this.nrCacheAccess += 1;
    //     name = this.cache[idx].name;
    //   }
    // }

    let tdbSo5League = DAOSo5League.withIDC(undefined);
    if (!found) {
      const idStatement = this.getSelectString(['id']);
      const idResult = this.DB.prepare(idStatement);
      const idC = idResult.get(id);
      debugDatabaseSo5League(idStatement + ' [' + id + ' ]');
      tdbSo5League = DAOSo5League.withIDC(idC);
      if (idC && useCache) {
        this.cache.push({ id, name });
      }
    }
    return tdbSo5League;
  }
}
