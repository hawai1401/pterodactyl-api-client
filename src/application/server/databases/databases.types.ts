import type { CreateDatabasePayload } from '../../../client/server/databases/databases.types.js';
import type { BasePayload, IPv4 } from '../../../types.js';

export interface ApplicationDatabaseObject {
  object: 'server_database';
  attributes: {
    id: number;
    server: number;
    host: number;
    database: string;
    username: string;
    remote: string | IPv4 | '%';
    max_connections: number;
    created_at: Date;
    updated_at: Date;
  };
}
export interface ApplicationDatabase {
  id: number;
  server: number;
  host: number;
  database: string;
  username: string;
  remote: string;
  maxConnections: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateApplicationDatabase
  extends BasePayload, CreateDatabasePayload {
  host: number;
}
