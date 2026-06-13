import type {
  BaseFetchOptions,
  BasePayload,
  Filters,
  IPv4,
  PaginationFetchOptions,
  Sorts,
} from '../../types.js';

export type Scheme = 'https' | 'http';

export interface ListNodesOptions
  extends PaginationFetchOptions, Omit<BaseFetchOptions, 'force'> {
  filter?: Filters<'uuid' | 'name' | 'fqdn' | 'daemon_token_id'>;
  sort?: Sorts<'id' | 'uuid' | 'memory' | 'disk'>;
}

export interface NodeObject {
  object: 'node';
  attributes: {
    id: number;
    uuid: string;
    public: boolean;
    name: string;
    description: string;
    location_id: number;
    fqdn: string;
    scheme: Scheme;
    behind_proxy: boolean;
    maintenance_mode: boolean;
    memory: number;
    memory_overallocate: number;
    disk: number;
    disk_overallocate: number;
    upload_size: number;
    daemon_listen: number;
    daemon_sftp: number;
    daemon_base: string;
    created_at: Date;
    updated_at: Date;
    allocated_resources: {
      memory: number;
      disk: number;
    };
  };
}

export interface BaseNode {
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
}

export interface CreateNodePayload extends BasePayload {
  name: string;
  description?: string | undefined;
  location_id: number;
  fqdn: string;
  scheme: Scheme;
  behind_proxy?: boolean | undefined;
  public?: boolean | undefined;
  daemon_base?: string | undefined;
  daemon_sftp: number;
  daemon_listen: number;
  memory: number;
  memory_overallocate: number;
  disk: number;
  disk_overallocate: number;
  upload_size?: number | undefined;
  maintenance_mode?: boolean | undefined;
}

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
