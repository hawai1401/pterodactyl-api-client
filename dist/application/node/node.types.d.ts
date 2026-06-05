import type { IPv4 } from '../../types.js';
export interface NodeConfigurationData {
    debug: boolean;
    uuid: string;
    token_id: string;
    token: string;
    api: {
        host: IPv4;
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
export interface NodeConfiguration {
    debug: boolean;
    uuid: string;
    tokenId: string;
    token: string;
    api: {
        host: IPv4;
        port: number;
        ssl: {
            enabled: boolean;
            cert: string;
            key: string;
        };
        uploadLimit: number;
    };
    system: {
        data: string;
        sftp: {
            bindPort: number;
        };
    };
    allowedMounts: never[];
    remote: string;
}
//# sourceMappingURL=node.types.d.ts.map