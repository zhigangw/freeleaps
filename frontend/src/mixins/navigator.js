export default {
    methods: {
        mnx_navToSignin() {
            this.$router.push("/user-signin");
        },

        mnx_navAfterSignedin() {
            if (this.mnx_isUserAuthenticated()) {
                if (this.mnx_isUserBuyer()) {
                    this.$router.push("/buyer-basic");
                }
                if (this.mnx_isUserSeller()) {
                    this.$router.push("/seller-basic");
                }
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

        mnx_navToPostProjectDescription() {
            this.$router.push("/post-project-description");
        },

        mnx_navToBuyerProjectView() {
            this.$router.push("/buyer-project-view")
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
        }
    },
};