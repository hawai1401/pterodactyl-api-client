import type { ListwithPagination } from "../../types.js";
import type { Nest } from "../nest/nest.types.js";

export interface NestList extends ListwithPagination {
  data: Nest<string>[];
}
