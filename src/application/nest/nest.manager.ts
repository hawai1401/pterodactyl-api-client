import type {
  BaseFetchOptions,
  ObjectListWithPagination,
  Paginated,
} from '../../types.js';
import type { NestId, NestObject } from './nest.types.js';
import { nestId } from './nest.schemas.js';
import { Nest } from './nest.class.js';
import type { HttpClient } from '../../class/HttpClient.js';
import { ONE_MINUTE_IN_MILLISECONDS } from '../../utils/vars.js';
import { BaseCacheManager } from '../../class/BaseCacheManager.js';
import { Egg } from './egg/egg.class.js';

export class NestManager extends BaseCacheManager<NestId, Nest> {
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
    >('GET', '/application/nests?include=eggs,eggs.variables', {
      parseDates: true,
    });

    return {
      data: nestObjectList.data.map((nestObject) => {
        const { relationships, ...attributes } = nestObject.attributes;
        return this.setCache(
          new Nest(this.httpClient, this, {
            ...attributes,
            eggs: relationships.eggs.data.map((eggObject) => {
              const { relationships, ...attributes } = eggObject.attributes;
              return new Egg(this.httpClient, {
                ...attributes,
                variables: relationships.variables.data.map(
                  (variableObject) => variableObject.attributes,
                ),
              });
            }),
          }),
          options?.cache,
        );
      }),
      pagination: nestObjectList.meta.pagination,
    };
  }

  async fetch(id: NestId, options?: BaseFetchOptions): Promise<Nest> {
    const cacheNest = this.getCache(id);
    if (cacheNest && !options?.force) return cacheNest;

    return this.setCache(
      new Nest(
        this.httpClient,
        this,
        (
          await this.httpClient.request<NestObject>(
            'GET',
            `/application/nests/${nestId.parse(id)}`,
            { parseDates: true },
          )
        ).attributes,
      ),
      options?.cache,
    );
  }

  resolve(id: NestId): Nest {
    return super.resolve(
      id,
      () =>
        new Nest(this.httpClient, this, {
          id: nestId.parse(id),
        }),
    );
  }
}
