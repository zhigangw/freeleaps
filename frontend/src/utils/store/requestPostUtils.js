import { store } from "../../plugins/index";

class RequestPostUtils {
    constructor(store) {
        this.store = store;
    }

    fillDescription(description) {
        this.description = description;
    }

    fetchDescription() {
        return this.description;
    }

    fillNotes(notes) {
        this.notes = notes;
    }

    fetchNotes() {
        return this.notes;
    }

    fillRequestId(requestId) {
        this.requestId = requestId;
    }

    fetchRequestId() {
        return this.requestId;
    }

    fillStatus(status) {
        this.status = status;
    }

    fetchStatus() {
        return this.status;
    }
}

const requestPostUtils = new RequestPostUtils(store);

export { requestPostUtils };