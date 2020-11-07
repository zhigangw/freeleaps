const userRoleEnum = Object.freeze({
    NONE: 0,
    SELLER: 1,
    BUYER: 2,
});

const userProfileStore = {
    namespace: true,
    identity() {
        return {
            role: userRoleEnum.NONE
        }
    },
    mutations: {
        setRole(identity, payload) {
            identity.role = payload.role;
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
        userRole(identity) {
            return identity.role;
        }
    }
};

export { userProfileStore, userRoleEnum };
