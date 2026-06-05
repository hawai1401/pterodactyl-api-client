import { ApplicationAPI } from './application/application.client.js';
import { ClientAPI } from './client/client.class.js';
import { clientSchema } from './schemas.js';
export class PterodactylAPIClient {
    apiKey;
    panelUrl;
    role;
    user;
    constructor(options) {
        const { apiKey, panelUrl, role } = clientSchema.parse(options);
        this.panelUrl = new URL(panelUrl);
        this.role = role;
        this.apiKey = apiKey;
        this.user = new ClientAPI({ panelUrl: this.panelUrl, apiKey });
        if (role === 'admin')
            this.admin = new ApplicationAPI({
                panelUrl: this.panelUrl,
                apiKey: this.apiKey,
            });
    }
}
