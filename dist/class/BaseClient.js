export class BaseClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
}
