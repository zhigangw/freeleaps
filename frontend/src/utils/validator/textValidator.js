import { Validator } from './validator'

class TextValidator extends Validator {
    constructor(valueName, requirementText, rules, minLength, maxLength) {
        super(valueName, requirementText, rules);
        this.minLength = minLength;
        this.maxLength = maxLength;
    }
    getMinLength() {
        return this.minLengh;
    }

    getMaxLength() {
        return this.maxLengh;
    }

    validate(val) {
        let message = super.validate(val);
        if (message) return message;
        if (val.length < this.minLength) {
            message = this.valueName + " has " + (this.minLength) + " or more characters.";
            return message;
        }
        if (val.length > this.maxLength) {
            message = this.valueName + " has " + (this.maxLength) + " or less characters.";
            return message;
        }
        if (this.rules != undefined && this.rules != null) {
            for (var rule of this.rules) {
                {
                    if (rule.regex) {
                        if (rule.regex.test(val) === false) {
                            message = this.valueName + rule.message;
                            return message;
                        }
                    }
                }
            }
        }
        return message;
    }
}

export { TextValidator }