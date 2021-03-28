import { TextValidator } from './textValidator'
const formatMessage = "less then 256 characters";
const pattern = /^[ -~|\n]{16,256}$/;
const minLength = 16;
const maxLength = 256;

class RequestHeadlineValidator extends TextValidator {
    constructor() {
        super(
            "Headline",
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

export { RequestHeadlineValidator }
