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

    static fetchAccount() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-profile/fetch-account',
            {

            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static fetchWork() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-profile/fetch-work',
            {

            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static choosePackage(service) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-profile/choose-package',
            {
                package: service
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );

        return request;
    }
}

export { UserProfileApi }