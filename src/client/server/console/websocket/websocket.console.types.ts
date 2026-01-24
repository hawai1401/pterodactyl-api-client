import type { State } from "../../server.types.js";

export interface WebSocketCredentials {
  data: {
    token: string;
    socket: string;
  };
}

export interface WebSocketCredentialsOptions {
  onConsoleOutput?: (outpout: string) => void | Promise<void>;
  onStatusChange?: (status: string) => void | Promise<void>;
  onStats?: (stats: ServerStats) => void | Promise<void>;
}

export interface ServerStats {
  cpu_absolute: number;
  disk_bytes: number;
  memory_bytes: number;
  memory_limit_bytes: number;
  network: { rx_bytes: number; tx_bytes: number };
  state: State;
  uptime: number;
}

export type ServerStatsString = `{
  cpu_absolute: ${number};
  disk_bytes: ${number};
  memory_bytes: ${number};
  memory_limit_bytes: ${number};
  network: { rx_bytes: ${number}; tx_bytes: ${number} };
  state: ${State};
  uptime: ${number};
}`;

export type WebSocketEvent =
  | "auth success"
  | "status"
  | "stats"
  | "console output";

export type WebSocketMessage =
  | {
      event: "auth success";
    }
  | {
      event: "stats";
      args: [ServerStatsString];
    }
  | {
      event: "status" | "console output";
      args: [string];
    };
