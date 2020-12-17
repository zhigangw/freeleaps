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

const emailFormatMessage =
    "need a valid email address";
const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

const imageFormatMessage = "png or jpg file, size less than 1 MB";
const imageSrcPattern = /^(data:image\/(p?jpe?g?|png|p?tif);base64)/;

const locationFormatMessage = "the name of geo locations";
const locationNamePattern = /^[A-Z]{1,1}[A-Za-z,()' '.']{1,56}$/;

const experienceHeadlineFormatMessage = "less then 128 characters";
const experienceHeadlinePattern = /^[ -~]{10,128}$/;
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
        if (name.length > 18) {
            return "the length of name must be less then 18";
        }
        if (!namePattern.test(name)) {
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
        if (mobile.length > 18) {
            return "the length of mobile must be less then 18";
        }
        if (!mobilePattern.test(mobile)) {
            return "mobile can only contain numbers";
        }
    }

    static getEmailFormatRequirement() {
        return emailFormatMessage;
    }

    static validateEmail(email) {
        if (email == undefined || email == null || email.length == 0) {
            return "email can't be empty";
        }
        if (email.length > 18) {
            return "the length of mobile must be less then 18";
        }
        if (!emailPattern.test(email)) {
            return "not a valid email address";
        }
    }

    static getGeoLocationFormatRequirement() {
        return locationFormatMessage;
    }

    static validateGeoLocation(location) {
        if (location == undefined || location == null || location.length == 0) {
            return "image can't be empty";
        }
        if (!locationNamePattern.test(location)) {
            return "not a valid location name. "
        }
    }
    static getImageFormatRequirement() {
        return imageFormatMessage;
    }

    static validateImageFile(imageFile) {
        if (imageFile == undefined || imageFile == null || imageFile.length == 0) {
            return "image can't be empty";
        }
        if (imageFile.length > 2 * 1024 * 1024) {
            return "the size of image must be less then 1 MB";
        }
        if (!imageSrcPattern.test(imageFile)) {
            return "not a valid data format. "
        }
    }

    static getExperienceHeadlineFormatRequirement() {
        return experienceHeadlineFormatMessage;
    }

    static validateExperienceHeadline(experienceHeadline) {

        console.log(experienceHeadline);
        if (experienceHeadline == undefined || experienceHeadline == null || experienceHeadline.length == 0) {
            return "can't be empty";
        }
        if (experienceHeadline.length > 128) {
            return "needs to be less then 128 characters";
        }
        if (!experienceHeadlinePattern.test(experienceHeadline)) {
            return "contains invalid charactors. "
        }
    }

}

export { UserProfileValidator }