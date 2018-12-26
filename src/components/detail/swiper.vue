<template lang="html">
    <div class="swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="k in list" :key="k.id">
           <img :src="k.imgSrc">
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
export default {
  // computed: {
  //   swiper () {
  //     return this.$store.state.detail.productDatas.swiper
  //   }
  // }
  props: {
      list:{
        type:Array,
        default:function(){
          return []
        }
      }
    },
}
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import '../../assets/css/style.css';

.swiper {
  width: 100%;
  position: relative;

  .mint-swipe {
    width: 100%;
    height: 100vw;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
