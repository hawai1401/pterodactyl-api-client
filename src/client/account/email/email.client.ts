import type z from 'zod';
import type HttpClient from '../../../class/HttpClient.js';
import type { EditEmailArgs } from './email.types.js';
import { editEmailSchema } from '../account.schemas.js';

export default class EmailClient {
  constructor(private httpClient: HttpClient) {}

  edit(options: EditEmailArgs) {
    return this.httpClient.request<void, z.infer<typeof editEmailSchema>>(
      'PUT',
      '/client/account/email',
      editEmailSchema.parse(options),
    );
  }
}
