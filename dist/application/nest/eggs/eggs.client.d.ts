import type HttpClient from "../../../class/HttpClient.js";
export default class EggsClient {
    private httpClient;
    readonly nest: number;
    constructor(httpClient: HttpClient, nest: number);
    list(): Promise<{
        data: {
            created_at: Date;
            updated_at: Date;
            id: number;
            uuid: string;
            name: string;
            nest: number;
            author: string;
            description: string;
            docker_image: string;
            docker_images: {
                [key: string]: string;
            };
            config: {
                files: {
                    [key: string]: unknown;
                };
                startup: {
                    [key: string]: unknown;
                };
                stop: string;
                logs: unknown;
                file_denylist: unknown;
                extends: null;
            };
            startup: string;
            script: {
                privileged: boolean;
                install: string;
                entry: string;
                container: string;
                extends: null;
            };
        }[];
        object: "list";
    }>;
}
//# sourceMappingURL=eggs.client.d.ts.map