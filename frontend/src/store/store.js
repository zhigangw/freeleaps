import { createStore } from 'vuex';

export const store = createStore({
    state() {
        return {
            counter: 1
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        decrement(state) {
            state.counter = state.counter - 1;
        }
    }
})