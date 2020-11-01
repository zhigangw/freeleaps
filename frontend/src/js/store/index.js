import { createStore } from 'vuex';
import userAuthStore from  './userAuth';

const store = createStore({
    modules: {
        userAuthStore,
    },
});

export default store;