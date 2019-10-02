import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

// 实例化store对象
const store = new Vuex.Store({
    state:{
        count:0,
        message:'store的数据'
    },
    getters:{
        message123(state){
            return state.message + '123'
        }
    },
    mutations:{
        increment(state){
            state.count++
        },
        changeMsg(state,payload){
            debugger
            state.message = payload.msg
        }
    }
})

export default store 