import type HttpClient from "../../../class/HttpClient.js";
import type { EditImageArgs } from "./image.types.js";
export default class ImageClient {
    private httpClient;
    constructor(httpClient: HttpClient);
    edit(id: string, options: EditImageArgs): Promise<void>;
}
//# sourceMappingURL=image.client.d.ts.map