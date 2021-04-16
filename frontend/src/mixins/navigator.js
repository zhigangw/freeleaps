export default {
    methods: {
        mnx_navToEmailSignin(email) {
            this.$router.push("/email-signin/" + email);
        },
        mnx_navToEmailSignup(email) {
            this.$router.push("/email-signup/" + email);
        },
        mnx_navToFrontDoor() {
            this.$router.push("/front-door");
        },

        mnx_navToUserForgetPassword(username) {
            this.$router.push("/user-forget-password/" + username);
        },

        mnx_navToUserForgetUsername() {
            this.$router.push("/user-forget-username/");
        },

        mnx_navToTempPasswordSent(email, username = null) {
            this.$router.push("/temp-password-sent/" + email + "/" + username);
        },

        mnx_navToUsernameSent(email) {
            this.$router.push("/username-sent/" + email);
        },

        mnx_navToSignin(email) {
            this.$router.push("/user-signin/" + email);
        },

        mnx_navAfterSignedin() {
            if (this.mnx_isUserAuthenticated()) {
                this.mnx_navToWorkplace();
            }
        },

        mnx_navAfterSignedup() {
            if (this.mnx_isUserBuyer()) {
                this.mnx_navToBuyerDashboard();
            }
            if (this.mnx_isUserSeller()) {
                this.mnx_navToSellerDashboard();
            }
        },


        mnx_navToUserAccount() {
            this.$router.push("/user-account")
        },

        mnx_navToUpdateUsername(username) {
            this.$router.push("/update-username/" + username)
        },

        mnx_navToUsernameUpdated(username) {
            this.$router.push("/username-updated/" + username);
        },

        mnx_navToUpdatePassword() {
            this.$router.push("/update-password/")
        },

        mnx_navToPasswordUpdated() {
            this.$router.push("/password-updated/");
        },

        mnx_navToUpdateEmail(email) {
            this.$router.push("/update-email/" + email)
        },

        mnx_navToEmailUpdateRequireCode(email) {
            this.$router.push("/email-update--require-code/" + email)
        },

        mnx_navToEmailUpdated(email) {
            this.$router.push("/email-updated/" + email);
        },

        mnx_navToUpdateMobile(mobile) {
            this.$router.push("/update-mobile/" + mobile)
        },

        mnx_navToMobileUpdateRequireCode(mobile) {
            this.$router.push("/mobile-update--require-code/" + mobile)
        },

        mnx_navToMobileUpdated(mobile) {
            this.$router.push("/mobile-updated/" + mobile);
        },

        mnx_navToUserPersonal() {
            this.$router.push("/user-personal")
        },

        mnx_navToUpdatePhoto() {
            this.$router.push("/update-photo/")
        },

        mnx_navToPhotoUpdated() {
            this.$router.push("/photo-updated/");
        },

        mnx_navToUpdateName() {
            this.$router.push("/update-name/")
        },

        mnx_navToNameUpdated() {
            this.$router.push("/name-updated/");
        },

        mnx_navToUpdateLocation() {
            this.$router.push("/update-location/")
        },

        mnx_navToLocationUpdated() {
            this.$router.push("/location-updated/");
        },


        mnx_navToUserCareer() {
            this.$router.push("/user-career")
        },

        mnx_navToUpdateHeadline() {
            this.$router.push("/update-headline")
        },

        mnx_navToHeadlineUpdated() {
            this.$router.push("/headline-updated/");
        },

        mnx_navToUpdateHighlight() {
            this.$router.push("/update-highlight")
        },

        mnx_navToHighlightUpdated() {
            this.$router.push("/highlight-updated/");
        },

        mnx_navToUpdatePeriod() {
            this.$router.push("/update-period")
        },

        mnx_navToPeriodUpdated() {
            this.$router.push("/period-updated")
        },

        mnx_navToUpdatePreferredRoles() {
            this.$router.push("/update-preferred-roles")
        },

        mnx_navToPreferredRolesUpdated() {
            this.$router.push("/preferred-roles-updated")
        },

        mnx_navToChoosePlan() {
            this.$router.push("/choose-plan")
        },

        mnx_navToChooseUsername() {
            this.$router.push("/choose-username")
        },

        mnx_navToPlanUpdated() {
            this.$router.push("/plan-updated")
        },

        mnx_navToUserWork() {
            this.$router.push("/user-work")
        },

        mnx_navToPostRequestDescription() {
            this.$router.push("/post-request-description/");
        },
        mnx_navToPostRequestNote() {
            this.$router.push("/post-request-note/");
        },
        mnx_navToPostRequestReview() {
            this.$router.push("/post-request-review/")
        },

        mnx_navToRequests() {
            this.$router.push("/browse-requests/")
        },

        mnx_navToQuoteRequest() {
            this.$router.push("/quote-request/")
        },

        mnx_navToQuoteSubmitted() {
            this.$router.push("/quote-submitted/")
        },

        mnx_navToAcceptQuote() {
            this.$router.push("/accept-quote/")
        },
        mnx_navToQuoteAccepted() {

            this.$router.push("/qutoe-accepted/")
        },

        mnx_navToUpdateProjectStatus() {
            this.$router.push("/update-project-status/")
        },
        mnx_navToProjectStatusUpdated() {
            this.$router.push("/project-status-updated/")
        },
        mnx_navToViewProject() {
            this.$router.push("/view-project/")
        },


        mnx_navToWorkplaceMessages() {
            this.$router.push("/workplace-messages")
        },

        mnx_navToWorkplaceProjects() {
            this.$router.push("/workplace-projects")
        },

        mnx_navToWorkplaceRequests() {
            this.$router.push("/workplace-requests")
        },

        mnx_navToWorkplaceProposals() {
            this.$router.push("/workplace-proposals")
        },

        mnx_navToWorkplace() {
            this.$router.push("/workplace")
        },


        mnx_navToBuyerProjectView(requestId) {
            this.$router.push("/buyer-project-view/" + requestId);
        },
        mnx_navToBuyerRequestView(requestId) {
            this.$router.push("/buyer-request-view/" + requestId);
        },
        mnx_navToSellerDashboard() {
            this.$router.push("/seller-dashboard");
        },

        mnx_navToSellerBrowseRequests() {
            this.$router.push("/seller-browse-requests");
        },

        mnx_navToSellerBuyerRequestView(requestId) {
            this.$router.push("/seller-buyer-request-view/" + requestId);
        },

        mnx_navToSellerApplyRequest() {
            this.$router.push("/seller-quoting");
        },

        mnx_navToSellerProjectView(projectId) {
            this.$router.push("/seller-project-view/" + projectId);
        },

        mnx_navToSellerEarnings() {
            this.$router.push("/seller-earnings");
        },

        mnx_navToSellerTransferMoney() {
            this.$router.push("/seller-transfer-money");
        },
        mnx_goBack() {
            this.$router.go(-1);
        },

    },
};