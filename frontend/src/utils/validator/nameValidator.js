import { TextValidator } from './textValidator'
const nameFormatMessage = "less than 18 letters";
const namePattern = /^([a-zA-Z-]{1,18}$)/;
const nameMinLength = 3;
const nameMaxLength = 18;

class NameValidator extends TextValidator {
    constructor() {
        super(
            "Name",
            nameFormatMessage,
            [
                {
                    regex: namePattern,
                    message: " can only contain letters."
                }
            ],
            nameMinLength,
            nameMaxLength
        );
    }

}

export { NameValidator }