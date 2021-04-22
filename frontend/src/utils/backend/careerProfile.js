import { backendAxios } from './axios'
import { userUtils } from '../store/index'
import { ResponseFormatter } from "./responseFormatter"

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

    static updateExperiencePeriod(period) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            this.baseUrl + 'update/period',
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
    static updateWage(wage) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            this.baseUrl + 'update/wage',
            {
                wage: wage,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }
        );
        return request;
    }

    static formalize(period) {
        period.oid = ResponseFormatter.getId(period);
        period.startDate = new Date(ResponseFormatter.getDate(period.startDate)).toISOString().split("T")[0];
        period.endDate = new Date(ResponseFormatter.getDate(period.endDate)).toISOString().split("T")[0];
    }

}
export { CareerProfileApi }