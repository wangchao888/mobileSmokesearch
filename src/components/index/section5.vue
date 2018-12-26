<template lang="html">
  <section class="section5">
    <h2 class="section5-title">
      烟标鉴赏
     <router-link :to="{name:'烟标鉴赏'}">
        <i class="icon iconfont" style="font-size: 23px">&#xe622;</i>
      </router-link>
    </h2>
    <ul class="section5-list">
      <li v-for="k in list" :key='k.id'>
        <router-link :to="{name:'详情页'}">
          <img v-lazy="k.imgPath">
          <p>{{k.intro}}</p>
        </router-link>
        <h3>{{k.title}}</h3>
        <span>$ {{k.price}}</span>
      </li>

    </ul>
    <!-- <router-link :to="{name:'分类页'}" class="section5-banner">
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
@import "../../assets/fz.less";
@import '../../assets/css/style.css';
.section5 {
  width: 100%;
  overflow: hidden;
  padding-top:3vw !important;
  .pt();
  .section5-title {
    .bt();
    text-align: left;
    .fz(font-size, 40);
    padding: 4vw 3vw;
    position: relative;
    background-color: #ffffff;
    i {
      position: absolute;
      right: 6vw;
      top: 50%;
      .fz(font-size, 36);
      .fz(margin-top,-16);
      &::before {
        color: #9f9f9f;
      }
    }
  }

  .section5-list {
    width: 100%;
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    overflow: hidden;
    li {
      width: 50%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 3vw;
      > a {
        display: block;
        width: 100%;
        position: relative;
        img {
          display: block;
          width: 100%;
        }
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: gold;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 1.2vw 2vw;
        }
      }

      > h3 {
        padding-top: 3vw;
        .fz(font-size,40);
      }
      > span {
        display: inline-block;
        padding-bottom: 3vw;
        color: #b4282d;
      }
    }
  }

  .section5-banner {
    width: 100%;
    display: block;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
