import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations'
import actions from './actions'

import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

Vue.use(Vuex)
// 实例化store对象

const store = new Vuex.Store({
    state: {
        count: 0,
        message: 'store的数据'
    },
    getters: {
        message123(state) {
            return state.message + '123'
        }
    },
    mutations,
    actions,
    modules: {
        a: moduleA,
        b: moduleB
    }
})

export default store