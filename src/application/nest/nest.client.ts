import type HttpClient from "../../class/HttpClient.js";
import { nestId } from "./nest.schemas.js";
import type { Nest } from "./nest.types.js";

export default class NestClient {
  readonly id: number;

  constructor(
    private httpClient: HttpClient,
    id: number,
  ) {
    this.id = nestId.parse(id);
  }

  async info() {
    const res = await this.httpClient.request<Nest<string>>(
      "GET",
      `/application/nests/${this.id}`,
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
