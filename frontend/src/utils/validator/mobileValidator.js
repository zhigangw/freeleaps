import { TextValidator } from './textValidator'
const mobileFormatMessage =
"only contains numbers length less than 15 ";
const mobilePattern = /^([0-9]{1,15}$)/;
const mobileMinLength = 6;
const mobileMaxLength = 18;

class MobileValidator extends TextValidator {
    constructor() {
        super(
            "Mobile",
            mobileFormatMessage,
            [
                {
                    regex: mobilePattern,
                    message: " mobile can only contain numbers."
                }
            ],
            mobileMinLength,
            mobileMaxLength
        );
    }

}

export { MobileValidator }

