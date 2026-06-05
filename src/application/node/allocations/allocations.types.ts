import type {
  PaginationFetchOptions,
  BasePayload,
  IPv4,
} from '../../../types.js';

export type Port = `${number}`;
export type PortRange = `${number}-${number}`;

export interface FetchAllocationsOptions extends PaginationFetchOptions {
  filter?: {
    ip?: IPv4 | undefined;
    port?: string | number | undefined;
  };
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
export interface ApplicationAllocation {
  id: number;
  ip: IPv4;
  alias: string | null;
  port: number;
  notes: string | null;
  assigned: boolean;
}

export interface CreateApplicationAllocationPayload extends BasePayload {
  ip: IPv4;
  ports: (Port | PortRange)[];
  alias: string;
}
