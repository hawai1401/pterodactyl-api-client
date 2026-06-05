import { setPasswordSchema } from '../account.schemas.js';
import { BaseClient } from '../../../class/BaseClient.js';
export class PasswordClient extends BaseClient {
    set(payload) {
        return this.httpClient.request('PUT', '/client/account/password', setPasswordSchema.parse(payload));
    }
}
