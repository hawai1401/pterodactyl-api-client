import z from "zod";
export const passwordSchema = z.object({
    password: z.string().min(8),
});
export const a2fSchema = passwordSchema.extend({
    code: z.coerce.string().length(6),
});
export const accountActivityEvent = z.literal([
    "user:api-key.create",
    "user:api-key.delete",
    "user:ssh-key.create",
    "user:ssh-key.delete",
    "user:account.email-changed",
    "user:account.password-changed",
    "user:two-factor.create",
    "user:two-factor.delete",
    "auth:success",
    "auth:fail",
    "auth:checkpoint",
]);
export const createApiKeySchema = z.object({
    description: z.string(),
    allowed_ips: z.ipv4().array().max(50).optional(),
});
export const deleteApiKeySchema = z.object({
    identifier: z.string(),
});
export const editEmailSchema = passwordSchema.extend({
    email: z.email().min(1).max(191),
});
export const editPasswordSchema = passwordSchema.extend({
    current_password: z.string().min(8),
    password_confirmation: z.string().min(8),
});
const SSH_KEY_REGEX = /^(ssh-ed25519|ssh-rsa|ecdsa-sha2-nistp(256|384|521)) [A-Za-z0-9+/=]+(?: .+)?$/;
export const createSshKeySchema = z.object({
    name: z.string(),
    public_key: z
        .string()
        .min(50)
        .max(5000)
        .regex(SSH_KEY_REGEX, "Invalid SSH public key format"),
});
export const deleteSshKeySchema = z.object({
    fingerprint: z.string(),
});
