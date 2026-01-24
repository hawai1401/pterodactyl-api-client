import type { BaseArgs, IP, List } from "../../../types.js";

export interface DatabaseAttributes {
  id: string;
  host: {
    address: string;
    port: number;
  };
  name: string;
  username: string;
  connections_from: string | IP | "%";
  max_connections: number;
}

export interface Database {
  object: "server_database";
  attributes: DatabaseAttributes;
}

export interface DatabaseList extends List {
  data: Database[];
}

export interface CreateDatabaseArgs extends BaseArgs {
  database: string;
  remote: string | IP | "%";
}

export interface DatabaseAttributesWithPassword extends DatabaseAttributes {
  relationships: {
    password: {
      object: "database_password";
      attributes: {
        password: string;
      };
    };
  };
}

export interface DatabaseWithPassword {
  object: "server_database";
  attributes: DatabaseAttributesWithPassword;
}