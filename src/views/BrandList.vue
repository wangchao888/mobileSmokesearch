<template lang="html">
  <section class="section">
    <mt-header class="header"  title="品牌资讯">
      <router-link :to="{name:'首页'}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <ul class="section-list">
      <li v-for="k in list" :key='k.id'>
        <router-link :to="{name:'分类页'}" class="section-list-left">
          <img v-lazy="k.imgPath">
        </router-link>
        <div class="section-list-right" @click="toDetails(k,i)">
          <h4>{{k.title}}</h4>
          <p>Starts at {{k.price}}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  import { Lazyload } from 'mint-ui';
  import {query} from '../api/brandlist/query.js';//模拟数据

  export default {
    data() {
      return {
        list:[]
      }
    },
    methods: {
    toDetails (k,i) {
      this.$store.state.brandlist.selectedList = k;
      this.$router.replace({
            path: 'branddetails'//修改成功自动跳转
      })
    }
   },
    created () {
			const datas = {} 
			query(datas).then(data => {
			this.list = data.data.list         
		 });
		}
  }
</script>

<style lang="less" scoped>
  @import '../assets/fz.less';
  @import '../assets/css/style.css';
  .header{
    background-color:#fff !important;
    color:#112B40 !important;
  }
  .section {
    /*padding-top:11vw;*/
    .section-list {
      width: 100%;
      >li {
        display: -ms-flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 4vw 3vw 4vw 3vw;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        .section-list-right {
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

        .section-list-left {
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
  }
</style>
