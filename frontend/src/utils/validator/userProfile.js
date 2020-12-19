import { UsernameValidator } from "./usernameValidator"
import {PasswordValidator} from "./passwordValidator"
import {NameValidator} from "./nameValidator"
import {MobileValidator} from "./mobileValidator"
import {EmailValidator} from "./emailValidator"
import {ImageValidator} from "./imageValidator"
import {HeadlineValidator} from "./headlineValidator"
import {HighlightValidator} from "./highlightValidator"


class ProfileValidator {
    constructor() {
        this.usernameValidator = new UsernameValidator();
        this.passwordValidator = new PasswordValidator();
        this.nameValidator = new NameValidator();
        this.mobileValidator = new MobileValidator();
        this.emailValidator = new EmailValidator();
        this.imageValidator = new ImageValidator();
        this.headlineValidator = new HeadlineValidator();
        this.highlightValidator = new HighlightValidator();
    }
}

const userProfileValidator = new ProfileValidator();

export { userProfileValidator }