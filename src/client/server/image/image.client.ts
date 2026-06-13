import type { HttpClient } from '../../../class/HttpClient.js';
import type { SetImagePayload } from './image.types.js';
import { setImageSchema } from '../server.schemas.js';

export class ImageClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  set(payload: SetImagePayload) {
    return this.httpClient.request<void, SetImagePayload>(
      'PUT',
      `/client/servers/${this.server}/settings/docker-image`,
      setImageSchema.parse(payload),
    );
  }
}
