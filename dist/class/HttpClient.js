import { PterodactylAPIError } from './APIError.js';
export default class HttpClient {
    baseURL;
    apiKey;
    constructor(baseURL, apiKey) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
    }
    async request(method, path, body) {
        const res = await fetch(new URL(`api${path}`, this.baseURL), {
            method,
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: body ? JSON.stringify(body) : null,
        });
        if (!res.ok) {
            throw new PterodactylAPIError(res.status, await res.text(), path, body);
        }
        try {
            const returnValue = (await res.json());
            return returnValue;
        }
        catch {
            return void 0;
        }
    }
}
