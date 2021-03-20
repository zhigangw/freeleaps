import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class SubscriptionApi {
    static fetchPlans() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/subscription-services/fetch-plans',
            {

            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }
}

export { SubscriptionApi }