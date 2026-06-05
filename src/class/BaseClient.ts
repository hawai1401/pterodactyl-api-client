import type { HttpClient } from './HttpClient.js';

export abstract class BaseClient {
  constructor(protected httpClient: HttpClient) {}
}
