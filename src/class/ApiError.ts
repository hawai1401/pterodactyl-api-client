export class PterodactylApiError<Body> extends Error {
  constructor(
    readonly status: number,
    readonly message: string,
    readonly path: string,
    readonly body?: Body | null,
  ) {
    super(message);
  }
}
