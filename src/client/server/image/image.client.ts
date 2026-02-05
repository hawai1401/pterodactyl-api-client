import type HttpClient from "../../../class/HttpClient.js";
import type { EditImageArgs } from "./image.types.js";
import { editImageSchema, userServerId } from "../server.schemas.js";

export default class ImageClient {
  constructor(private httpClient: HttpClient) {}

  edit(id: string, options: EditImageArgs) {
    return this.httpClient.request<void, EditImageArgs>(
      "PUT",
      `/client/servers/${userServerId.parse(id)}/settings/docker-image`,
      editImageSchema.parse(options),
    );
  }
}
