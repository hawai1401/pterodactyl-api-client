import type HttpClient from '../../../../class/HttpClient.js';

export default class LockClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
    readonly backup: string,
  ) {}

  toggle() {
    return this.httpClient.request<void>(
      'POST',
      `/client/servers/${this.server}/backups/${this.backup}/lock`,
    );
  }
}
