import type { BaseArgs, ListwithPagination } from "../../types.js";
import type { Location } from "../location/location.types.js";

export interface LocationList extends ListwithPagination {
  data: Location<string>[];
}

export interface CreateLocationArgs extends BaseArgs {
  short: string;
  long: string;
}
