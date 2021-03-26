import { RequestProblemStatementValidator } from "./requestProblemStatementValidator"
import { RequestDeliverablesValidator } from "./requestDeliverablesValidator"
import { RequestCriteriaValidator } from "./requestCriteriaValidator"

class RequestValidator {
    constructor() {
        this.problemStatementValidator = new RequestProblemStatementValidator();
        this.requestDeliverablesValidator = new RequestDeliverablesValidator();
        this.requestCriteriaValidator = new RequestCriteriaValidator();
    }
}

const requestValidator = new RequestValidator();

export { requestValidator }
