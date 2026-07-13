import type { HttpClient } from '../../../class/HttpClient.js';
import type { BaseEgg } from './egg.types.js';
import type { EggVariable } from '../../../client/index.js';
export declare class Egg {
    private httpClient;
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
    variables: EggVariable[];
    constructor(httpClient: HttpClient, data: Partial<BaseEgg> & Pick<BaseEgg, 'id'>);
    fetch(): Promise<this>;
}
//# sourceMappingURL=egg.class.d.ts.map