import z from "zod";
import type HttpClient from "../../class/HttpClient.js";
import { userIdSchema } from "./user.schemas.js";
import type {
  CreateUserArgs,
  User,
  UserAttributes,
  UserWithServersAttributes,
} from "../users/users.types.js";
import { createUserSchema } from "../users/users.schemas.js";
import type { UserId } from "./user.types.js";

export default class UserClient {
  readonly id: number | undefined;
  readonly external_id: string | undefined;

  constructor(
    private httpClient: HttpClient,
    args: UserId,
  ) {
    const { id, external_id } = userIdSchema.parse(args);

    this.id = id;
    this.external_id = external_id;
  }

  async info<T extends boolean | undefined>({
    includeServers,
  }: { includeServers?: T } = {}) {
    const res = await this.httpClient.request<
      User<T extends true ? UserWithServersAttributes : UserAttributes<string>>
    >(
      "GET",
      `/application/users/${this.id ?? `external/${this.external_id}`}${includeServers ? "?include=servers" : ""}`,
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        updated_at: new Date(res.attributes.updated_at),
      },
    };
  }

  edit(args: CreateUserArgs) {
    if (!this.id) throw new Error("L'id de l'utilisateur est requis !");
    return this.httpClient.request<
      User<UserAttributes<string>>,
      z.infer<typeof createUserSchema>
    >("PATCH", `/application/users/${this.id}`, createUserSchema.parse(args));
  }

  delete() {
    if (!this.id) throw new Error("L'id de l'utilisateur est requis !");
    return this.httpClient.request<void>(
      "DELETE",
      `/application/users/${this.id}`,
    );
  }
}
