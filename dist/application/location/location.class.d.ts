import type { HttpClient } from '../../class/HttpClient.js';
import type { ApplicationLocationManager } from './location.manager.js';
import type { BaseLocation, UpdateLocationPayload } from './location.types.js';
import type { BaseFetchOptions } from '../../types.js';
export declare class ApplicationLocation {
    private httpClient;
    private locationManager;
    id: number;
    short: string;
    long: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(httpClient: HttpClient, locationManager: ApplicationLocationManager, data: Partial<BaseLocation> & Pick<BaseLocation, 'id'>);
    fetch(options?: BaseFetchOptions): Promise<this>;
    update(payload: UpdateLocationPayload, options?: Omit<BaseFetchOptions, 'force'>): Promise<this>;
    delete(): Promise<void>;
}
//# sourceMappingURL=location.class.d.ts.map