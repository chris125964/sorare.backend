import Database = require('better-sqlite3');

export enum COL_TYPE {
  REF_INTEGER,
  INTEGER,
  REAL,
  CHAR_20,
  CHAR_30,
  CHAR_200,
  TEXT,
}

export type Column = {
  name: string;
  type: COL_TYPE;
  primaryKey?: boolean;
  notNull?: boolean;
  table?: string;
};

export class DB {
  private db: Database;
  private table: string;
  private columns: Column[];

  constructor(db: Database, table: string, columns?: Column[]) {
    this.db = db;
    this.table = table;
    this.columns = columns;
  }

  get DB() {
    return this.db;
  }

  get Table() {
    return this.table;
  }

  protected getSelectString(whereClause: string[]): string {
    let selectString = 'SELECT ';
    for (let loop = 0; loop < this.columns.length; loop += 1) {
      // if (!this.columns[loop].primaryKey) {
      selectString += this.columns[loop].name;
      if (loop !== this.columns.length - 1) {
        selectString += ', ';
      }
      // }
    }
    selectString += ` FROM ${this.Table}`;
    for (let loop = 0; loop < whereClause.length; loop += 1) {
      if (loop === 0) {
        selectString += ' WHERE ';
      } else {
        selectString += ' AND ';
      }
      selectString += `${whereClause[loop]} = ?`;
    }
    return selectString;
  }
}

export function createDB(database: string, verbose = false): Database {
  let db;
  if (verbose) {
    db = new Database(`${database}.sqlite`, { verbose: console.log });
  } else {
    db = new Database(`${database}.sqlite`);
  }
  return db;
}
