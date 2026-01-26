import type HttpClient from "../../class/HttpClient.js";
import ActivityClient from "./activity/activity.client.js";
import ConsoleClient from "./console/console.client.js";
import ImageClient from "./image/image.client.js";
import { AllocationClient, DatabaseClient, ScheduleClient, SubuserClient } from "./index.js";
import PowerClient from "./power/power.client.js";
import RessourceClient from "./ressource/ressource.client.js";
import type { EditServerArgs, UserServerAttributes, UserServerList, UserServer } from "./server.types.js";
import StartupClient from "./startup/startup.client.js";
export default class Servers {
    private httpClient;
    readonly panelUrl: URL;
    activity: ActivityClient;
    allocation: AllocationClient;
    console: ConsoleClient;
    database: DatabaseClient;
    image: ImageClient;
    ressource: RessourceClient;
    power: PowerClient;
    schedule: ScheduleClient;
    startup: StartupClient;
    subser: SubuserClient;
    constructor(httpClient: HttpClient, panelUrl: URL);
    list({ page, per_page, }: {
        page?: number | undefined;
        per_page?: number | undefined;
    }): Promise<UserServerList<UserServerAttributes>>;
    info(id: string): Promise<UserServer<UserServerAttributes>>;
    edit(id: string, args: EditServerArgs): Promise<void>;
    reinstall(id: string): Promise<void>;
}
//# sourceMappingURL=server.client.d.ts.map