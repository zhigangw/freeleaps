class Validator {
    constructor(valueName, requirementText, rules) {
        this.valueName = valueName;
        this.requirementText = requirementText;
        this.rules = rules;
    }

    getFormatRequirement() {
        return this.requirementText;
    }

    validate(val) {
        if(val === undefined){
            return this.valueName+ " must be set.";
        }

        if(val === null){
            return this.valueName+ " must be given a value.";
        }    
        
        return null;
    }
}
export { Validator }