import type HttpClient from "../../../class/HttpClient.js";
import { nestEggId } from "../nest.schemas.js";
import type { Egg } from "./egg.types.js";

export default class EggClient {
  readonly egg: number;

  constructor(
    private httpClient: HttpClient,
    readonly nest: number,
    egg: number,
  ) {
    this.egg = nestEggId.parse(egg);
  }

  async info() {
    const res = await this.httpClient.request<Egg<string>>(
      "GET",
      `/application/nests/${this.nest}/eggs/${this.egg}`,
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }
}
