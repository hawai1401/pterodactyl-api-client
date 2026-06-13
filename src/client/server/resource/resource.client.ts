import type { HttpClient } from '../../../class/HttpClient.js';
import type { Stats, StatsObject } from './resource.types.js';

export class ResourceClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  async usage(): Promise<Stats> {
    const statsObject = await this.httpClient.request<StatsObject>(
      'GET',
      `/client/servers/${this.server}/resources`,
    );
    return statsObject.attributes;
  }
}
