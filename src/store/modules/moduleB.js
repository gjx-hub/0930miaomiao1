export default {
    state: {
        bMsg: '模块b的msg'
    },
    mutations: {
        changeBMsg(state, payload) {
            state.bMsg = payload.msg;
        }
    }
}