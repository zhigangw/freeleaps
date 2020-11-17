import { userRoleEnum } from "../../types/index"

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
        setUserRole(context, role){
            context.commit('setRole', { role: role })
        },
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
