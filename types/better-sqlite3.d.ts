declare module "better-sqlite3" {
  export namespace Database {
    export interface RunResult {
      changes: number;
      lastInsertRowid: number;
    }

    export interface Options {
      readonly?: boolean;
      fileMustExist?: boolean;
    }
  }

  export class Statement<T = any> {
    run(...bind: any[]): Database.RunResult;
    get(...bind: any[]): T | undefined;
  }

  export default class Database {
    constructor(filename: string, options?: Database.Options);
    prepare<T = any>(sql: string): Statement<T>;
    exec(sql: string): this;
    pragma(sql: string): this;
  }
}
