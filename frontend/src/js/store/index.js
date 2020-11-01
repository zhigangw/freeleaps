import { createStore } from 'vuex';
import {userAuthStore} from  './userAuth';

const store = createStore({
    modules: {
        userAuthStore: userAuthStore
    },
});

export default store;