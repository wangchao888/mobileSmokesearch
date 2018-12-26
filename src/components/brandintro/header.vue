<template lang="html">
    <div class="wrap">
      <mt-header class="header backgroundheader">
        <router-link to="" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="brandlogo">
          <img src="../../assets/brandlogo.png" style="padding-top: 20px"/>
          <p class="brandname">真龙</p>
      </div>
      <div class="brandintro" style="padding: 10px">
        <h2>企业简介</h2>
        <p>
          真龙卷烟品牌是广西卷烟工业的主导品牌，创牌于2001年，是目前国内卷烟市场上唯一一个能够实现“高香气、低焦油、低危害”完美兼容的烤烟型卷烟品牌。自创牌以来，真龙卷烟以其烟味圆润细腻，醇和完美，和谐顺畅，余味悠长，独树一帜的风格，逐渐为广大消费者所喜爱，凭着高品质的内在质量、时尚的包装以及中华传统龙文化的蕴味，在激烈的市场竞争中迅速成长壮大，目前已畅销至全国31个省（自治区、直辖市）、217个地市级市场销售，成为了全行业成长性最好的卷烟品牌之一。“真龙”卷烟商标被国家工商行政管理总局认定为“中国驰名商标”。
        </p>
        <h2>品牌历史</h2>
        <p>
          真龙卷烟品牌是广西卷烟工业的主导品牌，创牌于2001年，是目前国内卷烟市场上唯一一个能够实现“高香气、低焦油、低危害”完美兼容的烤烟型卷烟品牌。自创牌以来，真龙卷烟以其烟味圆润细腻，醇和完美，和谐顺畅，余味悠长，独树一帜的风格，逐渐为广大消费者所喜爱，凭着高品质的内在质量、时尚的包装以及中华传统龙文化的蕴味，在激烈的市场竞争中迅速成长壮大，目前已畅销至全国31个省（自治区、直辖市）、217个地市级市场销售，成为了全行业成长性最好的卷烟品牌之一。“真龙”卷烟商标被国家工商行政管理总局认定为“中国驰名商标”。
        </p>
      </div>
    </div>
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
