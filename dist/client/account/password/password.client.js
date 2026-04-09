import { editPasswordSchema } from '../account.schemas.js';
export default class PasswordClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    edit(options) {
        return this.httpClient.request('PUT', '/client/account/password', editPasswordSchema.parse(options));
    }
}
