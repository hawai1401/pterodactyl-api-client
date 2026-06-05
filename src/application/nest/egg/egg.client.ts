import type { HttpClient } from '../../../class/HttpClient.js';
import type { Egg, EggObject } from '../eggs/eggs.types.js';
import { nestEggId } from '../nest.schemas.js';

export class EggClient {
  readonly id: number;

  constructor(
    private httpClient: HttpClient,
    readonly nest: number,
    id: number,
  ) {
    this.id = nestEggId.parse(id);
  }

  async fetch(): Promise<Egg> {
    const eggObject = await this.httpClient.request<EggObject>(
      'GET',
      `/application/nests/${this.nest}/eggs/${this.id}`,
      { parseDates: true },
    );
    return eggObject.attributes;
  }
}
