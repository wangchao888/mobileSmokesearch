<template lang="html">
  <div class="detail">
    <v-header/>
    <v-swiper :list="allData.swiper"/>
    <v-chose/>
    <v-content/>
    <v-comment/>
    <!-- <v-baseline/> -->
   <!--  <v-footer/> -->
  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Swiper from '@/components/detail/swiper.vue'
import Chose from '@/components/detail/chose.vue'
import Content from '@/components/detail/content.vue'
import Comment from '@/components/detail/comment.vue'
import Footer from '@/components/detail/footer.vue'
import Baseline from '@/common/_baseline.vue'
import {query} from '@/api/detail/query.js';
  
export default {
    components: {
    'v-header': Header,
    'v-swiper':Swiper,
    'v-chose':Chose,
    'v-content':Content,
    'v-comment':Comment,
    'v-baseline':Baseline,
    'v-footer':Footer,
  },
  data() {
    return {
      allData: {
        contentImgSrc:[],
        swiper:[],
        view:{}
      }
    }
  },
  beforeCreate(){
    this.$store.dispatch('setDatas');
  },
  created () {
    const datas = {} 
    query(datas).then(data => {
      this.allData = data.data         
    });
  }
}
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
  padding-bottom: 14vw;
}
</style>
