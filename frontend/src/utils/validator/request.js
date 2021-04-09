import { RequestHeadlineValidator } from "./requestHeadlineValidator"
import { RequestDetailsValidator } from "./requestDetailsValidator"
import {RequestNotesValidator} from "./requestNotesValidator"

class RequestValidator {
    constructor() {
        this.requestHeadlineValidator = new RequestHeadlineValidator();
        this.requestDetailsValidator = new RequestDetailsValidator();
        this.requestNotesValidator = new RequestNotesValidator();
    }
}

const requestValidator = new RequestValidator();

export { requestValidator }
