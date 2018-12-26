<template lang="html">
  <!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
  <div class="index">
    <v-header/>
    <v-search/>
    <v-swiper :swiperData="allData.swiper"/>
    <v-service/>
    <v-section1 :list="allData.section1.list" :banner='allData.section1.banner'/>
    <!-- <v-section2 :list="allData.section2.list" :banner='allData.section2.banner'/>  -->
    <v-section3 :list="allData.section3.list"/>
    <v-section6 :list="allData.section6.list"/>
    <v-section4 :list="allData.section4.list" :banner='allData.section4.banner'/>
    <v-section5 :list="allData.section4.list" :banner='allData.section4.banner'/>
    <v-section7 :list="allData.section6.list"/>
    <!-- <v-baseline/> -->
    <v-footer/>
  </div>
</template>

<script>
import Header from '@/components/index/header.vue'
import Search from '@/components/index/search.vue'
import Swiper from '@/components/index/swiper.vue'
import Service from '@/components/index/service.vue'
import Section1 from '@/components/index/section1.vue'
import Section2 from '@/components/index/section2.vue'
import Section3 from '@/components/index/section3.vue'
import Section6 from '@/components/index/section6.vue'
import Section4 from '@/components/index/section4.vue'
import Section5 from '@/components/index/section5.vue'
import Section7 from '@/components/index/section7.vue'
import Baseline from '@/common/_baseline.vue'
import Footer from '@/common/_footer.vue'
import {query} from '@/api/index/query.js';
export default {
  components: {
    'v-header': Header,
    'v-search':Search,
    'v-swiper': Swiper,
    'v-service': Service,
    'v-section1': Section1,
    'v-section2': Section2,
    'v-section3': Section3,
    'v-section4': Section4,
    'v-section5': Section5,
    'v-section6': Section6,
    'v-section7': Section7,
    'v-baseline': Baseline,
    'v-footer': Footer
  },
  data() {
    return {
      allData: {
        section1:{},
        section2:{},
        section3:{},
        section4:{},
        section6:{},
        swiper:[]
      },
      loading: true
    }
  },
  beforeCreate() {
    const datas = {}
    query(datas).then(data => {
      this.allData = data.data[0]
    });
  }
}
</script>

<style lang="less" scoped>
.index {
    width: 100%;
    padding-bottom: 14vw;
    background-color: #F8FCFF;
}
</style>
