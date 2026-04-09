import type HttpClient from '../../../../class/HttpClient.js';
import type { DatabaseWithPassword } from '../../database.types.js';

export default class PasswordClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    readonly database: string,
  ) {}

  async rotate() {
    const res = await this.httpClient.request<DatabaseWithPassword>(
      'POST',
      `/client/servers/${this.server}/databases/${this.database}/rotate-password`,
    );
    return {
      ...res,
      password: res.attributes.relationships.password.attributes.password,
    };
  }
}
