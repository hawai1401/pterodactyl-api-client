import { toCamelCase } from '../utils/camelCase.js';
import { PterodactylApiError } from './ApiError.js';
export class HttpClient {
    baseURL;
    apiKey;
    constructor(baseURL, apiKey) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
    }
    async request(method, path, bodyOrOptions, options) {
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
            throw new PterodactylApiError(response.status, await response.text(), path, hasBody ? bodyOrOptions : null);
        if (response.status === 204 || method === 'DELETE') {
            return undefined;
        }
        const rawData = (await response.json());
        if (!rawData)
            return undefined;
        return toCamelCase(rawData, {
            parseDates: !hasBody
                ? bodyOrOptions?.parseDates
                : options?.parseDates,
        });
    }
}
