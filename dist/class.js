import { ApplicationAPI } from './application/application.client.js';
import { ClientAPI } from './client/client.class.js';
import { clientSchema } from './schemas.js';
export class PterodactylAPIClient {
    apiKey;
    panelUrl;
    role;
    user;
    constructor(options) {
        this.panelUrl = new URL(clientSchema.parse(options).panelUrl);
        this.role = clientSchema.parse(options).role;
        this.apiKey = clientSchema.parse(options).apiKey;
        this.user = new ClientAPI({
            panelUrl: this.panelUrl,
            apiKey: this.apiKey,
            cacheTtl: clientSchema.parse(options).cache?.servers,
        });
        if (this.role === 'admin')
            this.admin = new ApplicationAPI({
                panelUrl: this.panelUrl,
                apiKey: this.apiKey,
                cache: clientSchema.parse(options).cache,
            });
    }
}
