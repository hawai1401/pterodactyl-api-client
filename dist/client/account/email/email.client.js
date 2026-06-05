import { setEmailSchema } from '../account.schemas.js';
import { BaseClient } from '../../../class/BaseClient.js';
export class EmailClient extends BaseClient {
    set(payload) {
        return this.httpClient.request('PUT', '/client/account/email', setEmailSchema.parse(payload));
    }
}
