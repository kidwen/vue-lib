import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    strict: debug,
    // plugins: debug ? [createLogger()] : [],
    state: {
        users: [{ id: 1, name: 'kidwen' }],
        maxNum: 30
    },
    getters: {
        userNum: (state) => {
            return state.users.length;
        },
        // 访问其他getter
        isOver: (state, getters) => {
            return state.maxNum - getters.userNum < 0;
        },
        getUserById: (state) => (id) => {
            return state.users.find(item => item.id === id);
        }
    },
    mutations: {},
    actions: {}
})

export default store;
