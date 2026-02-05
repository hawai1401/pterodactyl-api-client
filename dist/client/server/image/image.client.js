import { editImageSchema, userServerId } from "../server.schemas.js";
export default class ImageClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    edit(id, options) {
        return this.httpClient.request("PUT", `/client/servers/${userServerId.parse(id)}/settings/docker-image`, editImageSchema.parse(options));
    }
}
