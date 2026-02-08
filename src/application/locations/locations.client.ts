import z from "zod";
import type HttpClient from "../../class/HttpClient.js";
import { createLocationSchema } from "./locations.schemas.js";
import type { CreateLocationArgs, LocationList } from "./locations.types.js";
import type { Location } from "../location/location.types.js";

export default class LocationsClient {
  constructor(private httpClient: HttpClient) {}

  async list() {
    const res = await this.httpClient.request<LocationList>(
      "GET",
      "/application/locations",
    );
    return {
      ...res,
      data: res.data.map((location) => ({
        ...location,
        attributes: {
          ...location.attributes,
          created_at: new Date(location.attributes.created_at),
          updated_at: new Date(location.attributes.updated_at),
        },
      })),
    };
  }

  async create(options: CreateLocationArgs) {
    const res = await this.httpClient.request<
      Location<string>,
      z.infer<typeof createLocationSchema>
    >("POST", `/application/locations`, createLocationSchema.parse(options));
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
