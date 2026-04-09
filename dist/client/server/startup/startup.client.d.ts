import type HttpClient from '../../../class/HttpClient.js';
import type { EggVariable } from '../server.types.js';
import type { EditEggVariable, EggVariableList } from './startup.types.js';
export default class StartupClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    info(): Promise<EggVariableList>;
    edit(options: EditEggVariable): Promise<EggVariable>;
}
//# sourceMappingURL=startup.client.d.ts.map