import type { BasePayload } from '../../../types.js';
import type { BaseEditAccountPayload } from '../account.types.js';
export interface SetPasswordPayload extends BasePayload, BaseEditAccountPayload {
    current_password: string;
    password_confirmation: string;
}
//# sourceMappingURL=password.types.d.ts.map