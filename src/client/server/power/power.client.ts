import type { HttpClient } from '../../../class/HttpClient.js';
import type { PowerPayload } from './power.types.js';

export class PowerClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  start() {
    return this.httpClient.request<void, PowerPayload>(
      'POST',
      `/client/servers/${this.server}/power`,
      {
        signal: 'start',
      },
    );
  }

  stop() {
    return this.httpClient.request<void, PowerPayload>(
      'POST',
      `/client/servers/${this.server}/power`,
      {
        signal: 'stop',
      },
    );
  }

  restart() {
    return this.httpClient.request<void, PowerPayload>(
      'POST',
      `/client/servers/${this.server}/power`,
      {
        signal: 'restart',
      },
    );
  }

  kill() {
    return this.httpClient.request<void, PowerPayload>(
      'POST',
      `/client/servers/${this.server}/power`,
      {
        signal: 'kill',
      },
    );
  }
}
