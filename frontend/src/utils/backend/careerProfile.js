import { backendAxios } from './axios'
import { userUtils } from '../store/index'
class CareerProfileApi {
    static baseUrl = '/api/career-profile/';

    static updateJobRole(jobRole) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            this.baseUrl + 'update/job-role',
            {
                jobRole: jobRole,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }
        );
        return request;
    }

    static updateExperienceHeadline(headline) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            this.baseUrl + 'update/headline',
            {
                headline: headline,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }
        );
        return request;
    }

    static updateExperienceHighlight(highlight) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            this.baseUrl + 'update/highlight',
            {
                highlight: highlight,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }
        );
        return request;
    }

    static updateExperiencePeriod(id, period) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            this.baseUrl + 'update/period',
            {
                id: id,
                period: period,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }
        );
        return request;
    }

    static addExperiencePeriod(period) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            this.baseUrl + 'add/period',
            {
                period: period,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }
        );
        return request;
    }

}
export { CareerProfileApi }