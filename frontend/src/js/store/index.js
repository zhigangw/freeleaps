import { createStore } from 'vuex';
import { userAuthStore } from './userAuth';
import { userRoleEnum, userProfileStore } from './userProfile';

const store = createStore({
    modules: {
        userAuth: userAuthStore,
        userProfile: userProfileStore,
    },
});

export { store, userRoleEnum };