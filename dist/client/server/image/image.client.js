import { editImageSchema } from '../server.schemas.js';
export default class ImageClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    edit(options) {
        return this.httpClient.request('PUT', `/client/servers/${this.server}/settings/docker-image`, editImageSchema.parse(options));
    }
}
