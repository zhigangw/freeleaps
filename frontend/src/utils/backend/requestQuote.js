import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class RequestQuoteApi {
    static submitQuote(quote) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/request-quote/submit-quote',
            quote,
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

}

export { RequestQuoteApi }