export type method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type role = "user" | "admin";

export interface BaseArgs {
  [key: string]: string | string[] | undefined;
}

export type IP = `${number}.${number}.${number}.${number}`;
