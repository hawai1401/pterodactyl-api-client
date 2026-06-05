import type { BasePayload, IPv4 } from '../../../types.js';

export interface CreateDatabasePayload extends BasePayload {
  database: string;
  remote: string | IPv4 | '%';
}

export interface DatabaseObjectAttributes {
  id: string;
  host: {
    address: string;
    port: number;
  };
  name: string;
  username: string;
  connections_from: string | IPv4 | '%';
  max_connections: number;
}
export interface DatabaseObjectAttributesWithPassword extends DatabaseObjectAttributes {
  relationships: {
    password: {
      object: 'database_password';
      attributes: {
        password: string;
      };
    };
  };
}

export interface DatabaseObject<HasPassword extends boolean = false> {
  object: 'server_database';
  attributes: HasPassword extends true
    ? DatabaseObjectAttributesWithPassword
    : DatabaseObjectAttributes;
}
export type Database<HasPassword extends boolean = false> = {
  id: string;
  host: {
    address: string;
    port: number;
  };
  name: string;
  username: string;
  connectionsFrom: string;
  maxConnections: number;
} & (HasPassword extends true ? { password: string } : Record<never, never>);
