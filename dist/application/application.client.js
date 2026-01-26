import HttpClient from "../class/HttpClient.js";
import UserClient from "./user/user.client.js";
export default class ApplicationAPI {
    httpClient;
    panelUrl;
    user;
    constructor({ apiKey, panelUrl }) {
        this.panelUrl = panelUrl;
        this.httpClient = new HttpClient(panelUrl, apiKey);
        this.user = new UserClient(this.httpClient);
    }
}
