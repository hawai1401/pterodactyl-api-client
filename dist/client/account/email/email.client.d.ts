import type HttpClient from '../../../class/HttpClient.js';
import type { EditEmailArgs } from './email.types.js';
export default class EmailClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    edit(options: EditEmailArgs): Promise<void>;
}
//# sourceMappingURL=email.client.d.ts.map