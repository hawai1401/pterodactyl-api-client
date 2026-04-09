import z from 'zod';
import { a2fSchema, passwordSchema } from '../account.schemas.js';
export default class A2fClient {
    httpClient;
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    enable(options) {
        return this.httpClient.request('POST', '/client/account/two-factor', a2fSchema.parse(options));
    }
    disable(options) {
        return this.httpClient.request('POST', '/client/account/two-factor/disable', passwordSchema.parse(options));
    }
    qrCode() {
        return this.httpClient.request('GET', '/client/account/two-factor');
    }
}
