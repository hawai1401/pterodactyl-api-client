import { BaseClient } from '../../class/BaseClient.js';
export class NestsClient extends BaseClient {
    async list() {
        const nestObjectList = await this.httpClient.request('GET', '/application/nests', { parseDates: true });
        return {
            data: nestObjectList.data.map((nestObject) => nestObject.attributes),
            pagination: nestObjectList.meta.pagination,
        };
    }
}
