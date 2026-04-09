import { editEmailSchema } from '../account.schemas.js';
export default class EmailClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    edit(options) {
        return this.httpClient.request('PUT', '/client/account/email', editEmailSchema.parse(options));
    }
}
