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

        mnx_navToBuyerProjectView() {
            this.$router.push("/buyer-project-view")
        },

        mnx_navToPostRequestDescription() {
            this.$router.push("/post-request-description");
        },
        mnx_navToPostRequestNote() {
            this.$router.push("/post-request-note");
        },
        mnx_navToPostRequestReview() {
            this.$router.push("/post-request-review")
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

        mnx_navToSellerBuyerRequestView() {
            this.$router.push("/seller-buyer-request-view");
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
    },
};