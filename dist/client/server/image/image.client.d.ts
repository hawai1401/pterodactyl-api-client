import type { HttpClient } from '../../../class/HttpClient.js';
import type { SetImagePayload } from './image.types.js';
export declare class ImageClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    set(payload: SetImagePayload): Promise<void>;
}
//# sourceMappingURL=image.client.d.ts.map