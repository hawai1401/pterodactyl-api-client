import z from "zod";
import type HttpClient from "../../class/HttpClient.js";
import { editLocationSchema, locationId } from "./location.schemas.js";
import type { EditLocationArgs, Location } from "./location.types.js";

export default class LocationClient {
  readonly id: number;

  constructor(
    private httpClient: HttpClient,
    id: number,
  ) {
    this.id = locationId.parse(id);
  }

  async info() {
    const res = await this.httpClient.request<Location<string>>(
      "GET",
      `/application/locations/${this.id}`,
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

  async edit(options: EditLocationArgs) {
    const res = await this.httpClient.request<
      Location<string>,
      z.infer<typeof editLocationSchema>
    >(
      "PATCH",
      `/application/locations/${this.id}`,
      editLocationSchema.parse(options),
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

  delete() {
    return this.httpClient.request<void>(
      "DELETE",
      `/application/locations/${this.id}`,
    );
  }
}
