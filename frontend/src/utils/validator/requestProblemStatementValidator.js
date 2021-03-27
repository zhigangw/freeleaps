import { TextValidator } from './textValidator'
const formatMessage = "less then 4098 characters";
const pattern = /^[ -~|\n]{128,4098}$/;
const minLength = 128;
const maxLength = 1024;

class RequestProblemStatementValidator extends TextValidator {
    constructor() {
        super(
            "Problem Statement",
            formatMessage,
            [
                {
                    regex: pattern,
                    message: " contains invalid charactors."
                }
            ],
            minLength,
            maxLength
        );
    }

}

export { RequestProblemStatementValidator }
