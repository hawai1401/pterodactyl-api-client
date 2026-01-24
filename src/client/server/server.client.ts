import type HttpClient from "../../class/HttpClient.js";
import ActivityClient from "./activity/activity.client.js";
import ConsoleClient from "./console/console.client.js";
import ImageClient from "./image/image.client.js";
import PowerClient from "./power/power.client.js";
import RessourceClient from "./ressource/ressource.client.js";
import type { EditServerArgs, ServerList } from "./server.types.js";
import StartupClient from "./startup/startup.client.js";
import { z } from "zod";

export default class Servers {
  public activity: ActivityClient;
  public console: ConsoleClient;
  public image: ImageClient;
  public ressource: RessourceClient;
  public power: PowerClient;
  public startup: StartupClient;

  constructor(
    private httpClient: HttpClient,
    readonly panelUrl: URL,
  ) {
    this.activity = new ActivityClient(httpClient);
    this.console = new ConsoleClient(httpClient, panelUrl);
    this.image = new ImageClient(httpClient);
    this.ressource = new RessourceClient(httpClient);
    this.power = new PowerClient(httpClient);
    this.startup = new StartupClient(httpClient);
  }

  list({
    page,
    per_page,
  }: {
    page?: number | undefined;
    per_page?: number | undefined;
  }): Promise<ServerList> {
    return this.httpClient.request<ServerList>(
      "GET",
      `/client?page=${page ?? 1}&per_page=${per_page ?? 50}`,
    );
  }

  info(id: string) {
    return this.httpClient.request<ServerList>("GET", `/client/servers/${id}`);
  }

  edit(id: string, args: EditServerArgs) {
    const schema = z.object({
      name: z.string().min(1).max(255),
      description: z.string().max(500).optional(),
    });

    const { name, description } = schema.parse(args);

    return this.httpClient.request<void, EditServerArgs>(
      "POST",
      `/client/servers/${id}/settings/rename`,
      { name, description },
    );
  }

  reinstall(id: string) {
    return this.httpClient.request<void>(
      "POST",
      `/client/servers/${id}/settings/reinstall`,
    );
  }
}
