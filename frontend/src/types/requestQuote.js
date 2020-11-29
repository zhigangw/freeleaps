const requestQuoteStatusEnum = Object.freeze({
    DRAFT: 0,
    SUBMITTED: 1,
    REVIEWED: 2,
    ACCEPTED: 3,
    DECLINED: 4,
});

class ReqeustQuoteData{
    static getId(quote){
        return quote._id.$oid;
    }
}
export { requestQuoteStatusEnum, ReqeustQuoteData }