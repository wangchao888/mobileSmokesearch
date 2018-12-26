<template lang="html">
  <div class="wrap">
    <mt-header class="header backgroundheader"  title="活动展示">
      <router-link :to="{name:'首页'}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="active">
      <img src="../assets/wuliu.jpg"/>
      <h1>活动介绍</h1>
      <p>为深入学习宣传贯彻习近平新时代中国特色社会主义思想和党的十九大精神，认真贯彻落实烟草行业新闻舆论工作要求，不断提高视频宣传工作水平，生动艺术地展现行业改革发展成效和干部职工良好精神面貌，讲好烟草故事、弘扬行业精神、汇聚发展正能量，2018年4月至9月面向全行业开展“爱我中华”“金叶情怀” 第三届烟草行业微视频评选活动。</p>
      <h1>评选方式</h1>
      <p>本次评选将严格按照“公正、公平、公开”的原则。评委会对参评作品进行初选，入选作品在本报新媒体平台予以展播，网友对展播作品进行网络投票，评委会对展播作品进行打分，根据网络投票成绩（占20%）、专家评审成绩（占60%）和大众评审成绩（占20%）计算总成绩，按照成绩排序评出微电影、短视频各奖项。 根据网络投票数排名确定网络人气奖。根据行业各直属单位参评及获奖作品数量情况，评出组织奖。根据专家评审评分确定最佳编剧奖（微电影类）、最佳创意奖（短视频类）。</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "activity"
    }
</script>

<style scoped>
  .backgroundheader{
    background-color:#fff !important;
    color:#112B40 !important;
  }
  img{
    width:100%;
    display: block;
  }
  .active{
    padding: 10px;
  }
  .active h1{
    color:#1789EB;
    font-size: 16px;
    margin: 15px 0px;
  }
  .active p{
    font-size: 13px;
    line-height: 23px;
  }
</style>
