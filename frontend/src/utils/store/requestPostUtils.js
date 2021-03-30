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
}

const requestPostUtils = new RequestPostUtils(store);

export { requestPostUtils };