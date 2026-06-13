import { setEnvironmentVariableSchema } from '../server.schemas.js';
export class StartupClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    async fetch() {
        const eggVariableObjectList = await this.httpClient.request('GET', `/client/servers/${this.server}/settings/startup`);
        const { startupCommand, rawStartupCommand, dockerImages } = eggVariableObjectList.meta;
        return {
            data: eggVariableObjectList.data.map((eggVariableObject) => eggVariableObject.attributes),
            startupCommand,
            rawStartupCommand,
            dockerImages,
        };
    }
    async setEnvironmentVariable(payload) {
        const eggVariableObject = await this.httpClient.request('PUT', `/client/servers/${this.server}/settings/startup`, setEnvironmentVariableSchema.parse(payload));
        return eggVariableObject.attributes;
    }
}
