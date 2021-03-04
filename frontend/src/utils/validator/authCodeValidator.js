import { TextValidator } from './textValidator'
const authCodePattern = /^[0-9]{6,6}$/;
const authCodeFormatMessage =
    "contains 6 digits";
const AuthCodeMinLength = 6;
const AuthCodeMaxLength = 6;

class AuthCodeValidator extends TextValidator {
    constructor() {
        super(
            "Auth Code",
            authCodeFormatMessage,
            [
                {
                    regex: authCodePattern,
                    message: "contains 6 digits !"
                }
            ],
            AuthCodeMinLength,
            AuthCodeMaxLength
        );
    }

}

export { AuthCodeValidator }