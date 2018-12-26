<template>
    <div class="back" @click="$router.go(-1)">
      <i class="icon iconfont">&#xe67c;</i>
    </div>
</template>

<style lang="less" scoped>
@import "../assets/fz.less";
@import '../assets/css/style.css';
i{
  color:#fff;
  display: inline-block;
  line-height: 7vw;
}
  .back {
    width: 7vw;
    height: 7vw;
    position: absolute;
    left: 4vw;
    top: 2vw;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    text-align: center;
    z-index:9999;
    span {
      display: inline-block;
      line-height: 7vw;
      .fz(font-size,40);
      transform: rotate(-180deg);
      &::before {
        color: #fff;
      }
    }

    &:active {
      transform: scale(1.3);
    }
  }
</style>


<script>
export default {

}
</script>
