import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class WorkplaceApi {
    static fetchInbox() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/work-place/fetch-inbox',
            {
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

}

export { WorkplaceApi }