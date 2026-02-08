import type { ListwithPagination } from "../../types.js";

export interface Nest<T extends string | Date> {
  object: "nest";
  attributes: {
    id: number;
    uuid: string;
    author: string;
    name: string;
    description: string;
    created_at: T;
    updated_at: T;
  };
}
