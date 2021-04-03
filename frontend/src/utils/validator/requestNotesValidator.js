import { TextValidator } from './textValidator'
const formatMessage = "less then 4098 characters";
const pattern = /^[ -~|\n]{32,4098}$/;
const minLength = 32;
const maxLength = 4098;

class RequestNotesValidator extends TextValidator {
    constructor() {
        super(
            "Notes",
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

export { RequestNotesValidator }
