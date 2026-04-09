import type z from 'zod';
import type HttpClient from '../../../class/HttpClient.js';
import type { EditPasswordArgs } from './password.types.js';
import { editPasswordSchema } from '../account.schemas.js';

export default class PasswordClient {
  constructor(private httpClient: HttpClient) {}

  edit(options: EditPasswordArgs) {
    return this.httpClient.request<void, z.infer<typeof editPasswordSchema>>(
      'PUT',
      '/client/account/password',
      editPasswordSchema.parse(options),
    );
  }
}
