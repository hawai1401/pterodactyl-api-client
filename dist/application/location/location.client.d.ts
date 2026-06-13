import type { HttpClient } from '../../class/HttpClient.js';
import type { UpdateLocationPayload } from './location.types.js';
import type { Location } from '../locations/locations.types.js';
export declare class LocationClient {
    private httpClient;
    readonly id: number;
    constructor(httpClient: HttpClient, id: number);
    fetch(): Promise<Location>;
    update(payload: UpdateLocationPayload): Promise<Location>;
    delete(): Promise<void>;
}
//# sourceMappingURL=location.client.d.ts.map