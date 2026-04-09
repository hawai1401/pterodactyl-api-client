import type { BaseArgs, method } from '../types.js';
export default class HttpClient {
    private baseURL;
    private apiKey;
    constructor(baseURL: URL, apiKey: string);
    request<T, U extends BaseArgs | undefined = undefined, V extends method = method>(method: V, path: string, body?: V extends 'GET' ? null : V extends 'DELETE' ? null : U): Promise<T>;
}
//# sourceMappingURL=HttpClient.d.ts.map