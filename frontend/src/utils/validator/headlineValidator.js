import { TextValidator } from './textValidator'
const headlineFormatMessage = "less then 128 characters";
const headlinePattern = /^[ -~]{10,128}$/;
const headlineMinLength = 10 ;
const headlineMaxLength = 128;

class HeadlineValidator extends TextValidator {
    constructor() {
        super(
            "Headline",
            headlineFormatMessage,
            [
                {
                    regex: headlinePattern,
                    message: " contains invalid charactors."
                }
            ],
            headlineMinLength,
            headlineMaxLength
        );
    }

}

export { HeadlineValidator }
