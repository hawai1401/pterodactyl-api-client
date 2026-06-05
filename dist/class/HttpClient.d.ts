import type { BasePayload, FetchMethod } from '../types.js';
import { type CamelCasedProperties } from '../utils/camelCase.js';
export type HttpClientOptions = {
    parseDates?: boolean;
};
export declare class HttpClient {
    private baseURL;
    private apiKey;
    constructor(baseURL: URL, apiKey: string);
    request<T extends object | void = void, Body extends BasePayload | undefined = undefined, Method extends FetchMethod = FetchMethod>(method: Method, path: string, bodyOrOptions?: Method extends 'GET' | 'DELETE' ? HttpClientOptions : Body, options?: Method extends 'GET' | 'DELETE' ? never : HttpClientOptions): Promise<T extends void ? void : CamelCasedProperties<T>>;
}
//# sourceMappingURL=HttpClient.d.ts.map