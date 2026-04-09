import type HttpClient from '../../../class/HttpClient.js';
import type { EditImageArgs } from './image.types.js';
import { editImageSchema } from '../server.schemas.js';

export default class ImageClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  edit(options: EditImageArgs) {
    return this.httpClient.request<void, EditImageArgs>(
      'PUT',
      `/client/servers/${this.server}/settings/docker-image`,
      editImageSchema.parse(options),
    );
  }
}
