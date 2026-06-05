import type { BasePayload } from '../../../types.js';
export interface RestoreBackupPayload extends BasePayload {
    truncate?: boolean | undefined;
}
export interface DownloadBackupData {
    object: 'signed_url';
    attributes: {
        url: string;
    };
}
//# sourceMappingURL=backup.types.d.ts.map