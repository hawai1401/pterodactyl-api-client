import z from "zod";
import type HttpClient from "../../class/HttpClient.js";
import type {
  CreateLocationArgs,
  EditLocationArgs,
  Location,
  LocationList,
} from "./location.types.js";

export default class LocationClient {
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

  async info(id: number) {
    const res = await this.httpClient.request<Location<string>>(
      "GET",
      `/application/locations/${id}`,
    );
    return {
      ...res,
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  async create(options: CreateLocationArgs) {
    const schema = z.object({
      short: z.string().min(3).max(60),
      long: z.string().min(3).max(191),
    });
    const res = await this.httpClient.request<
      Location<string>,
      CreateLocationArgs
    >("POST", `/application/locations`, schema.parse(options));
    return {
      ...res,
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  async edit(id: number, options: EditLocationArgs) {
    const schema = z
      .object({
        short: z.string().min(3).max(60).optional(),
        long: z.string().min(3).max(191).optional(),
      })
      .refine((data) => data.short || data.long, {
        message: "Either short or long must be provided",
        path: ["short"],
      });
    const res = await this.httpClient.request<
      Location<string>,
      EditLocationArgs
    >("PATCH", `/application/locations/${id}`, schema.parse(options));
    return {
      ...res,
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  delete(id: number) {
    return this.httpClient.request<void>(
      "POST",
      `/application/locations/${id}`,
    );
  }
}
