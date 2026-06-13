import type { HttpClient } from '../../../class/HttpClient.js';
import type { ApplicationEggManager } from './egg.manager.js';
import type { BaseEgg } from './egg.types.js';
import type { BaseFetchOptions } from '../../../types.js';
export declare class ApplicationEgg {
    private httpClient;
    private eggManager;
    id: number;
    uuid: string;
    name: string;
    nest: number;
    author: string;
    description: string;
    dockerImage: string;
    dockerImages: Record<string, string>;
    config: {
        files: Record<string, unknown>;
        startup: Record<string, unknown>;
        stop: string;
        logs: unknown;
        fileDenylist: unknown;
        extends: null;
    };
    startup: string;
    script: {
        privileged: boolean;
        install: string;
        entry: string;
        container: string;
        extends: null;
    };
    createdAt: Date;
    updatedAt: Date;
    constructor(httpClient: HttpClient, eggManager: ApplicationEggManager, data: Partial<BaseEgg> & Pick<BaseEgg, 'id'>);
    fetch(options?: BaseFetchOptions): Promise<this>;
}
//# sourceMappingURL=egg.class.d.ts.map