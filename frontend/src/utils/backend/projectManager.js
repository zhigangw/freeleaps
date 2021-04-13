import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class PojectManagerApi {
    static fetchForProvider() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/project-manage/fetch-for-provider',
            {
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;

    }
    static fetchForPoster() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/project-manage/fetch-for-poster',
            {
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;

    }
    static fetchForRequest(requestId) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/project-manage/fetch-for-provider',
            {
                requstId: requestId
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;

    }
}

export { PojectManagerApi }