<template lang="html">
  <div class="wrap">
    <ul class="something">
        <li v-for="(k,i) in list">
            <div class="something-middle">
              <img :src="k.imgPath">
            </div>
            <div class="something-right">
              <p>{{k.title}}</p>
              <p style="color:rgb(199, 108, 28)"></p>
              <p>售价：{{k.price}}元</p>
             <div class="something-right-bottom" @click="toCompare(k,i)">
                <span style="color:#3F51B5;">添加对比</span>
            </div>
            </div>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    toCompare (k,i) {
      this.$store.state.indexes.selectedList = [];
      this.$store.state.indexes.selectedList.push(k);
      this.$router.replace({
            path: 'contrast'//修改成功自动跳转
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
.wrap {
  width: 100%;
  .something {
    width: 100%;
    background-color: #EFEFF4;
    > li {
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 4vw 2vw;
      position: relative;
      height: 26vw;
      .bd();
      .something-left {
        -ms-flex: 2;
        -webkit-box-flex: 2;
        flex: 2;

        label {
          float: left;
          background: url("../../assets/car/images/t.svg") no-repeat center
            center/50% 50%;
          input {
            height: 14vw;
            width: 14vw;
            opacity: 0;
            filter: alpha(opacity=0);
          }
        }
        .false {
          background: url("../../assets/car/images/f.svg") no-repeat center
            center / 50% 50% !important;
        }
      }
      .something-middle {
        -ms-flex: 3;
        -webkit-box-flex: 3;
        flex: 3;
        height: 26vw;
        padding-left: 2vw;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .something-right {
        -ms-flex: 7;
        -webkit-box-flex: 7;
        flex: 7;
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
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          .fz(font-size,26);
        }
        p:last-of-type {
          .fz(font-size,22);
          color: rgb(168, 168, 168);
        }
        .something-right-bottom {
          > div {
            display: -ms-flex;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            input {
              width: 6vw;
              text-align: center;
            }

            span {
              height: 7vw;
              line-height: 7vw;
              width: 8vw;
              display: inline-block;
              border: 0.2vw solid #f1f1f1;
              border-radius: 1vw;
              text-align: center;
              font-size: 20px;
              cursor: pointer;
            }
          }
          > span {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 23vw;
            height: 13vw;
            text-align: center;
            font-size: 14px;
            line-height: 13vw;
            // background: url("../../assets/car/images/laji.svg") no-repeat
            //   center/50%;
          }
        }
      }
    }
  }
  label,
  span {
    &:active {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
}
</style>
