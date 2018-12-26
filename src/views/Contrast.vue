<template lang="html">
    <div class="car">
      <!-- slot分发内容 让子组件混合父组件的内容 -->
      <v-header title="烟品对比"/>
      <!-- 根据购物车是否有商品加载不同的组件 -->
      <v-something :list="allData.list"/>
      <mt-button style="position: fixed;width: 100%;bottom: 0" @click.native="toCompare">开始对比</mt-button>
    </div>
</template>

<script>
import Header from '@/common/_mheader.vue'
import Something from '@/components/contrast/list.vue'
import {query} from '@/api/contrast/query.js';
  export default {   
    components: {
    'v-header': Header,
    'v-something':Something
  },
  data() {
    return {
      allData: {
        list:[]
        }
      }     
    },
  methods: {
    toCompare () {
      this.$router.replace({
            path: 'compare'//修改成功自动跳转
      })
    }
  },
  beforeCreate() {
    const datas = {} 
      query(datas).then(data => {
      this.allData = data.data        
    });
  },
}
</script>

<style lang="less" scoped>
.car {
  width: 100%;
  background-color: #EFEFF4;
  .mt_header{
     background-color: #FFFFFF;
  }
  .add{
     background-color: #FFFFFF;
     color:#3F65B5;
     margin-top: 1px;
  }
  .title{
      color:#101010;
  }
  .footer.mint-header.is-fixed{
     background-color: #0089EB;
     color:#FFFFFF;
     bottom: 0;
  }
  .mint-header.is-fixed{
      top: auto !important;
  }
  .mint-button--default{
    background-color: #96CEF7;
    color: #fff;
    border-radius:0 !important;
  }
}
</style>
