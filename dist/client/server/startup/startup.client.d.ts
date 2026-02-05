import type HttpClient from "../../../class/HttpClient.js";
import type { EggVariable } from "../server.types.js";
import type { EditEggVariable, EggVariableList } from "./startup.types.js";
export default class StartupClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    info(id: string): Promise<EggVariableList>;
    edit(id: string, options: EditEggVariable): Promise<EggVariable>;
}
//# sourceMappingURL=startup.client.d.ts.map