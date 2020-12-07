import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class UserProfileApi {
    static fetchSettings() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-profile/fetch-settings',
            {
               
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

}

export { UserProfileApi }