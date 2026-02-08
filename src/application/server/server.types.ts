import type { BaseArgs, EnvironmentVariable } from "../../types.js";

export interface ApplicationServerId {
  id?: number | undefined;
  external_id?: string | undefined;
}

export interface EditApplicationServerDetailsArgs extends BaseArgs {
  name: string;
  user: number;
  external_id?: string | undefined;
  description?: string | undefined;
}

export interface EditApplicationServerConfigurationArgs extends BaseArgs {
  allocation: number;
  oom_disabled?: boolean | undefined;
  limits: {
    memory?: number | undefined;
    swap?: number | undefined;
    disk?: number | undefined;
    io?: number | undefined;
    threads?: string | undefined;
    cpu?: number | undefined;
  };
  feature_limits: {
    databases: number;
    backups: number;
    allocations?: number | undefined;
  };
  add_allocations?: number[] | undefined;
  remove_allocations?: number[] | undefined;
}

export interface EditApplicationServerStartupArgs extends BaseArgs {
  startup: string;
  environment: Record<EnvironmentVariable, string>;
  egg: number;
  image: string;
  skip_scripts: boolean;
}

export interface EditApplicationServerArgs extends BaseArgs {
  details?: EditApplicationServerDetailsArgs | undefined;
  configuration?: EditApplicationServerConfigurationArgs | undefined;
  startup?: EditApplicationServerStartupArgs | undefined;
}
