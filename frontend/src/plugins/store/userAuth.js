const userAuthStore = {
    namespaced: true,
    state() {
        return {
            isUserAuthenticated: false
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isUserAuthenticated = payload.isAuthed;
        },
    },
    actions: {
        authenticateUser(context) {
            context.commit('setAuth', { isAuthed: true })
        },
        unauthenticateUser(context) {
            context.commit('setAuth', { isAuthed: false })
        },
    },
    getters: {
        isUserAuthenticated(state) {
            return state.isUserAuthenticated;
        }
    }
};

export { userAuthStore };
