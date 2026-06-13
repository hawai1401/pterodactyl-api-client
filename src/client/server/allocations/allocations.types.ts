import type { BasePayload, IPv4 } from '../../../types.js';

export interface AssignAllocationPayload extends BasePayload {
  ip?: IPv4 | undefined;
  port?: number | undefined;
}

export interface AllocationObject {
  object: 'allocation';
  attributes: {
    id: number;
    ip: IPv4;
    ip_alias: null | string;
    port: number;
    notes: null | string;
    is_default: boolean;
  };
}
export interface Allocation {
  id: number;
  ip: IPv4;
  ipAlias: string | null;
  port: number;
  notes: string | null;
  isDefault: boolean;
}
