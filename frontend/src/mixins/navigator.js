export default {
    methods: {
        mnx_navAfterSignedin() {
            this.$router.push("/user-basic");
        },

        mnx_navAfterCreatedAccount() {
            this.$router.push("/user-basic");
        },

        mnx_navToPostProjectDescription() {
            this.$router.push("/post-project-description");
        },

        mnx_navToBuyerProjectView() {
            this.$router.push("/buyer-project-view")
        },

        mnx_navToBuyerDashboard(){
            this.$router.push("/buyer-dashboard")
        }
    },
};