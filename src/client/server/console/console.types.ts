import type { BaseArgs } from "../../../types.js";

export interface SendConsoleCommandArgs extends BaseArgs {
  command: string;
}

export * from "./websocket/websocket.console.types.js";
