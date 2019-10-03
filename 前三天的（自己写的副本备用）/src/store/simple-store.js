const store = {
    state: {
        message: '石家庄'
    },
    changeMessage(newMessage) {
        console.log('message从' + this.state.message + '变为' + newMessage)
        this.state.message = newMessage;
    }
}

export default store;