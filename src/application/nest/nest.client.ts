import type { HttpClient } from '../../class/HttpClient.js';
import { nestId } from './nest.schemas.js';
import { EggsClient } from './eggs/eggs.client.js';
import { EggClient } from './egg/egg.client.js';
import type { Nest, NestObject } from '../nests/nests.types.js';

export class NestClient {
  public eggs: EggsClient;
  readonly id: number;

  constructor(
    private httpClient: HttpClient,
    id: number,
  ) {
    this.id = nestId.parse(id);
    this.eggs = new EggsClient(httpClient, this.id);
  }

  egg(id: number) {
    return new EggClient(this.httpClient, this.id, id);
  }

  async fetch(): Promise<Nest> {
    const nestObject = await this.httpClient.request<NestObject>(
      'GET',
      `/application/nests/${this.id}`,
      { parseDates: true },
    );
    return nestObject.attributes;
  }
}
