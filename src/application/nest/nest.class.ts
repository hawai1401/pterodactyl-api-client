import type { HttpClient } from '../../class/HttpClient.js';
import type { NestManager } from './nest.manager.js';
import { setManagerCacheSymbol } from '../../symbols.js';
import { ApplicationEggManager } from './egg/egg.manager.js';
import type { BaseNest, NestObject } from './nest.types.js';
import type { BaseFetchOptions } from '../../types.js';

export class Nest {
  public id!: number;
  public uuid!: string;
  public author!: string;
  public name!: string;
  public description!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public eggs: ApplicationEggManager;

  constructor(
    private httpClient: HttpClient,
    private nestManager: NestManager,
    data: Partial<BaseNest> & Pick<BaseNest, 'id'>,
  ) {
    Object.assign(this, data);
    this.eggs = new ApplicationEggManager(this.httpClient, this.id);
  }

  async fetch(options?: BaseFetchOptions): Promise<this> {
    const nestObject = await this.httpClient.request<NestObject>(
      'GET',
      `/application/nests/${this.id}`,
      { parseDates: true },
    );

    Object.assign(this, nestObject.attributes);

    this.nestManager[setManagerCacheSymbol](this, options?.cache);

    return this;
  }
}
