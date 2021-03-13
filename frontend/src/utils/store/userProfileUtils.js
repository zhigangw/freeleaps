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

    fillLocation(location) {
        this.location = location;
    }

    fetchLocation() {
        return this.location;
    }

    fillHeadline(headline) {
        this.headline = headline;
    }

    fetchHeadline() {
        return this.headline;
    }
    
    fillHighlight(highlight) {
        this.highlight = highlight;
    }

    fetchHighlight() {
        return this.highlight;
    }
    
    fillPeriod(period) {
        this.period = period;
    }

    fetchPeriod() {
        return this.period;
    }
}

const userProfileUtils = new UserProfileUtils(store);

export { userProfileUtils };