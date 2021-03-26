import { TextValidator } from './textValidator'
const formatMessage = "less then 4098 characters";
const pattern = /^[ -~|\n]{128,4098}$/;
const minLength = 128;
const maxLength = 4098;

class RequestCriteriaValidator extends TextValidator {
    constructor() {
        super(
            "Criteria",
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

export { RequestCriteriaValidator }
