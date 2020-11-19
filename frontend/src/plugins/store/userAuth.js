const userAuthStore = {
    namespaced: true,
    state() {
        return {
            access_token: null,
            expiresIn:null,
            identity:null,

        }
    },
    mutations: {
        setAuth(state, payload) {
            state.access_token = payload.jwt.access_token;
            state.expiresIn = payload.jwt.expiresIn;
            state.userId = payload.jwt.userId;

        },
        clearAuth(state){
            state.access_token= null;
            state.expiresIn =null;
            state.userId = null;

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
            return state.access_token /*state.expiresIn*/ ;
        }
    }
};

export { userAuthStore };
