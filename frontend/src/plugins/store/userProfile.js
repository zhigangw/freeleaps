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
        logoutRoles(context) {
            context.commit('setRole', { role: userRoleEnum.NONE })
        },
        useBuyerRole(context) {
            context.commit('setRole', { role: userRoleEnum.BUYER })
        },
        useSellerRole(context) {
            context.commit('setRole', { role: userRoleEnum.SELLER })
        },
    },
    getters: {
        userRole(state) {
            return state.role;
        },
        userIsBuyer(state) {
            return state.role === userRoleEnum.BUYER;
        },
        userIsSeller(state) {
            return state.role === userRoleEnum.SELLER;
        },
    }
};

export { userProfileStore, userRoleEnum };
