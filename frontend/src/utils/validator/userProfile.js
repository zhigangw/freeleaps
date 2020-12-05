const userNamePattern = /^([a-zA-Z]{1,1}[a-zA-Z0-9]{5,17}$)/;
const userNameFormatMessage =
    "6 to 18 characters, start with at least one letter and contains alphanumeric characters";
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
const passwordFormatMessage =
    "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte(@$!%*?#&)";


class UserProfileValidator {
    static
        getUserNameFormatRequirement() {
        return userNameFormatMessage;
    }
    static
        validateUsername(username) {
        let usernameError = null;
        if (!userNamePattern.test(username)) {
            usernameError = "Invalid username !";
        }
        return usernameError;
    }

    static
        getPasswordFormatRequirement() {
        return passwordFormatMessage;
    }

    static
        validatePassword(password) {
        let passwordError = null;
        if (!passwordPattern.test(password)) {
            passwordError = "Invalid password !";
        }
        return passwordError;
    }
}

export { UserProfileValidator }