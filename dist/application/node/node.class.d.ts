import type { HttpClient } from '../../class/HttpClient.js';
import type { NodeManager } from './node.manager.js';
import { NodeAllocationManager } from './allocation/allocation.manager.js';
import type { BaseNode, CreateNodePayload, NodeConfiguration, Scheme } from './node.types.js';
import type { BaseFetchOptions } from '../../types.js';
export declare class Node {
    private httpClient;
    private nodeManager;
    id: number;
    uuid: string;
    public: boolean;
    name: string;
    description: string;
    locationId: number;
    fqdn: string;
    scheme: Scheme;
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
    allocations: NodeAllocationManager;
    constructor(httpClient: HttpClient, nodeManager: NodeManager, data: Partial<BaseNode> & Pick<BaseNode, 'id'>);
    fetch(options?: BaseFetchOptions): Promise<this>;
    update(payload: CreateNodePayload, options?: Omit<BaseFetchOptions, 'force'>): Promise<this>;
    configuration(): Promise<NodeConfiguration>;
    delete(): Promise<void>;
}
//# sourceMappingURL=node.class.d.ts.map