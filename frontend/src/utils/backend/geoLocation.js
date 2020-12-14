import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class GeoLocationApi {
    static fetchCountries() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/geo-location/fetch-countries',
            {

            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }
}

export { GeoLocationApi }