export default {
    methods: {
        mnx_authenticatedUser(jwt) {
            this.$store.dispatch("userAuth/authenticateUser", { jwt: jwt });
        },
        mnx_unauthenticatedUser() {
            this.$store.dispatch("userAuth/unauthenticateUser");
        },

        mnx_isUserAuthenticated() {
            return this.$store.getters["userAuth/isUserAuthenticated"];
        },
        mnx_getUserIdentity() {
            return this.$store.getters["userAuth/userIdentity"];
        },
        mnx_getUserAuthToken() {
            return this.$store.getters["userAuth/userAuthToken"];
        },

        mnx_IsKeepUserSignedIn() {
            return this.$store.getters["userAuth/keepUserSignedin"];
        },

        mnx_setKeepUserSignedIn(keep) {
            this.$store.dispatch("userAuth/keepUserSignedin", { keep: keep });
        },

        mnx_loadAuthLocal() {
            this.$store.dispatch("userAuth/loadAuthLocal");
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


        mnx_logoutRole() {
            this.$store.dispatch("userProfile/logoutRoles");
        },

        mnx_setUserRole(role) {
            this.$store.dispatch("userProfile/setUserRole", { role: role });
        },

        mnx_loadRoleLocal(){
            this.$store.dispatch("userProfile/loadRoleLocal");
            
        }
    },
}