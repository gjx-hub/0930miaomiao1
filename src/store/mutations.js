export default {
    increment(state) {
        state.count++
    },
    changeMsg(state, payload) {
        state.message = payload.msg;
    }
}