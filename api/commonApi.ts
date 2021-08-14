import { AxiosInstance } from 'axios';

import http from './axiosCommon';
import { ServerResponse } from './api.interface';
import { SupportDto } from './common.dto';

export class CommonAPI {
    constructor(private readonly apiCall: AxiosInstance, private readonly prefix: string) {}

    async sendFeedBack(input: SupportDto) {
        const url = `${this.prefix + '/bot/send'}`;
        const res = await this.apiCall.post<ServerResponse<void>>(url, input);
        return res;
    }
}

export const commonAPI = new CommonAPI(http, '');
export default commonAPI;
