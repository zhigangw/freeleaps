const userAuthStore = {
    namespaced: true,
    state() {
        return {
            access_token: null,
            expiresIn: null,
            identity: null,

        }
    },
    mutations: {
        setAuth(state, payload) {
            state.access_token = payload.jwt.access_token;
            state.expiresIn = payload.jwt.expiresIn;
            state.identity = payload.jwt.identity;
        },
        clearAuth(state) {
            state.access_token = null;
            state.expiresIn = null;
            state.identity = null;

        }
    },
    actions: {
        authenticateUser(context, payload) {
            context.commit('setAuth', payload)
        },
        unauthenticateUser(context) {
            context.commit('clearAuth')
        },
    },
    getters: {
        isUserAuthenticated(state) {
            return state.access_token != null /*state.expiresIn*/;
        },
        userAuthToken(state){
            return state.access_token;
        },
        userIdentity(state){
            return state.identity;
        }
    }
};

export { userAuthStore };
