import z from "zod";
import DatabaseClient from "./database/database.client.js";
import { applicationServerIdSchema, editApplicationServerConfigurationSchema, editApplicationServerDetailsSchema, editApplicationServerStartupSchema, } from "./server.schemas.js";
import DatabasesClient from "./databases/databases.client.js";
export default class ServerClient {
    httpClient;
    databases;
    id;
    external_id;
    constructor(httpClient, args) {
        this.httpClient = httpClient;
        this.databases = new DatabasesClient(httpClient);
        const { id, external_id } = applicationServerIdSchema.parse(args);
        this.id = id;
        this.external_id = external_id;
    }
    database(database) {
        if (!this.id)
            throw new Error("L'id du serveur est nécessaire !");
        return new DatabaseClient(this.httpClient, this.id, database);
    }
    async info() {
        const res = await this.httpClient.request("GET", `/application/servers/${this.id ?? `external/${this.external_id}`}`);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    async edit({ details, configuration, startup }) {
        if (!this.id)
            throw new Error("L'id du serveur est nécessaire !");
        const basePath = `/application/servers/${this.id}`;
        const requests = [];
        if (details)
            requests.push(this.httpClient.request("PATCH", `${basePath}/details`, editApplicationServerDetailsSchema.parse(details)));
        if (configuration)
            requests.push(this.httpClient.request("PATCH", `${basePath}/build`, editApplicationServerConfigurationSchema.parse(configuration)));
        if (startup)
            requests.push(this.httpClient.request("PATCH", `${basePath}/startup`, editApplicationServerStartupSchema.parse(startup)));
        if (requests.length === 0)
            throw new Error("Aucunes modifications spécifiées !");
        const res = await Promise.all(requests);
        return {
            ...res[0],
            attributes: {
                ...res[0].attributes,
                created_at: new Date(res[0].attributes.created_at),
                updated_at: new Date(res[0].attributes.updated_at),
            },
        };
    }
    suspend() {
        if (!this.id)
            throw new Error("L'id du serveur est nécessaire !");
        return this.httpClient.request("POST", `/application/servers/${this.id}/suspend`);
    }
    unsuspend() {
        if (!this.id)
            throw new Error("L'id du serveur est nécessaire !");
        return this.httpClient.request("POST", `/application/servers/${this.id}/unsuspend`);
    }
    reinstall() {
        if (!this.id)
            throw new Error("L'id du serveur est nécessaire !");
        return this.httpClient.request("POST", `/application/servers/${this.id}/reinstall`);
    }
    delete(force) {
        if (!this.id)
            throw new Error("L'id du serveur est nécessaire !");
        return this.httpClient.request("DELETE", `/application/servers/${this.id}${force ? "?force=true" : ""}`);
    }
}
