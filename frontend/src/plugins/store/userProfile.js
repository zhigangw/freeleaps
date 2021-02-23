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
            state.role = (payload.role);
            localStorage.role = state.role;
        },
        loadRole(state) {
            if (localStorage.role) {
                state.role = Number(localStorage.role);
            }
        }
    },
    actions: {
        setUserRole(context, payload) {
            context.commit('setRole', payload)
        },
        logoutRoles(context) {
            context.commit('setRole', { role: userRoleEnum.NONE })
        },
        useBuyerRole(context) {
            context.commit('setRole', { role: userRoleEnum.ADMIN })
        },
        useSellerRole(context) {
            context.commit('setRole', { role: userRoleEnum.USER })
        },
        loadRoleLocal(context) {
            context.commit('loadRole')
        }
    },
    getters: {
        userRole(state) {
            return state.role;
        },
        userIsBuyer(state) {
            return state.role === userRoleEnum.ADMIN;
        },
        userIsSeller(state) {
            return state.role === userRoleEnum.USER;
        },
    }
};

export { userProfileStore, userRoleEnum };
