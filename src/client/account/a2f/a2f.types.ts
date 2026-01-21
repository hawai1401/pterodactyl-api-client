import type { EditAcountArgs } from "../account.types.js";

export interface EnableA2fArgs extends EditAcountArgs {
  code: string;
}

export interface A2FData {
  data: {
    image_url_data: string;
    secret: string;
  };
}

export interface RecoveryTokens {
  object: "recovery_tokens";
  attributes: {
    tokens: [string, string, string, string, string, string, string, string];
  };
}
