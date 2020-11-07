const userRoleEnum = Object.freeze({
    NONE: 0,
    SELLER: 1,
    BUYER: 2,
});

const userProfileStore = {
    namespaced: true,
    state() {
        return {
            role: userRoleEnum.NONE
        }
    },
    mutations: {
        setRole(state, payload) {
            state.role = payload.role;
        },
    },
    actions: {
        useBuyerRole(context) {
            context.commit('setRole', { role: userRoleEnum.BUYER })
        },
        useSellerRole(context) {
            context.commit('setRole', { role: userRoleEnum.BUYER })
        },
    },
    getters: {
        userRole(state) {
            return state.role;
        }
    }
};

export { userProfileStore, userRoleEnum };
