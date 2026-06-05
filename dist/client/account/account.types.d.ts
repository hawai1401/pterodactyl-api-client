import type { BasePayload } from '../../types.js';
export interface BaseEditAccountPayload extends BasePayload {
    password: string;
}
export interface AccountObject {
    object: 'user';
    attributes: {
        id: number;
        admin: boolean;
        username: string;
        email: string;
        first_name: string;
        last_name: string;
        language: string;
    };
}
export interface Account {
    id: number;
    admin: boolean;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    language: string;
}
//# sourceMappingURL=account.types.d.ts.map