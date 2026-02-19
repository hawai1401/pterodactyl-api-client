import HttpClient from "../../class/HttpClient.js";
import buildQueryParams from "../../utils/buildQueryParams.js";
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
import { renameServerSchema, userServerActivityEvent, userServerId, } from "./server.schemas.js";
import StartupClient from "./startup/startup.client.js";
import SubuserClient from "./subuser/subuser.client.js";
import SubusersClient from "./subusers/subusers.client.js";
export default class Servers {
    httpClient;
    panelUrl;
    allocations;
    backups;
    console;
    databases;
    image;
    power;
    ressource;
    schedules;
    startup;
    subusers;
    id;
    constructor(httpClient, panelUrl, id) {
        this.httpClient = httpClient;
        this.panelUrl = panelUrl;
        this.id = userServerId.parse(id);
        this.allocations = new AllocationsClient(httpClient, this.id);
        this.backups = new BackupsClient(httpClient, this.id);
        this.console = new ConsoleClient(httpClient, panelUrl, this.id);
        this.databases = new DatabasesClient(httpClient, this.id);
        this.image = new ImageClient(httpClient, this.id);
        this.power = new PowerClient(httpClient, this.id);
        this.ressource = new RessourceClient(httpClient, this.id);
        this.schedules = new SchedulesClient(httpClient, this.id);
        this.startup = new StartupClient(httpClient, this.id);
        this.subusers = new SubusersClient(httpClient, this.id);
    }
    async activity({ page, per_page, filter, sort, } = {}) {
        const event = userServerActivityEvent.optional().parse(filter?.event);
        const queries = buildQueryParams({
            page,
            per_page,
            filter: { event },
            sort,
        });
        const res = await this.httpClient.request("GET", `/client/servers/${this.id}/activity?${queries}`);
        return {
            ...res,
            data: res.data.map((data) => ({
                ...data,
                attributes: {
                    ...data.attributes,
                    timestamp: new Date(data.attributes.timestamp),
                },
            })),
        };
    }
    allocation(allocation) {
        return new AllocationClient(this.httpClient, this.id, allocation);
    }
    backup(backup) {
        return new BackupClient(this.httpClient, this.id, backup);
    }
    database(database) {
        return new DatabaseClient(this.httpClient, this.id, database);
    }
    schedule(schedule) {
        return new ScheduleClient(this.httpClient, this.id, schedule);
    }
    subuser(subuser) {
        return new SubuserClient(this.httpClient, this.id, subuser);
    }
    info() {
        return this.httpClient.request("GET", `/client/servers/${this.id}`);
    }
    edit(options) {
        return this.httpClient.request("POST", `/client/servers/${this.id}/settings/rename`, renameServerSchema.parse(options));
    }
    reinstall() {
        return this.httpClient.request("POST", `/client/servers/${this.id}/settings/reinstall`);
    }
}
