import { store } from "../../plugins/index";

class UserProfileUtils {
    constructor(store) {
        this.store = store;
    }

    fillPhoto(photo) {
        this.photo = photo;
    }

    fetchPhoto() {
        return this.photo;
    }

    fillName(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    fetchName() {
        return [this.firstName, this.lastName];
    }
}

const userProfileUtils = new UserProfileUtils(store);

export { userProfileUtils };