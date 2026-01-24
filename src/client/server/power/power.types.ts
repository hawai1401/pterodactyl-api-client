import type { BaseArgs } from "../../../types.js";
import type { Signal } from "../server.types.js";

export interface PowerArgs extends BaseArgs {
  signal: Signal;
}
