export const userAuthStore = {
    namespace: true,
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
        userAuthenticated(context) {
            context.commit('setAuth', { isAuthed: true })
        },
        userUnauthenticated(context) {
            context.commit('setAuth', { isAuthed: false })
        },
    },
    getters: {
        isUserAuthenticated(state) {
            return state.isUserAuthenticated;
        }
    }
}
