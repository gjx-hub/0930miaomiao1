import Vue from 'vue';
import app from './App.vue';

//引入路由     因为单独写了router.js，所以注掉了
// import VueRouter from 'vue-router' 
// Vue.use('VueRouter')
import router from './router'

// 引入mint-ui
import MintUI from 'mint-ui'     //mint-ui的组件
import 'mint-ui/lib/style.css'   //mint-ui的样式
Vue.use(MintUI)

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})


