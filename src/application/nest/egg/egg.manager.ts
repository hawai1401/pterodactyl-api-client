import type { BaseFetchOptions, ObjectList } from '../../../types.js';
import type { EggId, EggObject } from './egg.types.js';
import { nestEggId } from '../nest.schemas.js';
import { Egg } from './egg.class.js';
import type { HttpClient } from '../../../class/HttpClient.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../../utils/vars.js';
import { BaseCacheManager } from '../../../class/BaseCacheManager.js';

export class EggManager extends BaseCacheManager<EggId, Egg> {
  constructor(
    private httpClient: HttpClient,
    readonly nestId: number,
    cacheTtl: number = ONE_MINUTE_IN_MILLISECONDS * 5,
  ) {
    super(cacheTtl, 'id');
  }

  async list(options?: Omit<BaseFetchOptions, 'force'>): Promise<Egg[]> {
    const res = await this.httpClient.request<ObjectList<EggObject>>(
      'GET',
      `/application/nests/${this.nestId}/eggs?include=variables`,
      { parseDates: true },
    );
    return res.data.map((eggObject) =>
      this.setCache(
        new Egg(this.httpClient, this, {
          ...eggObject.attributes,
          relationships: {
            variables: eggObject.attributes.relationships.variables.data.map(
              (eggVariable) => eggVariable.attributes,
            ),
          },
        }),
        options?.cache,
      ),
    );
  }

  async fetch(id: EggId, options?: BaseFetchOptions): Promise<Egg> {
    const cacheEgg = this.getCache(id);
    if (cacheEgg && !options?.force) return cacheEgg;

    const eggObject = await this.httpClient.request<EggObject>(
      'GET',
      `/application/nests/${this.nestId}/eggs/${nestEggId.parse(id)}?include=variables`,
      { parseDates: true },
    );
    return this.setCache(
      new Egg(this.httpClient, this, {
        ...eggObject.attributes,
        relationships: {
          variables: eggObject.attributes.relationships.variables.data.map(
            (eggVariable) => eggVariable.attributes,
          ),
        },
      }),
      options?.cache,
    );
  }

  resolve(id: EggId): Egg {
    return super.resolve(
      id,
      () =>
        new Egg(this.httpClient, this, {
          id: nestEggId.parse(id),
          nest: this.nestId,
        }),
    );
  }
}
