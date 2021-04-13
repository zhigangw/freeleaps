const requestQuoteStatusEnum = Object.freeze({
    DRAFT: 0,
    SUBMITTED: 1,
    ACCEPTED: 2,
    DECLINED: 3,
});

class RequestQuoteUtils {
    static getStatusString(status) {
        switch (status) {
            case 0: return "Draft";
            case 1: return "Submitted";
            case 2: return "Accepted";
            case 3: return "Declined";
        }
        return "undefined";
    }
}

export { requestQuoteStatusEnum, RequestQuoteUtils }