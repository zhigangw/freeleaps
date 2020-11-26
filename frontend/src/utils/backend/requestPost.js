import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class RequestPostApi {
    static fillDescription(requestId, problemStatement, deliverables, criteria) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/request-post/fill-description',
            {
                requestId: requestId,
                problemStatement: problemStatement,
                deliverables: deliverables,
                criteria: criteria,
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static fetchDescription(requestId) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/request-post/fetch-description',
            {
                requestId: requestId
            }
            ,
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static fillNote(
        requestId,
        totalBudget,
        currency,
        escortedDeposit,
        estimatedHours,
        qualification,
        notes
    ) {
        console.log("fillNote:"+ requestId);
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/request-post/fill-note',
            {
                requestId: requestId,
                totalBudget: totalBudget,
                currency: currency,
                escortedDeposit: escortedDeposit,
                estimatedHours: estimatedHours,
                qualification: qualification,
                notes: notes
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static fetchNotes(requestId) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/request-post/fetch-notes',
            {
                requestId: requestId
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static fillStatus(requestId, status) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/request-post/fill-status',
            {
                requestId: requestId,
                status: status,
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static fetchMineAsSummary() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/request-post/mine-summary',
            {
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static fetchAllPublishedAsSummary() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/request-post/published-summary',
            {
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }
}

export { RequestPostApi }