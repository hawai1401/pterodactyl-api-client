import type HttpClient from '../../../class/HttpClient.js';
import type { Stats } from './ressource.types.js';
export default class RessourceClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    usage(): Promise<Stats>;
}
//# sourceMappingURL=ressource.client.d.ts.map