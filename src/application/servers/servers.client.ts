import type { infer as zInfer } from 'zod';
import {
  createServerSchema,
  listServersFilterSchema,
} from './servers.schemas.js';
import type {
  ApplicationServer,
  ApplicationServerObject,
  CreateServerPayload,
  FetchApplicationServersOptions,
} from './servers.types.js';
import type { ObjectListWithPagination } from '../../types.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { BaseClient } from '../../class/BaseClient.js';

export class ServersClient extends BaseClient {
  async fetch(options?: FetchApplicationServersOptions) {
    const filter = listServersFilterSchema.optional().parse(options?.filter);
    const queries = buildQueryParams({ ...options, filter });
    const res = await this.httpClient.request<
      ObjectListWithPagination<ApplicationServerObject>
    >('GET', `/application/servers?${queries}`, { parseDates: true });
    return res;
  }

  async create(payload: CreateServerPayload): Promise<ApplicationServer> {
    const serverObject = await this.httpClient.request<
      ApplicationServerObject,
      zInfer<typeof createServerSchema>
    >('POST', `/application/servers`, createServerSchema.parse(payload), {
      parseDates: true,
    });
    return serverObject.attributes;
  }
}
