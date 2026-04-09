export default class PowerClient {
    httpClient;
    server;
    constructor(httpClient, server) {
        this.httpClient = httpClient;
        this.server = server;
    }
    start() {
        return this.httpClient.request('POST', `/client/servers/${this.server}/power`, {
            signal: 'start',
        });
    }
    stop() {
        return this.httpClient.request('POST', `/client/servers/${this.server}/power`, {
            signal: 'stop',
        });
    }
    restart() {
        return this.httpClient.request('POST', `/client/servers/${this.server}/power`, {
            signal: 'restart',
        });
    }
    kill() {
        return this.httpClient.request('POST', `/client/servers/${this.server}/power`, {
            signal: 'kill',
        });
    }
}
