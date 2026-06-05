import type { HttpClient } from '../../../class/HttpClient.js';
import type { ObjectList } from '../../../types.js';
import type { Egg, EggObject } from './eggs.types.js';

export class EggsClient {
  constructor(
    private httpClient: HttpClient,
    readonly nest: number,
  ) {}

  async fetch(): Promise<Egg[]> {
    const res = await this.httpClient.request<ObjectList<EggObject>>(
      'GET',
      `/application/nests/${this.nest}/eggs`,
      { parseDates: true },
    );
    return res.data.map((eggObject) => eggObject.attributes);
  }
}
