import type HttpClient from "../../../class/HttpClient.js";
import type { EggList } from "./eggs.types.js";

export default class EggsClient {
  constructor(private httpClient: HttpClient, readonly nest: number) {}

  async list() {
    const res = await this.httpClient.request<EggList>(
      "GET",
      `/application/nests/${this.nest}/eggs`,
    );
    return {
      ...res,
      data: res.data.map((egg) => ({
        ...egg.attributes,
        created_at: new Date(egg.attributes.created_at),
        updated_at: new Date(egg.attributes.updated_at),
      })),
    };
  }
}
