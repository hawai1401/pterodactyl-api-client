import ApplicationAPI from "./application/application.client.js";
import { ClientAPI } from "./client/index.js";
export default class PterodactylAPIClient {
    readonly panelUrl: URL;
    user: ClientAPI;
    admin?: ApplicationAPI;
    constructor({ apiKey, panelUrl }: {
        apiKey: string;
        panelUrl: string;
    });
}
//# sourceMappingURL=class.d.ts.map