import type { BaseArgs, IP, List } from '../../types.js';
import type { Allocation } from './server.types.js';
export interface AllocationList extends List {
    data: Allocation[];
}
export interface AssignAllocationArgs extends BaseArgs {
    ip?: IP | undefined;
    port?: number | undefined;
}
export interface EditAllocationArgs extends BaseArgs {
    notes?: string | undefined;
}
//# sourceMappingURL=allocation.types.d.ts.map