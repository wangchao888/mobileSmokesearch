<template lang="html">
  <section class="section3">
    <h1 class="section3-title">
      品牌资讯
      <router-link :to="{name:'品牌资讯列表'}">
        <i class="icon iconfont" style="font-size: 23px">&#xe622;</i>
      </router-link>
    </h1>
    <ul class="section3-list">
      <li v-for="k in list" :key='k.id'>
        <router-link :to="{name:'分类页'}" class="section3-list-left">
          <img v-lazy="k.imgPath">
        </router-link>
        <div class="section3-list-right">
          <h4>{{k.title}}</h4>
          <p>Starts at {{k.price}}</p>
        </div>
      </li>
    </ul>
   <!--  <router-link :to="{name:'分类页'}" class="section3-banner">
      <img v-lazy="banner">
    </router-link> -->
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';
  export default {
    props: {
    banner: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/css/style.css';
  .section3 {
    .section3-title {
    .bt();
    background-color: #ffffff;
    text-align: left;
    padding: 4vw 3vw;
    .fz(font-size, 40);
    color: #333;
    position: relative;

    i {
      position: absolute;
      right: 6vw;
      top: 50%;
      .fz(font-size, 36);
      .fz(margin-top,-16);

      &::before {
        color: rgb(159, 159, 159);
      }
    }
  }
    width: 100%;
    padding-top:3vw !important;
    .pt();
    .section3-list {
      width: 100%;
      .bt();
      >li {
        display: -ms-flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 4vw 3vw 4vw 3vw;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        .section3-list-right {
          padding-top:0;
          padding-left: 2vw;
          width: 70%;
          h4 {
            .fz(font-size, 34);
            line-height: 4.8vw;
            margin-bottom: 3.2vw;
            letter-spacing: 0.42vw;
          }
          .time {
            .time-num {
              display: inline-block;
              text-align: center;
              padding: 1.6vw;
              color: #fff;
              border-radius: 0.5vw;
              background-color: #444;
              .fz(font-size, 26);
              letter-spacing: 0.3vw;
            }
            .time-col {
              color: #333;
              width: 2vw;
              display: inline-block;
              text-align: center;
              font-weight: 700;
              .fz(font-size, 30);
            }
          }

          .start {
            .fz(font-size, 30);
            padding-top: 4vw;
            letter-spacing: 0.3vw;
          }
        }

        .section3-list-left {
          width: 30%;
          display: block;
          padding-top: 0;
          position: relative;
          img {
            display: block;
            width: 100%;
            background-color: gold;
          }
          span {
            padding: .3vw 1.2vw;
            border-radius: 1vw;
            text-align: center;
            position: absolute;
            bottom: .4vw;
            right: .2vw;
            background-color: @cl;
            color: #fff;
            .fz(font-size,24);
          }
        }
      }
    }

    .section3-banner {
      display: block;
      width: 100%;
      .bd();
      img {
        display: block;
        width: 100%;
      }
    }
  }
</style>
