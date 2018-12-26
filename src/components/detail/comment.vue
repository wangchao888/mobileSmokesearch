<template  lang="html">
  <section class="content">
    <h1 class="wy_evaluate"><i class="icon iconfont" style="padding-right: 5px">&#xe61e;</i>最新评论</h1>
    <ul class="comment_cont">
      <li>
        <div class="comment_left">
            <p></p>
        </div>
        <div class="comment_right">
            <p><span style="color:#0089EB">爱抽烟的老李</span><span style="float: right"><i class="icon iconfont" style="padding-right: 5px">&#xe60c;</i>254</span></p>
            <p>好像在烟悦里面 真龙不怎么活跃啊 作为广西人 真龙也抽过不少 真不觉得差 大家对真龙有什么看法？</p>
            <p>12月11日  12:12</p>
        </div>
      </li>
      <li>
        <div class="comment_left">
          <p></p>
        </div>
        <div class="comment_right">
          <p><span style="color:#0089EB">爱抽烟的老李</span><span style="float: right"><i class="icon iconfont" style="padding-right: 5px">&#xe60c;</i>254</span></p>
          <p>好像在烟悦里面 真龙不怎么活跃啊 作为广西人 真龙也抽过不少 真不觉得差 大家对真龙有什么看法？</p>
          <p>12月11日  12:12</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<<script>
  export default {

  }
</script>

<style lang="less" scoped>
  @import "../../assets/fz.less";
  @import '../../assets/css/style.css';
  .content {
    margin-top: 10px;
    padding:3vw;
  }
  .comment_cont{
    width:100%
  }
  .wy_evaluate{
    border-bottom:1px solid #ccc;
    height:30px;
    margin-bottom:20px
  }
  li {
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    margin-top:20px
}
  .comment_left{
    -ms-flex: 2;
    -webkit-box-flex: 2;
    flex: 2;
  }
  .comment_left p{
    width:45px;
    height:45px;
    border-radius: 50%;
    background: #f00;
    margin-top: -58px;
  }
  .comment_right{
    -ms-flex: 20;
    -webkit-box-flex: 20;
    flex: 20;
    height: 100%;
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column wrap;
    flex-flow: column wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-left: 6vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .comment_right p{
    line-height:25px
  }
</style>
