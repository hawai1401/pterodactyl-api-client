import type { HttpClient } from '../../../../class/HttpClient.js';

export class ApplicationServerDatabaseClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: number,
    readonly database: number,
  ) {}

  reset() {
    return this.httpClient.request(
      'POST',
      `/application/servers/${this.server}/databases/${this.database}/reset-password`,
    );
  }
}
