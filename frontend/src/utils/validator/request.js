import { RequestHeadlineValidator } from "./requestHeadlineValidator"
import { RequestDetailsValidator } from "./requestDetailsValidator"

class RequestValidator {
    constructor() {
        this.requestHeadlineValidator = new RequestHeadlineValidator();
        this.requestDetailsValidator = new RequestDetailsValidator();
    }
}

const requestValidator = new RequestValidator();

export { requestValidator }
