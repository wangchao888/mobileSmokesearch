<template lang="html">
    <div class="wrap">
      <mt-header class="header"  title="企业简介">
        <router-link to="" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
</template>


<style lang="less" scoped>
@import '../../assets/fz.less';
@import '../../assets/css/style.css';
header {
  background-color:#fff;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0;
  z-index:1000;
  color: #000 !important;
  padding: 0 10px;
}
.brandlogo{
  background-color: #112B40;
  color: #FFFFFF;
  text-align: center;
  height:45vw;
}
.brandname{
  font-size:18px;
  margin-top: 15px;
}
  .brandintro{
    font-size: 12px;
    line-height: 23px;
  }
.brandintro p{
  color:#000;
}
</style>


<script>
export default {

}
</script>
