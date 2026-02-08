import type { BaseArgs, IP, List, ListwithPagination } from "../../../types.js";

export type Port = `${number}`;
export type PortRange = `${number}-${number}`;

export interface ApplicationAllocation {
  object: "allocation";
  attributes: {
    id: number;
    ip: IP;
    alias: string | null;
    port: number;
    notes: string | null;
    assigned: boolean;
  };
}

export interface ApplicationAllocationListWithDate extends ListwithPagination {
  data: ApplicationAllocation[];
}

export interface CreateApplicationAllocationArgs extends BaseArgs {
  ip: IP;
  ports: (Port | PortRange)[];
  alias: string;
}

export interface ApplicationAllocationList extends List {
  data: ApplicationAllocation[];
}
