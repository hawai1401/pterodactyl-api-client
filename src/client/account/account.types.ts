import type { BaseArgs } from "../../types.js";

export interface EditAcountArgs extends BaseArgs {
  password: string;
}

export interface user {
  object: "user";
  attributes: {
    id: number;
    admin: boolean;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    language: string;
  };
}
