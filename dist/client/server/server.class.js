import { HttpClient } from '../../class/HttpClient.js';
import { buildQueryParams } from '../../utils/buildQueryParams.js';
import { AllocationClient } from './allocation/allocation.client.js';
import { AllocationsClient } from './allocations/allocations.client.js';
import { BackupClient } from './backup/backup.client.js';
import { BackupsClient } from './backups/backups.client.js';
import { ConsoleClient } from './console/console.client.js';
import { DatabaseClient } from './database/database.client.js';
import { DatabasesClient } from './databases/databases.client.js';
import { ImageClient } from './image/image.client.js';
import { PowerClient } from './power/power.client.js';
import { ResourceClient } from './resource/resource.client.js';
import { ScheduleClient } from './schedule/schedule.client.js';
import { SchedulesClient } from './schedules/schedules.client.js';
import { setUserServerDetailsSchema, userServerActivityEvent, } from './server.schemas.js';
import { StartupClient } from './startup/startup.client.js';
import { SubuserClient } from './subuser/subuser.client.js';
import { SubusersClient } from './subusers/subusers.client.js';
import { setManagerCacheSymbol } from '../../symbols.js';
export class ClientServer {
    httpClient;
    panelUrl;
    clientServerManager;
    serverOwner;
    identifier;
    serverIdentifier;
    internalId;
    uuid;
    name;
    node;
    isNodeUnderMaintenance;
    sftpDetails;
    description;
    limits;
    invocation;
    dockerImage;
    eggFeatures;
    featureLimits;
    isTransferring;
    status;
    isInstalling;
    isSuspended;
    id;
    allocations;
    backups;
    console;
    databases;
    image;
    power;
    resource;
    schedules;
    startup;
    subusers;
    constructor(httpClient, panelUrl, clientServerManager, data) {
        this.httpClient = httpClient;
        this.panelUrl = panelUrl;
        this.clientServerManager = clientServerManager;
        Object.assign(this, data);
        this.id = this.identifier;
        this.allocations = new AllocationsClient(httpClient, this.id);
        this.backups = new BackupsClient(httpClient, this.id);
        this.console = new ConsoleClient(httpClient, panelUrl, this.id);
        this.databases = new DatabasesClient(httpClient, this.id);
        this.image = new ImageClient(httpClient, this.id);
        this.power = new PowerClient(httpClient, this.id);
        this.resource = new ResourceClient(httpClient, this.id);
        this.schedules = new SchedulesClient(httpClient, this.id);
        this.startup = new StartupClient(httpClient, this.id);
        this.subusers = new SubusersClient(httpClient, this.id);
    }
    async fetchActivityLogs(options) {
        const event = userServerActivityEvent
            .optional()
            .parse(options?.filter?.event);
        const queries = buildQueryParams({
            ...options,
            filter: { event },
        });
        const activityObjectList = await this.httpClient.request('GET', `/client/servers/${this.id}/activity?${queries}`, {
            parseDates: true,
        });
        return {
            data: activityObjectList.data.map((activityObject) => activityObject.attributes),
            pagination: activityObjectList.meta.pagination,
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
    async fetch(options) {
        const serverObject = await this.httpClient.request('GET', `/client/servers/${this.id}`, { parseDates: true });
        Object.assign(this, serverObject.attributes);
        this.clientServerManager[setManagerCacheSymbol](this, options?.cache);
        return this;
    }
    updateDetails(payload) {
        return this.httpClient.request('POST', `/client/servers/${this.id}/settings/rename`, setUserServerDetailsSchema.parse(payload));
    }
    reinstall() {
        return this.httpClient.request('POST', `/client/servers/${this.id}/settings/reinstall`);
    }
}
