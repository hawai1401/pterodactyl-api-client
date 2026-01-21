import type { BaseArgs } from "../../../types.js";

export interface EditPasswordArgs extends BaseArgs {
  current_password: string;
  password: string;
  password_confirmation: string;
}
