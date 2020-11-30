import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class SellerProfileApi {
    static saveRequest(requestId) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/seller-profile/save-request',
            {
                requestId: requestId,
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static fetchSavedRequests() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/seller-profile/fetch-saved-requests',
            {
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

}

export { SellerProfileApi }