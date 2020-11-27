import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class RequestQuoteApi {
    static submitQuote(quote) {
        console.log(quote)
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


}

export {RequestQuoteApi}