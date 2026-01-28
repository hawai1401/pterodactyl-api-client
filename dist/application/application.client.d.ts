import LocationClient from "./location/location.client.js";
import NodeClient from "./node/node.client.js";
import ServerClient from "./server/server.client.js";
import UserClient from "./user/user.client.js";
export default class ApplicationAPI {
    private httpClient;
    readonly panelUrl: URL;
    user: UserClient;
    server: ServerClient;
    location: LocationClient;
    node: NodeClient;
    constructor({ apiKey, panelUrl }: {
        apiKey: string;
        panelUrl: URL;
    });
}
//# sourceMappingURL=application.client.d.ts.map