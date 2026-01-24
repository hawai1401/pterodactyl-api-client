import type { BaseArgs, List } from "../../../types.js";
import type { EggVariable } from "../server.types.js";

export interface EggVariableList extends List {
  data: EggVariable[];
  meta: {
    startup_command: string;
    raw_startup_command: string;
    docker_images: Record<string, string>;
  };
}

export interface EditEggVariable extends BaseArgs {
  key: string;
  value: string;
}
