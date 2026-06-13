import type { HttpClient } from '../../../class/HttpClient.js';
import type { ApplicationEggManager } from './egg.manager.js';
import { setManagerCacheSymbol } from '../../../symbols.js';
import type { BaseEgg, EggObject } from './egg.types.js';
import type { BaseFetchOptions } from '../../../types.js';

export class ApplicationEgg {
  public id!: number;
  public uuid!: string;
  public name!: string;
  public nest!: number;
  public author!: string;
  public description!: string;
  public dockerImage!: string;
  public dockerImages!: Record<string, string>;
  public config!: {
    files: Record<string, unknown>;
    startup: Record<string, unknown>;
    stop: string;
    logs: unknown;
    fileDenylist: unknown;
    extends: null;
  };
  public startup!: string;
  public script!: {
    privileged: boolean;
    install: string;
    entry: string;
    container: string;
    extends: null;
  };
  public createdAt!: Date;
  public updatedAt!: Date;

  constructor(
    private httpClient: HttpClient,
    private eggManager: ApplicationEggManager,
    data: Partial<BaseEgg> & Pick<BaseEgg, 'id'>,
  ) {
    Object.assign(this, data);
  }

  async fetch(options?: BaseFetchOptions): Promise<this> {
    const eggObject = await this.httpClient.request<EggObject>(
      'GET',
      `/application/nests/${this.nest}/eggs/${this.id}`,
      { parseDates: true },
    );

    Object.assign(this, eggObject.attributes);

    this.eggManager[setManagerCacheSymbol](this, options?.cache);

    return this;
  }
}
