import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class CareerApi {
    static fetchJobRoles() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/career-role/fetch-roles',
            {

            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }
}

export { CareerApi }