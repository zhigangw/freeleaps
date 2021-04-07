import { store } from "../../plugins/index";

class RequestPostUtils {
    constructor(store) {
        this.store = store;
    }

    fillRequest(request) {
        this.request = request;
    }

    fetchRequest() {
        return this.request;
    }

    fillQuote(quote) {
        this.quote = quote;
    }

    fetchQuote() {
        return this.quote;
    }
}

const requestPostUtils = new RequestPostUtils(store);

export { requestPostUtils };