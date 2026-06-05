import type { ApplicationServer, CreateServerPayload, FetchApplicationServersOptions } from './servers.types.js';
import { BaseClient } from '../../class/BaseClient.js';
export declare class ServersClient extends BaseClient {
    fetch(options?: FetchApplicationServersOptions): Promise<{
        meta: {
            pagination: {
                total: number;
                count: number;
                perPage: number;
                currentPage: number;
                totalPages: number;
                links: {
                    [x: Lowercase<string>]: string;
                };
            };
        };
        object: "list";
        data: {
            object: "server";
            attributes: {
                id: number;
                externalId: string | null;
                uuid: string;
                identifier: string;
                name: string;
                description: string;
                suspended: boolean;
                limits: {
                    memory: number;
                    swap: number;
                    disk: number;
                    io: number;
                    cpu: number;
                    threads: string | null;
                    oomDisabled: boolean;
                };
                featureLimits: {
                    databases: number;
                    allocations: number;
                    backups: number;
                };
                user: number;
                node: number;
                allocation: number;
                nest: number;
                egg: number;
                container: {
                    startupCommand: string;
                    image: string;
                    environment: {
                        [x: Lowercase<Uppercase<string>>]: string | number;
                    };
                    installed: 0 | 1;
                };
                updatedAt: Date;
                createdAt: Date;
            };
        }[];
    }>;
    create(payload: CreateServerPayload): Promise<ApplicationServer>;
}
//# sourceMappingURL=servers.client.d.ts.map