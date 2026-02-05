import type HttpClient from "../../class/HttpClient.js";
import ActivityClient from "./activity/activity.client.js";
import ConsoleClient from "./console/console.client.js";
import ImageClient from "./image/image.client.js";
import {
  AllocationClient,
  DatabaseClient,
  ScheduleClient,
  SubuserClient,
} from "./index.js";
import PowerClient from "./power/power.client.js";
import RessourceClient from "./ressource/ressource.client.js";
import {
  renameServerSchema,
  serverListSchema,
  userServerId,
} from "./server.schemas.js";
import type {
  EditServerArgs,
  UserServerAttributes,
  UserServerList,
  UserServer,
} from "./server.types.js";
import StartupClient from "./startup/startup.client.js";

export default class Servers {
  public activity: ActivityClient;
  public allocation: AllocationClient;
  public console: ConsoleClient;
  public database: DatabaseClient;
  public image: ImageClient;
  public ressource: RessourceClient;
  public power: PowerClient;
  public schedule: ScheduleClient;
  public startup: StartupClient;
  public subser: SubuserClient;

  constructor(
    private httpClient: HttpClient,
    readonly panelUrl: URL,
  ) {
    this.activity = new ActivityClient(httpClient);
    this.allocation = new AllocationClient(httpClient);
    this.console = new ConsoleClient(httpClient, panelUrl);
    this.database = new DatabaseClient(httpClient);
    this.image = new ImageClient(httpClient);
    this.ressource = new RessourceClient(httpClient);
    this.power = new PowerClient(httpClient);
    this.schedule = new ScheduleClient(httpClient);
    this.startup = new StartupClient(httpClient);
    this.subser = new SubuserClient(httpClient);
  }

  list(options: { page?: number | undefined; per_page?: number | undefined }) {
    const parsedValues = serverListSchema.parse(options);
    return this.httpClient.request<UserServerList<UserServerAttributes>>(
      "GET",
      `/client?page=${parsedValues?.page ?? 1}&per_page=${parsedValues?.per_page ?? 50}`,
    );
  }

  info(id: string) {
    return this.httpClient.request<UserServer<UserServerAttributes>>(
      "GET",
      `/client/servers/${userServerId.parse(id)}`,
    );
  }

  edit(id: string, options: EditServerArgs) {
    return this.httpClient.request<void, EditServerArgs>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/settings/rename`,
      renameServerSchema.parse(options),
    );
  }

  reinstall(id: string) {
    return this.httpClient.request<void>(
      "POST",
      `/client/servers/${userServerId.parse(id)}/settings/reinstall`,
    );
  }
}
