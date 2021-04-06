const userAuthStore = {
    namespaced: true,
    state() {
        return {
            access_token: null,
            expiresIn: null,
            identity: null,
            keepUserSignedin: null,
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.access_token = payload.jwt.access_token;
            state.expiresIn = payload.jwt.expiresIn;
            state.identity = payload.jwt.identity;

            localStorage.access_token = payload.jwt.access_token;
            localStorage.expiresIn = payload.jwt.expiresIn;
            localStorage.identity = payload.jwt.identity;
        },

        clearAuth(state) {
            state.access_token = null;
            state.expiresIn = null;
            state.identity = null;

            localStorage.removeItem("access_token");
            localStorage.removeItem("expiresIn = null");
            localStorage.removeItem("identity = null");
        },

        loadAuth(state) {
            if (localStorage.access_token) {
                state.access_token = localStorage.access_token;
            }

            if (localStorage.expiresIn) {
                state.expiresIn = localStorage.expiresIn;

            }

            if (localStorage.identity) {
                state.identity = localStorage.identity;
            }

            if (localStorage.keepUserSignedin) {
                state.keepUserSignedin = localStorage.keepUserSignedin;
            }
        },

        keepUserSignedin(state, payload) {
            state.keepUserSignedin = payload.keep;

            localStorage.keepUserSignedin = state.keepUserSignedin;
        }
    },
    actions: {
        authenticateUser(context, payload) {
            context.commit('setAuth', payload)
        },
        unauthenticateUser(context) {
            context.commit('clearAuth')
        },
        keepUserSignedin(context, keep) {
            context.commit('keepUserSignedin', keep)
        },
        loadAuthLocal(context) {
            context.commit('loadAuth')
        }
    },
    getters: {
        isUserAuthenticated(state) {
            return state.access_token != null /*state.expiresIn*/;
        },
        userAuthToken(state) {
            return state.access_token;
        },
        userIdentity(state){
            return state.identity;
        },
        keepUserSignedin(state) {
            return state.keepUserSignedin === true || state.keepUserSignedin == "true";
        }
    }
};

export { userAuthStore };
