export interface UserId {
  id?: number | undefined;
  external_id?: string | undefined;
}

export interface FetchUserOptions<IncludeServers extends boolean> {
  includeServers?: IncludeServers;
}
