import type HttpClient from '../../../class/HttpClient.js';
import type { EggVariable } from '../server.types.js';
import type { EditEggVariable, EggVariableList } from './startup.types.js';
import { editVariableSchema } from '../server.schemas.js';

export default class StartupClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  info() {
    return this.httpClient.request<EggVariableList>(
      'GET',
      `/client/servers/${this.server}/settings/startup`,
    );
  }

  edit(options: EditEggVariable) {
    return this.httpClient.request<EggVariable, EditEggVariable>(
      'PUT',
      `/client/servers/${this.server}/settings/startup`,
      editVariableSchema.parse(options),
    );
  }
}
