import { store } from "../../plugins/index";

class UserProfileUtils {
    constructor(store) {
        this.store = store;
    }
    fillUser(user) {
        this.user = user;
    }
    fetchUser() {
        return this.user;
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

    fillPreferredRoles(perferredRoles) {
        this.perferredRoles = perferredRoles;
    }

    fetchPreferredRoles() {
        return this.perferredRoles;
    }

    fillPreferredTags(preferredTags) {
        this.preferredTags = preferredTags;
    }

    fetchPreferredTags() {
        return this.preferredTags;
    }

    fillPeriod(period) {
        this.period = period;
    }

    fetchPeriod() {
        return this.period;
    }

    fillSubscriptionPlan(plan) {
        this.plan = plan;
    }

    fetchSubscriptionPlan() {
        return this.plan;
    }

}

const userProfileUtils = new UserProfileUtils(store);

export { userProfileUtils };