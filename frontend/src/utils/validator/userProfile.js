const userNamePattern = /^([a-zA-Z]{1,1}[a-zA-Z0-9]{5,15}$)/;
const userNameFirstLetterPattern = /^[a-zA-Z].*$/;
const userNameFormatMessage =
    "6 to 18 characters, start with at least one letter and contains alphanumeric characters";
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
const passwordFormatMessage =
    "8 characters or more, at least one uppercase letter, one lowercase letter, one number and one special characte(@$!%*?#&)";
const nameFormatMessage =
    "less than 18 letters";
const namePattern = /^([a-zA-Z-]{1,18}$)/;

const mobileFormatMessage =
    "only contains numbers length less than 15 ";
const mobilePattern = /^([0-9]{1,15}$)/;

class UserProfileValidator {
    static
        getUserNameFormatRequirement() {
        return userNameFormatMessage;
    }
    static
        validateUsername(username) {
        if (username == undefined || username == null || username.length == 0) {
            return "username can't be empty";
        }
        if (username.length < 6) {
            return "username need have 6 or more charactoers";
        }

        if (username.length > 16) {
            return "username need have 16 or less charactoers";
        }

        if (!userNameFirstLetterPattern.test(username)) {
            return "username need start with a letter.";
        }
        if (!userNamePattern.test(username)) {
            return "username can only contain letters and numbers";
        }
        return null;
    }

    static
        getPasswordFormatRequirement() {
        return passwordFormatMessage;
    }

    static
        validatePassword(password) {
        if (password == undefined || password == null || password.length == 0) {
            return "password can't be empty";
        }
        if (password.length < 8) {
            return "password need have 8 or more characters.";
        }
        if (password.length > 18) {
            return "password need have 18 or less characters.";
        }

        if (!passwordPattern.test(password)) {
            return "password need have at least one uppercase letter, one lowercase letter, one number and one special characte(@$!%*?#&) !";
        }
        return null;
    }

    static getNameFormatRequirement() {
        return nameFormatMessage;
    }

    static validateName(name) {
        if (name == undefined || name == null || name.length == 0) {
            return "name can't be empty";
        }
        if(name.length>18){
            return "the length of name must be less then 18";
        }
        if(!namePattern.test(name)){
            return "name can only contain letters";
        }
    }

    static getMobileFormatRequirement() {
        return mobileFormatMessage;
    }

    static validateMobile(mobile) {
        if (mobile == undefined || mobile == null || mobile.length == 0) {
            return "mobile can't be empty";
        }
        if(mobile.length>18){
            return "the length of mobile must be less then 18";
        }
        if(!mobilePattern.test(mobile)){
            return "mobile can only contain numbers";
        }
    }
}

export { UserProfileValidator }