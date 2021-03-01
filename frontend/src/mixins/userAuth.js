export default {
    methods: {
        mnx_userSignedin(authResposne, keepMeSignedin) {
            this.mnx_authenticatedUser(authResposne);
            this.mnx_setUserRole(authResposne.role);
            this.mnx_setKeepUserSignedIn(keepMeSignedin);
            this.mnx_navAfterSignedin();
        }
        
    },
}