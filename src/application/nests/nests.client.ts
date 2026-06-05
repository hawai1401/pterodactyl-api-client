import { BaseClient } from '../../class/BaseClient.js';
import type { ObjectListWithPagination, Paginated } from '../../types.js';
import type { Nest, NestObject } from './nests.types.js';

export class NestsClient extends BaseClient {
  async list(): Promise<Paginated<Nest>> {
    const nestObjectList = await this.httpClient.request<
      ObjectListWithPagination<NestObject>
    >('GET', '/application/nests', { parseDates: true });

    return {
      data: nestObjectList.data.map((nestObject) => nestObject.attributes),
      pagination: nestObjectList.meta.pagination,
    };
  }
}
