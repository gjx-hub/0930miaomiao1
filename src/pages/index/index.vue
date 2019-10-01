<template>
  <div>
    <!-- tab渲染在这 -->
    <tab></tab>
    <!-- 子路由渲染在这 -->
    <router-view></router-view>
  </div>
</template>
<script>
import tab from "@/components/index/Tab.vue"
export default {
  components:{
    tab
  }
};
</script>