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
    
    fillProject(project) {
        this.project = project;
    }

    fetchProject() {
        return this.project;
    }
}

const requestPostUtils = new RequestPostUtils(store);

export { requestPostUtils };