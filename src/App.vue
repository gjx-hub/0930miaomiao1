<template>
  <div>
    hello world
    <!-- <router-view></router-view> -->


    <!-- 顶部导航 -->
    <mt-header fixed title="喵喵电影"></mt-header>

    <!-- 底部导航 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="movie">
        <!-- <img slot="icon" src="../assets/100x100.png" /> -->
        <span slot="icon" class="iconfont icon-dianying"></span>
        电影
      </mt-tab-item>
      <mt-tab-item id="cinema">
        <!-- <img slot="icon" src="../assets/100x100.png" /> -->
        <span slot="icon" class="iconfont icon-yingyuana"></span>
        影院
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
    data(){
        return{
            selected:"movie"
        }
    },
    created(){
        if(this.$route.path=='/index'){
            this.selected='movie'
        }else if(this.$route.path=='/cinema'){
            this.selected='cinema'
        }
    },
    watch:{
        selected(newVal,oldVal){
            if(newVal=='movie' && this.$route.push!='/index'){
                this.$router.push({path:'/index'})
            }else if(newVal=='cinema' && this.$route.push!='/cinema'){
                this.$router.push({path:'/cinema'})
            }
        }
    }
};
</script>