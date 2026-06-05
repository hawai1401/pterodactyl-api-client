import { editImageSchema } from '../server.schemas.js';
export class ImageClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    set(payload) {
        return this.httpClient.request('PUT', `/client/servers/${this.server}/settings/docker-image`, editImageSchema.parse(payload));
    }
}
