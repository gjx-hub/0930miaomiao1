<template>
  <div>
    <!-- 城市 -->

    <mt-index-list>
      <!-- 热门城市列表 -->
      <div class="hot-city">
        <p class="hot-city-title">热门城市</p>
        <!-- <p class="hot-city-title" @click="changeMsg">{{message123}}</p> -->
        <ul class="hot-city-list">
          <li @click='changeCity(city)' v-for="city in hotCities" :key="'hot-city'+city.id" >
            <p>{{city.nm}}</p>
          </li>
        </ul>
      </div>
      
      <!-- A-Z城市列表 -->
      <!-- <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>-->
      <!-- 字母A-Z -->
      <mt-index-section v-for="key in Object.keys(cityObj).sort()" :index="key" :key="key">
        <!-- 字母A-Z里具体的值 -->
        <div  @click='changeCity(city)' v-for="city in cityObj[key]" :key="'list'+city.id">
          <mt-cell :title="city.nm"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import { getCityList } from "@/services/city";
// import store from "@/store/simple-store";??????

export default {
  data() {
    return {
      cities: []
    };
  },
  methods: {
    changeCity(city){
      this.$store.commit({
        type:'changeCity',
        city
      })
    }
  },
  computed: {
    hotCities() {
      return this.cities.filter(city => {
        return city.isHot === 1;
      });
    },
    cityObj() {
      const cityObj = {};
      this.cities.forEach(item => {
        let firstChar = item.py.charAt(0).toUpperCase();
        if (cityObj[firstChar]) {
          cityObj[firstChar].push(item);
        } else {
          cityObj[firstChar] = [item];
        }
      });
      console.log(Object.keys(cityObj).sort()); //刚开始的时候还没有请求到数据,所以第一次是[],然后请求到数据后vue检测到数据变更之后会在执行computed的方法,所以打印两次。
      //因为请求是异步的，它过一会才会拿到数据
      console.log("1111111111111");
      console.log(Object);
      return cityObj;
    }
  },

  created() {
    //对接口的调用进行封装  ↓5
    // this.axios.get("/api/cityList").then(res=>{
    //     debugger
    // })
    getCityList().then(res => {
      this.cities = res.data.cities;
    });
  }
};
</script>
<style lang="less" scoped>
.hot-city {
    // 热门城市列表
  .hot-city-list {
    background-color: antiquewhite;
    display: flex; //flex默认不换行
    flex-wrap: wrap;
    li {
      width: 33%;
      p {
        text-align: center;
        border: 1px solid #ccc;
        padding: 6px;
        width: 70%;
        margin: 10px;
      }
    }
  }
}
</style>