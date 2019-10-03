export default {
    // namespaced直接写在模块的对象里的属性，true代表开启命名空间
    namespaced: true,
    state: {
        aMsg: '模块a的msg'
    },
    mutations: {
        changeAMsg(state, payload) {
            state.aMsg = payload.msg;
        }
    }
}
