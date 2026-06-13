import type { BasePayload, FetchMethod } from '../types.js';
import { toCamelCase, type CamelCasedProperties } from '../utils/camelCase.js';
import { PterodactylApiError } from './ApiError.js';

export type HttpClientOptions = { parseDates?: boolean };

export class HttpClient {
  constructor(
    private baseURL: URL,
    private apiKey: string,
  ) {}

  async request<
    T extends object | void = void,
    Body extends BasePayload | undefined = undefined,
    Method extends FetchMethod = FetchMethod,
  >(
    method: Method,
    path: string,
    bodyOrOptions?: Method extends 'GET' | 'DELETE' ? HttpClientOptions : Body,
    options?: Method extends 'GET' | 'DELETE' ? never : HttpClientOptions,
  ): Promise<T extends void ? void : CamelCasedProperties<T>> {
    const hasBody = method !== 'GET' && method !== 'DELETE';
    const response = await fetch(new URL(`api${path}`, this.baseURL), {
      method,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: hasBody ? JSON.stringify(bodyOrOptions) : null,
    });

    if (!response.ok)
      throw new PterodactylApiError<Body>(
        response.status,
        await response.text(),
        path,
        hasBody ? (bodyOrOptions as Body) : null,
      );

    if (response.status === 204 || method === 'DELETE') {
      return undefined as T extends void ? void : CamelCasedProperties<T>;
    }

    const rawData = (await response.json()) as T extends void
      ? void
      : CamelCasedProperties<T>;

    if (!rawData)
      return undefined as T extends void ? void : CamelCasedProperties<T>;

    return toCamelCase(rawData, {
      parseDates: !hasBody
        ? (bodyOrOptions as HttpClientOptions)?.parseDates
        : options?.parseDates,
    }) as T extends void ? void : CamelCasedProperties<T>;
  }
}
