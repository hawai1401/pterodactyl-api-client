import type HttpClient from "../../class/HttpClient.js";
import type { UserServer, UserServerInfoAttributes } from "../../client/server/server.types.js";
import DatabaseClient from "./database/database.client.js";
import type { ApplicationServerId, EditApplicationServerArgs } from "./server.types.js";
import DatabasesClient from "./databases/databases.client.js";
export default class ServerClient {
    private httpClient;
    databases: DatabasesClient;
    readonly id: number | undefined;
    readonly external_id: string | undefined;
    constructor(httpClient: HttpClient, args: ApplicationServerId);
    database(database: number): DatabaseClient;
    info(): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            external_id: string | null;
            uuid: string;
            identifier: string;
            name: string;
            description: string;
            server_owner: boolean;
            status: "installing" | "suspended" | null;
            suspended: boolean;
            limits: {
                memory: number;
                swap: number;
                disk: number;
                io: number;
                cpu: number;
                threads: null | string;
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
                installed: number;
                environment: Record<import("../../types.js").EnvironmentVariable, string>;
            };
        };
        object: "server";
    }>;
    edit({ details, configuration, startup }: EditApplicationServerArgs): Promise<{
        attributes: {
            created_at: Date;
            updated_at: Date;
            id: number;
            external_id: string | null;
            uuid: string;
            identifier: string;
            name: string;
            description: string;
            server_owner: boolean;
            status: "installing" | "suspended" | null;
            suspended: boolean;
            limits: {
                memory: number;
                swap: number;
                disk: number;
                io: number;
                cpu: number;
                threads: null | string;
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
                installed: number;
                environment: Record<import("../../types.js").EnvironmentVariable, string>;
            };
        };
        object: "server";
    }>;
    suspend(): Promise<UserServer<UserServerInfoAttributes>>;
    unsuspend(): Promise<UserServer<UserServerInfoAttributes>>;
    reinstall(): Promise<UserServer<UserServerInfoAttributes>>;
    delete(force?: boolean | undefined): Promise<UserServer<UserServerInfoAttributes>>;
}
//# sourceMappingURL=server.client.d.ts.map