import { ApplicationAPI } from './application/index.js';
import { ClientAPI } from './client/index.js';
import { clientSchema } from './schemas.js';
export default class PterodactylAPIClient {
    apiKey;
    panelUrl;
    role;
    user;
    constructor(options) {
        const { apiKey, panelUrl, role } = clientSchema.parse(options);
        this.panelUrl = new URL(panelUrl);
        this.user = new ClientAPI({ panelUrl: this.panelUrl, apiKey });
        this.role = role;
        this.apiKey = apiKey;
    }
    get admin() {
        if (this.role === 'admin')
            // @ts-expect-error Works well
            return new ApplicationAPI({
                panelUrl: this.panelUrl,
                apiKey: this.apiKey,
            });
        // @ts-expect-error Works well
        return;
    }
    /**
     * @deprecated Client is now typed, typescript will no longer throw errors if the role is admin
     */
    isAdmin() {
        return this.admin !== undefined;
    }
}
