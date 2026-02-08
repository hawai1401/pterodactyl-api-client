import type { IP } from "../../types.js";

export interface NodeConfiguration {
  debug: boolean;
  uuid: string;
  token_id: string;
  token: string;
  api: {
    host: IP;
    port: number;
    ssl: {
      enabled: boolean;
      cert: string;
      key: string;
    };
    upload_limit: number;
  };
  system: {
    data: string;
    sftp: {
      bind_port: number;
    };
  };
  allowed_mounts: [];
  remote: string;
}
