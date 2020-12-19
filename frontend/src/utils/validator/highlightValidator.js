import { TextValidator } from './textValidator'
const highlightFormatMessage = "less then 1024 characters";
const highlightPattern = /^[ -~]{50,1024}$/;
const highlightMinLength = 10;
const highlightMaxLength = 128;

class HighlightValidator extends TextValidator {
    constructor() {
        super(
            "Highlight",
            highlightFormatMessage,
            [
                {
                    regex: highlightPattern,
                    message: " contains invalid charactors."
                }
            ],
            highlightMinLength,
            highlightMaxLength
        );
    }

}

export { HighlightValidator }
