const requestQuoteStatusEnum = Object.freeze({
    DRAFT: 0,
    SUBMITTED: 1,
    REVIEWED: 2,
    ACCEPTED: 3,
    DECLINED: 4,
});

class RequestQuoteUtils {
    static getStatusString(status) {
        switch (status) {
            case 0: return "Draft";
            case 1: return "Submitted";
            case 2: return "Reviewed";
            case 3: return "Accepted";
            case 4: return "Declined";
        }
        return "undefined";
    }
}

export { requestQuoteStatusEnum, RequestQuoteUtils }