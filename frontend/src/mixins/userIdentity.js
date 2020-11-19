export default {
    methods: {
        mnx_authenticatedUser(jwt) {
            this.$store.dispatch("userAuth/authenticateUser", { jwt: jwt});

        },

        mnx_isUserAuthenticated() {
            return this.$store.getters["userAuth/isUserAuthenticated"];
        },
        mnx_getUserIdentity() {
            return this.$store.getters["userAuth/userIdentify"];
        },
        mnx_getUserAuthToken() {
            return this.$store.getters["userAuth/userAuthToken"];
        },

        mnx_isUserBuyer() {
            return this.$store.getters["userProfile/userIsBuyer"];
        },

        mnx_isUserSeller() {
            return this.$store.getters["userProfile/userIsSeller"];
        },

        mnx_setUserSeller() {
            this.$store.dispatch("userProfile/useSellerRole");
        },

        mnx_setUserBuyer() {
            this.$store.dispatch("userProfile/useBuyerRole");
        },

        mnx_unauthenticatedUser() {
            this.$store.dispatch("userAuth/unauthenticateUser");
        },

        mnx_logoutRole() {
            this.$store.dispatch("userProfile/logoutRoles");
        },

        mnx_setUserRole(role) {
            this.$store.dispatch("userProfile/setUserRole", { role: role });
        }
    },
}