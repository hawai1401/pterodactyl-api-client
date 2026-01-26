import UserClient from "./user/user.client.js";
export default class ApplicationAPI {
    private httpClient;
    readonly panelUrl: URL;
    user: UserClient;
    constructor({ apiKey, panelUrl }: {
        apiKey: string;
        panelUrl: URL;
    });
}
//# sourceMappingURL=application.client.d.ts.map