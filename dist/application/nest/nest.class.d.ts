import type { HttpClient } from '../../class/HttpClient.js';
import type { NestManager } from './nest.manager.js';
import { ApplicationEggManager } from './egg/egg.manager.js';
import type { BaseNest } from './nest.types.js';
import type { BaseFetchOptions } from '../../types.js';
export declare class Nest {
    private httpClient;
    private nestManager;
    id: number;
    uuid: string;
    author: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    eggs: ApplicationEggManager;
    constructor(httpClient: HttpClient, nestManager: NestManager, data: Partial<BaseNest> & Pick<BaseNest, 'id'>);
    fetch(options?: BaseFetchOptions): Promise<this>;
}
//# sourceMappingURL=nest.class.d.ts.map