import type {
  BaseFetchOptions,
  NonMethodPartial,
  ObjectListWithPagination,
  Paginated,
} from '../../types.js';
import type { NestId, NestObject } from './nest.types.js';
import { nestId } from './nest.schemas.js';
import { Nest } from './nest.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';

export class NestManager extends BaseCacheManager<
  NestId,
  Nest
> {
  constructor(
    private httpClient: HttpClient,
    cacheTtl: number = ONE_MINUTE_IN_MILLISECONDS * 5,
  ) {
    super(cacheTtl, 'id');
  }

  async list(
    options?: Omit<BaseFetchOptions, 'force'>,
  ): Promise<Paginated<Nest>> {
    const nestObjectList = await this.httpClient.request<
      ObjectListWithPagination<NestObject>
    >('GET', '/application/nests', { parseDates: true });

    return {
      data: nestObjectList.data.map((nestObject) =>
        this.setCache(
          new Nest(this.httpClient, this, nestObject.attributes),
          options?.cache,
        ),
      ),
      pagination: nestObjectList.meta.pagination,
    };
  }

  async fetch(
    id: NestId,
    options?: BaseFetchOptions,
  ): Promise<Nest> {
    const cacheNest = this.getCache(id);
    if (cacheNest && !options?.force) return cacheNest;

    const parsedId = nestId.parse(id);
    const nestObject = await this.httpClient.request<NestObject>(
      'GET',
      `/application/nests/${parsedId}`,
      { parseDates: true },
    );

    return this.setCache(
      new Nest(this.httpClient, this, nestObject.attributes),
      options?.cache,
    );
  }

  resolve(
    id: NestId,
  ):
    | Nest
    | (NonMethodPartial<Nest> & Pick<Nest, 'id'>) {
    return (
      this.getCache(id) ??
      new Nest(this.httpClient, this, {
        id: nestId.parse(id),
      })
    );
  }
}
