import type HttpClient from '../../../class/HttpClient.js';
import type { EditImageArgs } from './image.types.js';
export default class ImageClient {
    private httpClient;
    readonly server: string;
    constructor(httpClient: HttpClient, server: string);
    edit(options: EditImageArgs): Promise<void>;
}
//# sourceMappingURL=image.client.d.ts.map