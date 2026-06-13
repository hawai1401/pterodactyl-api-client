import type { HttpClient } from '../../../class/HttpClient.js';
import type { ServerDatabaseManager } from './database.manager.js';
import {
  removeManagerCacheSymbol,
  setManagerCacheSymbol,
} from '../../../symbols.js';
import type {
  BaseApplicationDatabase,
  ApplicationDatabaseObject,
} from './database.types.js';
import type { BaseFetchOptions } from '../../../types.js';

export class ServerDatabase {
  public id!: number;
  public server!: number;
  public host!: number;
  public database!: string;
  public username!: string;
  public remote!: string;
  public maxConnections!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  constructor(
    private httpClient: HttpClient,
    private databaseManager: ServerDatabaseManager,
    data: Partial<BaseApplicationDatabase> &
      Pick<BaseApplicationDatabase, 'id' | 'server'>,
  ) {
    Object.assign(this, data);
  }

  async fetch(options?: BaseFetchOptions): Promise<this> {
    Object.assign(
      this,
      (
        await this.httpClient.request<ApplicationDatabaseObject>(
          'GET',
          `/application/servers/${this.server}/databases/${this.id}`,
          { parseDates: true },
        )
      ).attributes,
    );

    this.databaseManager[setManagerCacheSymbol](this, options?.cache);

    return this;
  }

  async resetPassword(): Promise<void> {
    await this.httpClient.request(
      'POST',
      `/application/servers/${this.server}/databases/${this.id}/reset-password`,
    );
  }

  async delete(): Promise<void> {
    this.databaseManager[removeManagerCacheSymbol](this.id);
    await this.httpClient.request(
      'DELETE',
      `/application/servers/${this.server}/databases/${this.id}`,
    );
  }
}
