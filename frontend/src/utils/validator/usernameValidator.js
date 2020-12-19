import { TextValidator } from './textValidator'
const userNamePattern = /^([a-zA-Z]{1,1}[a-zA-Z0-9]{5,15}$)/;
const userNameFirstLetterPattern = /^[a-zA-Z].*$/;
const userNameFormatMessage =
    "6 to 18 characters, start with at least one letter and contains alphanumeric characters";
const userNameMinLength = 6;
const userNameMaxLength = 16;

class UsernameValidator extends TextValidator {
    constructor() {
        super(
            "Username",
            userNameFormatMessage,
            [
                {
                    regex: userNameFirstLetterPattern,
                    message: " starts with a letter."
                },
                {
                    regex: userNamePattern,
                    message: " only contains letters and numbers"
                }
            ],
            userNameMinLength,
            userNameMaxLength
        );
    }

}

export { UsernameValidator }