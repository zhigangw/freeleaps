import { TextValidator } from './textValidator'
const formatMessage = "less then 1024 characters";
const pattern = /^[ -~]{50,1024}$/;
const minLength = 512;
const maxLength = 4098;

class DescriptionValidator extends TextValidator {
    constructor() {
        super(
            "Description",
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

export { DescriptionValidator }
