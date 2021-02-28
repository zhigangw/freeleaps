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
            this.$router.push("/update-username/"+ username)
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

        mnx_navToPostRequestDescription(requestId) {
            this.$router.push("/post-request-description/" + requestId);
        },
        mnx_navToPostRequestNote(requestId) {
            this.$router.push("/post-request-note/" + requestId);
        },
        mnx_navToPostRequestReview(requestId) {
            this.$router.push("/post-request-review/" + requestId)
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