import type { CreateNodePayload, FetchNodesOptions, Node } from './nodes.types.js';
import { BaseClient } from '../../class/BaseClient.js';
export declare class NodesClient extends BaseClient {
    fetch(options?: FetchNodesOptions): Promise<{
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
            object: "node";
            attributes: {
                id: number;
                uuid: string;
                public: boolean;
                name: string;
                description: string;
                locationId: number;
                fqdn: string;
                scheme: import("./nodes.types.js").Scheme;
                behindProxy: boolean;
                maintenanceMode: boolean;
                memory: number;
                memoryOverallocate: number;
                disk: number;
                diskOverallocate: number;
                uploadSize: number;
                daemonListen: number;
                daemonSftp: number;
                daemonBase: string;
                createdAt: Date;
                updatedAt: Date;
                allocatedResources: {
                    memory: number;
                    disk: number;
                };
            };
        }[];
    }>;
    create(payload: CreateNodePayload): Promise<Node>;
}
//# sourceMappingURL=nodes.client.d.ts.map