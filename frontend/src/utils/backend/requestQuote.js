import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class RequestQuoteApi {
    static submitQuote(
        requestId,
        totalBudget,
        currency,
        escortedDeposit,
        estimatedHours,
        qualification,
        notes
    ) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/request-quote/submit-quote',
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


}

export {RequestQuoteApi}