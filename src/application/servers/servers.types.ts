import type { UserServerAttributesWithDate } from "../../client/server/server.types.js";
import type {
  BaseArgs,
  EnvironmentVariable,
  ListwithPagination,
} from "../../types.js";

export interface ApplicationServerList extends ListwithPagination {
  data: UserServerAttributesWithDate<string>[];
}

export interface CreateServerArgs extends BaseArgs {
  external_id?: string | undefined;
  name: string;
  description?: string | undefined;
  user: number;
  egg: number;
  docker_image?: string | undefined;
  startup?: string | undefined;
  environment?: Record<EnvironmentVariable, string> | undefined;
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
