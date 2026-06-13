export declare class PterodactylApiError<Body> extends Error {
    readonly status: number;
    readonly message: string;
    readonly path: string;
    readonly body?: (Body | null) | undefined;
    constructor(status: number, message: string, path: string, body?: (Body | null) | undefined);
}
//# sourceMappingURL=ApiError.d.ts.map