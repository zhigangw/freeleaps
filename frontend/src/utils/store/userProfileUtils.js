import { store } from "../../plugins/index";

class UserProfileUtils {
    constructor(store) {
        this.store = store;
    }

    fillPhoto(photo) {
        this.photo = photo;
    }

    fetchPhoto(){
        return this.photo;
    }
}

const userProfileUtils = new UserProfileUtils(store);

export { userProfileUtils };