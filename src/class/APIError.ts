export class PterodactyleAPIError<T> extends Error {
  constructor(
    readonly status: number,
    readonly message: string,
    readonly path: string,
    readonly body?: T | null,
  ) {
    super(message);
  }
}