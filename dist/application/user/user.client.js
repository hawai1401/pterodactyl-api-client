import z from "zod";
import { userIdSchema } from "./user.schemas.js";
import { createUserSchema } from "../users/users.schemas.js";
export default class UserClient {
    httpClient;
    id;
    external_id;
    constructor(httpClient, args) {
        this.httpClient = httpClient;
        const { id, external_id } = userIdSchema.parse(args);
        this.id = id;
        this.external_id = external_id;
    }
    async info({ includeServers, } = {}) {
        const res = await this.httpClient.request("GET", `/application/users/${this.id ?? `external/${this.external_id}`}${includeServers ? "?include=servers" : ""}`);
        return {
            ...res,
            attributes: {
                ...res.attributes,
                created_at: new Date(res.attributes.created_at),
                updated_at: new Date(res.attributes.updated_at),
            },
        };
    }
    edit(args) {
        if (!this.id)
            throw new Error("L'id de l'utilisateur est requis !");
        return this.httpClient.request("PATCH", `/application/users/${this.id}`, createUserSchema.parse(args));
    }
    delete() {
        if (!this.id)
            throw new Error("L'id de l'utilisateur est requis !");
        return this.httpClient.request("DELETE", `/application/users/${this.id}`);
    }
}
