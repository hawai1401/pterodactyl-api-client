import type { BaseArgs, method } from "../types.js";
import { PterodactyleAPIError } from "./APIError.js";

export default class HttpClient {
  constructor(
    private baseURL: URL,
    private apiKey: string,
  ) {}

  async request<
    T,
    U extends BaseArgs | undefined = undefined,
    V extends method = method,
  >(
    method: V,
    path: string,
    body?: V extends "GET" ? null : V extends "DELETE" ? null : U,
  ): Promise<T> {
    const res = await fetch(new URL(`api${path}`, this.baseURL), {
      method,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!res.ok) {
      throw new PterodactyleAPIError<U>(
        res.status,
        await res.text(),
        path,
        body,
      );
    }

    return res.json() as Promise<T>;
  }
}
