import type { EditAcountArgs } from "../account.types.js";

export interface EditEmailArgs extends EditAcountArgs {
  email: string;
}
