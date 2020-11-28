export default {
    methods: {
        mnx_navToSignup() {
            this.$router.push("/fromt-door");
        },
        mnx_navToSignin() {
            this.$router.push("/user-signin");
        },

        mnx_navAfterSignedin() {
            if (this.mnx_isUserAuthenticated()) {
                if (this.mnx_isUserBuyer()) {
                    this.mnx_navToBuyerDashboard();
                }
                if (this.mnx_isUserSeller()) {
                    this.mnx_navToSellerDashboard();
                }
            }
        },

        mnx_navAfterSignedup() {
            if (this.mnx_isUserBuyer()) {
                this.mnx_navToBuyerBasicInfo();
            }
            if (this.mnx_isUserSeller()) {
                this.mnx_navToSellerBasicInfo();
            }
        },

        mnx_navToBuyerRegister() {
            this.$router.push("/buyer-register");
        },

        mnx_navToBuyerBasicInfo() {
            this.$router.push("/buyer-basic-info");
        },

        mnx_navToBuyerPhoto() {
            this.$router.push("/buyer-photo");
        },
        mnx_navToBuyerLinkedin() {
            this.$router.push("/buyer-linkedin");
        },

        mnx_navToBuyerPackage() {
            this.$router.push("/buyer-package");
        },

        mnx_navToBuyerDashboard() {
            this.$router.push("/buyer-dashboard")
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
        mnx_navToSellerRegister() {
            this.$router.push("/seller-register")
        },

        mnx_navToSellerBasicInfo() {
            this.$router.push("/seller-basic-info");
        },

        mnx_navToSellerPhoto() {
            this.$router.push("/seller-photo");
        },

        mnx_navToSellerLinkedin() {
            this.$router.push("/seller-linkedin");
        },

        mnx_navToSellerPackage() {
            this.$router.push("/seller-package");
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

        mnx_navToSellerProjectView() {
            this.$router.push("/seller-project-view");
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