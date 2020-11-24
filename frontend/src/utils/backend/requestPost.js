import { backendAxios } from './axios'

class RequestPostApi {
    static fillDescription(problemStatement, deliverables, criteria) {
        const request = backendAxios.post('/api/request-post/fill-description', {
            problemStatement: problemStatement,
            deliverables: deliverables,
            criteria: criteria,
        });
        return request;
    }

    static fetchDescription(requestId) {
        const request = backendAxios.post('/api/request-post/fetch-description', {
            requestId: requestId
        });
        return request;
    }

    static fillNote(totalBudget, escortedDeposit, estimatedTime, qualification, notes) {
        const request = backendAxios.post('/api/request-post/fill-note', {
            totalBudget: totalBudget,
            escortedDeposit: escortedDeposit,
            estimatedTime: estimatedTime,
            qualification: qualification,
            notes:notes
        });
        return request;
    }

    static fetchNotes(requestId) {
        const request = backendAxios.post('/api/request-post/fetch-notes', {
            requestId: requestId
        });
        return request;
    }

    static postRequest(identity, jwt) {
        const request = backendAxios.post(
            '/api/request-post/post-request',
            {
                identity: identity,
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

}

export { RequestPostApi }