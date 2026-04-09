import type {
  BaseArgs,
  EnvironmentVariable,
  ListwithPagination,
} from '../../types.js';

export interface BaseApplicationServer<T extends string | Date> {
  object: 'server';
  attributes: {
    id: number;
    external_id: null;
    uuid: string;
    identifier: string;
    name: string;
    description: string;
    suspended: boolean;
    limits: {
      memory: number;
      swap: number;
      disk: number;
      io: number;
      cpu: number;
      threads: string | null;
      oom_disabled: boolean;
    };
    feature_limits: {
      databases: number;
      allocations: number;
      backups: number;
    };
    user: number;
    node: number;
    allocation: number;
    nest: number;
    egg: number;
    container: {
      startup_command: string;
      image: string;
      environment: Record<EnvironmentVariable, string | number>;
    };
    updated_at: T;
    created_at: T;
  };
}

export type ApplicationServer<T extends string | Date> =
  BaseApplicationServer<T> &
    (
      | {
          attributes: {
            status: 'suspended';
            container: {
              installed: 0;
            };
          };
        }
      | {
          attributes: {
            status: 'installing' | null;
            container: {
              installed: 1;
            };
          };
        }
    );

export interface ApplicationServerList extends ListwithPagination {
  data: ApplicationServer<string>[];
}

export interface CreateServerArgs extends BaseArgs {
  external_id?: string | undefined;
  name: string;
  description?: string | undefined;
  user: number;
  egg: number;
  docker_image: string;
  startup: string;
  environment: Record<EnvironmentVariable, string>;
  skip_scripts?: boolean | undefined;
  limits: {
    memory: number;
    swap: number;
    disk: number;
    io: number;
    threads?: string | undefined;
    cpu: number;
  };
  feature_limits: {
    databases: number;
    backups: number;
    allocations?: number | undefined;
  };
  allocation: {
    default: number;
    additional?: number[] | undefined;
  };
  start_on_completion?: boolean | undefined;
}
