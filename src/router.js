//引入路由
import VueRouter from 'vue-router' 
Vue.use('VueRouter')

// 把cinema和index页面引入
import cinema from './pages/cinema/cinema.vue'
import index from './pages/index/index.vue'

// 路由创建实例
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index},
        {path:'/cinema',component:cinema},
    ]
})

export default router