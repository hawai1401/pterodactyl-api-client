import type { State } from '../server.types.js';
export interface StatsObject {
    object: 'stats';
    attributes: {
        current_state: State;
        is_suspended: boolean;
        resources: {
            memory_bytes: number;
            memory_limit_bytes: number;
            cpu_absolute: number;
            disk_bytes: number;
            network_rx_bytes: number;
            network_tx_bytes: number;
            uptime: number;
        };
    };
}
export interface Stats {
    currentState: State;
    isSuspended: boolean;
    resources: {
        memoryBytes: number;
        memoryLimitBytes: number;
        cpuAbsolute: number;
        diskBytes: number;
        networkRxBytes: number;
        networkTxBytes: number;
        uptime: number;
    };
}
//# sourceMappingURL=ressource.types.d.ts.map