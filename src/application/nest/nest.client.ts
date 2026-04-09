import type HttpClient from "../../class/HttpClient.js";
import { nestId } from "./nest.schemas.js";
import type { Nest } from "./nest.types.js";
import EggsClient from "./eggs/eggs.client.js";
import EggClient from "./egg/egg.client.js";

export default class NestClient {
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
