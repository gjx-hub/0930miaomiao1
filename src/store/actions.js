export default {
    changeMsg123(context, params) {
        setTimeout(() => {
            context.commit('changeMsg', params)
        }, 1000);
    },
    changeCount(context) {

    }
}