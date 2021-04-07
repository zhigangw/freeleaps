import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class RequestQuoteApi {
    static submitQuote(notes) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/request-quote/submit-quote',
            {
                notes: notes
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static fetchMine(requestId) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/request-quote/fetch-mine',
            {
                requestId: requestId
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static fetchOpen() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/request-quote/fetch-open',
            {
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }
    static fetchQuotes(requestId) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/request-quote/fetch-quotes',
            {
                requestId: requestId
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static acceptQuote(quoteId, requestId) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/request-quote/accept-quote',
            {
                quoteId: quoteId,
                requestId: requestId
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

}

export { RequestQuoteApi }