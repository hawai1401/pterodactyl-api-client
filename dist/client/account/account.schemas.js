import { coerce, email, ipv4, literal, object, string } from 'zod';
export const passwordSchema = object({
    password: string().min(8),
});
export const a2fSchema = passwordSchema.extend({
    code: coerce.string().length(6),
});
export const accountActivityEvent = literal([
    'user:api-key.create',
    'user:api-key.delete',
    'user:ssh-key.create',
    'user:ssh-key.delete',
    'user:account.email-changed',
    'user:account.password-changed',
    'user:two-factor.create',
    'user:two-factor.delete',
    'auth:success',
    'auth:fail',
    'auth:checkpoint',
]);
export const createApiKeySchema = object({
    description: string(),
    allowed_ips: ipv4().array().max(50).optional(),
});
export const deleteApiKeySchema = object({
    identifier: string(),
});
export const setEmailSchema = passwordSchema.extend({
    email: email().min(1).max(191),
});
export const setPasswordSchema = passwordSchema.extend({
    current_password: string().min(8),
    password_confirmation: string().min(8),
});
const SSH_KEY_REGEX = /^(ssh-ed25519|ssh-rsa|ecdsa-sha2-nistp(256|384|521)) [A-Za-z0-9+/=]+(?: .+)?$/;
export const createSshKeySchema = object({
    name: string(),
    public_key: string()
        .min(50)
        .max(5000)
        .regex(SSH_KEY_REGEX, 'Invalid SSH public key format'),
});
export const deleteSshKeySchema = object({
    fingerprint: string(),
});
