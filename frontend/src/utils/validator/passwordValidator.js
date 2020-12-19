import { TextValidator } from './textValidator'
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
const passwordFormatMessage =
    "8 characters or more, at least one uppercase letter, one lowercase letter, one number and one special characte(@$!%*?#&)";
const passwordMinLength = 8;
const passwordMaxLength = 18;

class PasswordValidator extends TextValidator {
    constructor() {
        super(
            "Password",
            passwordFormatMessage,
            [
                {
                    regex: passwordPattern,
                    message: " need contain at least one uppercase letter, one lowercase letter, one number and one special characte(@$!%*?#&) !"
                }
            ],
            passwordMinLength,
            passwordMaxLength
        );
    }

}

export { PasswordValidator }