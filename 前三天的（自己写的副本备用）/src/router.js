//引入路由
import VueRouter from 'vue-router'


// 把cinema和index页面引入
import cinema from './pages/cinema/cinema.vue'
import index from './pages/index/index.vue'

//引入电影里的四个组件
// import citySelected from '@/components/index/CitySelected.vue'
// import hotPlayMovie from '@/components/index/HotPlayMovie.vue'
// import search from '@/components/index/Search.vue'
// import willMovie from '@/components/index/WillMovie.vue'
import {
    citySelected,
    search,
    willMovie,
    hotPlayMovie
} from '@/components/index/index'    //写1个index也行

// 路由创建实例
const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: index,
            meta: {
                title:'电影'
            },
            children:[
                {
                    path:'',
                    redirect:'hot-play-movie'
                },
                {
                    path:'city',
                    component:citySelected,
                    meta:{
                        title:'城市选择'
                    }
                },
                {
                    path:'search',
                    component:search,
                    meta:{
                        title:'城市选择'
                    }
                },
                {
                    path:'will-movie',
                    component:willMovie,
                    meta:{
                        title:'城市选择'
                    }
                },
                {
                    path:'hot-play-movie',
                    component:hotPlayMovie,
                    meta:{
                        title:'城市选择'
                    }
                },
            ]
        },
        {
            path: '/cinema',
            component: cinema,
            meta: {
                title:'影院'
            }
        },
    ]
})

export default router