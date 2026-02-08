import type HttpClient from "../../class/HttpClient.js";
import type { NestList } from "./nests.types.js";

export default class NestsClient {
  constructor(private httpClient: HttpClient) {}

  async list() {
    const res = await this.httpClient.request<NestList>(
      "GET",
      "/application/nests",
    );
    return {
      ...res,
      data: res.data.map((nest) => ({
        ...nest,
        attributes: {
          ...nest.attributes,
          created_at: new Date(nest.attributes.created_at),
          updated_at: new Date(nest.attributes.updated_at),
        },
      })),
    };
  }
}
