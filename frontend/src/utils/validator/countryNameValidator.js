import { TextValidator } from './textValidator'

const countryFormatMessage = "the name of a country";
const countryNamePattern = /^[A-Z]{1,1}[A-Za-z,()' '.']{1,56}$/;
const countryMinLength = 3;
const countryMaxLength = 56;

class CountryNameValidator extends TextValidator {
    constructor() {
        super(
            "Country",
            countryFormatMessage,
            [
                {
                    regex: countryNamePattern,
                    message: " is not a valid location name."
                }
            ],
            countryMinLength,
            countryMaxLength
        );
    }

}

export { CountryNameValidator }

