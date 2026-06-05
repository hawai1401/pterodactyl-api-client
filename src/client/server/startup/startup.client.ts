import type { HttpClient } from '../../../class/HttpClient.js';
import type {
  SetEnvironmentVariablePayload,
  EggVariableObjectList,
  EggVariableObject,
  EggVariable,
  StartupConfig,
} from './startup.types.js';
import { setEnvironmentVariableSchema } from '../server.schemas.js';
import type { infer as zInfer } from 'zod';

export class StartupClient {
  constructor(
    private httpClient: HttpClient,
    readonly server: string,
  ) {}

  async fetch(): Promise<StartupConfig> {
    const eggVariableObjectList =
      await this.httpClient.request<EggVariableObjectList>(
        'GET',
        `/client/servers/${this.server}/settings/startup`,
      );

    const { startupCommand, rawStartupCommand, dockerImages } =
      eggVariableObjectList.meta;

    return {
      data: eggVariableObjectList.data.map(
        (eggVariableObject) => eggVariableObject.attributes,
      ),
      startupCommand,
      rawStartupCommand,
      dockerImages,
    };
  }

  async setEnvironmentVariable(
    payload: SetEnvironmentVariablePayload,
  ): Promise<EggVariable> {
    const eggVariableObject = await this.httpClient.request<
      EggVariableObject,
      zInfer<typeof setEnvironmentVariableSchema>
    >(
      'PUT',
      `/client/servers/${this.server}/settings/startup`,
      setEnvironmentVariableSchema.parse(payload),
    );
    return eggVariableObject.attributes;
  }
}
