<template>
  <div>
    <!-- 城市 -->

    <mt-index-list>
        <!-- 热门城市列表 -->
        <div class="hot-city">
            <p class="hot-city-title">热门城市</p>
            <ul class="hot-city-list">
                <li v-for="city in hotCities" :key="'hot-city'+city.id">
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
      <mt-index-section v-for="key in Object.keys(cityObj).sort()" :index="key" :key="key">    <!-- 字母A-Z -->
        <mt-cell v-for="city in cityObj[key]" :title="city.nm" :key="'list'+city.id"></mt-cell>  <!-- 字母A-Z里具体的值 -->
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import { getCityList } from "@/services/city";
export default {
  data() {
    return {
      cities: []
    };
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
      console.log(Object.keys(cityObj).sort());
      console.log('1111111111111')
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
        this.cities = res.data.cities
    });
  }
};
</script>
<style lang="less" scoped>
.hot-city {
    .hot-city-list {
        background-color: antiquewhite;
        display: flex;   //flex默认不换行
        flex-wrap:wrap;
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