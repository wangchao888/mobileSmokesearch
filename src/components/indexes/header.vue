<template>
  <header>
      <mt-search placeholder="大家都在搜“软中华”"></mt-search>
  </header>
</template>


<style lang="less" scoped>
@import '../../assets/fz.less';
@import '../../assets/css/style.css';
header {
  background-color: rgba(17, 43, 64, 1);
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0;
  z-index:1000;
  color: #fff !important;
  .fz(font-size, 40)!important;
   z-index:1000;
  .mint-search{
    width:100% !important;
    height:auto !important;
  }
}
</style>


<script>
export default {

}
</script>
