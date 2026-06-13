import type {
  BaseFetchOptions,
  NonMethodPartial,
  ObjectList,
} from '../../../types.js';
import type { EggId, EggObject } from './egg.types.js';
import { nestEggId } from '../nest.schemas.js';
import { ApplicationEgg } from './egg.class.js';
import type { HttpClient } from '../../../class/HttpClient.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../../utils/vars.js';
import { BaseCacheManager } from '../../../class/BaseCacheManager.js';

export class ApplicationEggManager extends BaseCacheManager<
  EggId,
  ApplicationEgg
> {
  constructor(
    private httpClient: HttpClient,
    readonly nestId: number,
    cacheTtl: number = ONE_MINUTE_IN_MILLISECONDS * 5,
  ) {
    super(cacheTtl, 'id');
  }

  async list(
    options?: Omit<BaseFetchOptions, 'force'>,
  ): Promise<ApplicationEgg[]> {
    const res = await this.httpClient.request<ObjectList<EggObject>>(
      'GET',
      `/application/nests/${this.nestId}/eggs`,
      { parseDates: true },
    );
    return res.data.map((eggObject) =>
      this.setCache(
        new ApplicationEgg(this.httpClient, this, eggObject.attributes),
        options?.cache,
      ),
    );
  }

  async fetch(id: EggId, options?: BaseFetchOptions): Promise<ApplicationEgg> {
    const cacheEgg = this.getCache(id);
    if (cacheEgg && !options?.force) return cacheEgg;

    const parsedId = nestEggId.parse(id);
    const eggObject = await this.httpClient.request<EggObject>(
      'GET',
      `/application/nests/${this.nestId}/eggs/${parsedId}`,
      { parseDates: true },
    );

    return this.setCache(
      new ApplicationEgg(this.httpClient, this, eggObject.attributes),
      options?.cache,
    );
  }

  resolve(
    id: EggId,
  ):
    | ApplicationEgg
    | (NonMethodPartial<ApplicationEgg> & Pick<ApplicationEgg, 'id'>) {
    return (
      this.getCache(id) ??
      new ApplicationEgg(this.httpClient, this, {
        id: nestEggId.parse(id),
        nest: this.nestId,
      })
    );
  }
}
