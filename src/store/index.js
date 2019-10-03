import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
// 实例化store对象

const store = new Vuex.Store({
    state: {
        selectedCity:{
            id:1,
            nm:'北京',
            py:'beijing',
            isHot:1
        }
    },
    getters: {
    },
    mutations,
    actions,
})

export default store