import type { BaseArgs, IP, List } from "../../../types.js";

export interface ApplicationDatabaseAttributes<T extends string | Date> {
  id: number;
  server: number;
  host: number;
  database: string;
  username: string;
  remote: string | IP | "%";
  max_connections: number;
  created_at: T;
  updated_at: T;
}

export interface ApplicationDatabase<T extends string | Date> {
  object: "server_database";
  attributes: ApplicationDatabaseAttributes<T>;
}

export interface ApplicationDatabaseList extends List {
  data: ApplicationDatabase<string>[];
}

export interface CreateApplicationDatabase extends BaseArgs {
  database: string;
  remote: string | IP | "%";
  host: number;
}

export interface CreatedApplicationDatabase extends ApplicationDatabase<string> {
  meta: {
    ressource: string;
  };
}
