<template lang="html">
   <div class="wrap">
    <v-header/>
    <section class="view">
      <v-aside :datas="allData.aside"/>
      <router-view :datas="allData.aside"/>
    </section>
    <v-footer/>
  </div>
</template>

<script>
import Header from '@/components/category/header.vue'
import Aside from '@/components/category/aside.vue'
import Footer from '@/common/_footer.vue'
import {query} from '@/api/category/query.js';
export default {
  components: {
    'v-header': Header,
    'v-aside': Aside,
    'v-footer': Footer
  },
  data () {
    return {
      allData: {}
    }
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
.wrap {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
  .view {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  header h1[data-v-4c6d6ba1]{
    margin-right:0vw !important;
  }
}
</style>
