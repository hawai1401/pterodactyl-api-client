import type HttpClient from '../../../class/HttpClient.js';
import type { Stats } from './ressource.types.js';

export default class RessourceClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  usage() {
    return this.httpClient.request<Stats>(
      'GET',
      `/client/servers/${this.server}/resources`,
    );
  }
}
