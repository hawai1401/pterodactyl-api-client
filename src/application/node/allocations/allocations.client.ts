import type z from 'zod';
import type HttpClient from '../../../class/HttpClient.js';
import type { BaseListArgs, IP, Sort } from '../../../types.js';
import buildQueryParams from '../../../utils/buildQueryParams.js';
import { listAllocationsFilterSchema } from '../node.schemas.js';
import type {
  ApplicationAllocationList,
  ApplicationAllocationListWithDate,
  CreateApplicationAllocationArgs,
} from './allocations.types.js';

export default class AllocationClient {
  constructor(
    private httpClient: HttpClient,
    readonly node: number,
  ) {}

  list(
    options: {
      filter?:
        | {
            ip?: IP | undefined;
            port?: string | number | undefined;
          }
        | undefined;
    } & BaseListArgs = {},
  ) {
    const filter = listAllocationsFilterSchema.optional().parse(options.filter);
    const queries = buildQueryParams<
      z.infer<typeof listAllocationsFilterSchema>,
      { id?: Sort | undefined; uuid?: Sort | undefined }
    >({ ...options, filter });
    return this.httpClient.request<ApplicationAllocationListWithDate>(
      'GET',
      `/application/nodes/${this.node}/allocations?${queries}`,
    );
  }

  create(options: CreateApplicationAllocationArgs) {
    return this.httpClient.request<
      ApplicationAllocationList,
      CreateApplicationAllocationArgs
    >('POST', `/application/nodes/${this.node}/allocations`, options);
  }
}
