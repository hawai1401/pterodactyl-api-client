export class PterodactylApiError extends Error {
    status;
    message;
    path;
    body;
    constructor(status, message, path, body) {
        super(message);
        this.status = status;
        this.message = message;
        this.path = path;
        this.body = body;
    }
}
