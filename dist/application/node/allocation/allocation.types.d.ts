import type { PaginationFetchOptions, BasePayload, IPv4, Filters, BaseFetchOptions } from '../../../types.js';
export type Port = `${number}`;
export type PortRange = `${number}-${number}`;
export interface ListAllocationsOptions extends PaginationFetchOptions, Omit<BaseFetchOptions, 'force'> {
    filter?: Filters<'ip' | 'port'>;
}
export interface ApplicationAllocationObject {
    object: 'allocation';
    attributes: {
        id: number;
        ip: IPv4;
        alias: string | null;
        port: number;
        notes: string | null;
        assigned: boolean;
    };
}
export interface BaseApplicationAllocation {
    id: number;
    ip: IPv4;
    alias: string | null;
    port: number;
    notes: string | null;
    assigned: boolean;
    node: number;
}
export interface CreateApplicationAllocationPayload extends BasePayload {
    ip: IPv4;
    ports: (Port | PortRange)[];
    alias: string;
}
//# sourceMappingURL=allocation.types.d.ts.map