import { a2fSchema, passwordSchema } from '../account.schemas.js';
import { BaseClient } from '../../../class/BaseClient.js';
export class A2fClient extends BaseClient {
    async enable(payload) {
        const recoveryTokensObject = await this.httpClient.request('POST', '/client/account/two-factor', a2fSchema.parse(payload));
        return recoveryTokensObject.attributes.tokens;
    }
    disable(payload) {
        return this.httpClient.request('POST', '/client/account/two-factor/disable', passwordSchema.parse(payload));
    }
    async getCredentials() {
        const a2fData = await this.httpClient.request('GET', '/client/account/two-factor');
        return a2fData.data;
    }
}
