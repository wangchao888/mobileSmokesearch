<template lang="html">
  <section class="content">
    <div class="evaluate">
        <h1 class="wy_evaluate"><i class="icon iconfont" style="padding-right: 5px">&#xe755;</i>网友评价</h1>
        <div class="">
           <p>各项指标得分（已有321人参与评分）</p>
        </div>
        <div class="">
          <p>我的评分</p>
        </div>
    </div>
    <mt-button type="primary" size="large">提交</mt-button>
  </section>

</template>

<script>
export default {
  computed:{
    content(){
      return this.$store.state.detail.productDatas.contentImgSrc
    }
  }
}
</script>

<style lang="less" scoped>
  .content {
    margin-top: 10px;
    padding:3vw;
  }
  .wy_evaluate{
    border-bottom:1px solid #ccc;
    height:30px
  }
  .evaluate div{
    margin-top:15px;
    font-size:14px
  }
</style>
