import Vue from 'vue';
import app from './App.vue';

//引入路由     
import VueRouter from 'vue-router'    //虽然单独写了router.js，但是不要注释掉
// Vue.use('VueRouter')                  //写到了下边
import router from './router'

// 引入mint-ui
import MintUI from 'mint-ui'     //mint-ui的组件
import 'mint-ui/lib/style.css'   //mint-ui的样式 

// 引入字体图标
import './font/my-font/iconfont.css'

// 引入main.css
import './main.css'

//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入vuex
// import Vuex from 'vuex'
// Vue.use(Vuex)
import store from './store/store'




Vue.use(MintUI)

Vue.use(VueRouter)

Vue.use(VueAxios, axios)

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})


