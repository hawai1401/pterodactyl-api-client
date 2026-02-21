import HttpClient from "../../class/HttpClient.js";
import type { BaseListArgs, Sort } from "../../types.js";
import AllocationClient from "./allocation/allocation.client.js";
import AllocationsClient from "./allocations/allocations.client.js";
import BackupClient from "./backup/backup.client.js";
import BackupsClient from "./backups/backups.client.js";
import ConsoleClient from "./console/console.client.js";
import DatabaseClient from "./database/database.client.js";
import DatabasesClient from "./databases/databases.client.js";
import ImageClient from "./image/image.client.js";
import PowerClient from "./power/power.client.js";
import RessourceClient from "./ressource/ressource.client.js";
import ScheduleClient from "./schedule/schedule.client.js";
import SchedulesClient from "./schedules/schedules.client.js";
import type { EditServerArgs, ServerEvent, ServerActivityList } from "./server.types.js";
import StartupClient from "./startup/startup.client.js";
import SubuserClient from "./subuser/subuser.client.js";
import SubusersClient from "./subusers/subusers.client.js";
export default class Servers {
    private httpClient;
    readonly panelUrl: URL;
    allocations: AllocationsClient;
    backups: BackupsClient;
    console: ConsoleClient;
    databases: DatabasesClient;
    image: ImageClient;
    power: PowerClient;
    ressource: RessourceClient;
    schedules: SchedulesClient;
    startup: StartupClient;
    subusers: SubusersClient;
    readonly id: string;
    constructor(httpClient: HttpClient, panelUrl: URL, id: string);
    activity<T extends ServerEvent>({ page, per_page, filter, sort, }?: (BaseListArgs & {
        filter?: {
            event?: T | undefined;
        } | undefined;
        sort?: {
            timestamp?: Sort | undefined;
        } | undefined;
    }) | undefined): Promise<ServerActivityList<Date, T>>;
    allocation(allocation: number): AllocationClient;
    backup(backup: string): BackupClient;
    database(database: string): DatabaseClient;
    schedule(schedule: number): ScheduleClient;
    subuser(subuser: string): SubuserClient;
    info(): Promise<{
        attributes: {
            updated_at: Date;
            created_at: Date;
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
    edit(options: EditServerArgs): Promise<void>;
    reinstall(): Promise<void>;
}
//# sourceMappingURL=server.client.d.ts.map