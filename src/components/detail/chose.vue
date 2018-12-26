<template lang="html">
  <section class="chose" v-if="view">
    <div class="chose-view">
      <h1 class="chose-view-title">真龙（红经典）</h1>
      <p style="margin-top:2vw">12.0元/盒</p>
    </div>
  <!-- 添加空函数 解决Safari浏览器 :active无效 -->
    <div class="chose-mychosed" ontouchstart="">
      <div class="colChose">
          <ul class="introduce">
            <li>卷烟类型：烤烟型</li>
            <li>单条支数：200支</li>
            <li>焦油量：10mg</li>
            <li>单条零售指导价：120元</li>
            <li>烟气烟碱量：1.0mg</li>
            <li>盒码：6901028016469</li>
            <li>一氧化碳含量：11mg</li>
            <li>条码：6901028016469</li>
            <li>烟的长度：84mm</li>
            <li>是否细支：否</li>
            <li>包装形式：条盒硬盒</li>
            <li>是否爆珠：否</li>
            <li>单盒支数：20支</li>
            <li>滤嘴类型：醋纤</li>
            <li>单盒零售指导价：12元</li>
            <li>产品状态：已上市</li>
          </ul>
      </div>

    </div>
  </section>


</template>

<script>
import {
  MessageBox
} from 'mint-ui';
import {
  mapState
} from 'vuex'


export default {

  computed: mapState({

    view: state => state.detail.productDatas.view,
    colSelected: state => state.detail.colSelected,
    sizeSelected: state => state.detail.sizeSelected,
    // 返回当前选择颜色的值(innerText)
    colText() {
      return this.view.chose[this.colSelected].col
    },
    // 返回当前选择规格的值(innerText)
    sizeText() {
      return this.view.chose[this.sizeSelected].size
    }

  }),
  methods: {

    //点击后把i赋值给colSelected,再通过判断决定是否添加选中样式 (active)
    colChose(i) {
      this.$store.commit('CHANGE_COL_SELECTED', i);
    },
    sizeChose(i) {
      this.$store.commit('CHANGE_SIZE_SELECTED', i);
    }

  }
}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
.chose {
    padding: 3vw;

    .chose-view {
        > h1 {
            .fz(font-size,36);
            color: #2c3e50;
            > span {
                color: rgb(238, 113, 80);
            }
        }
        > span {
            line-height: 10vw;
            color: @cl;
            .fz(font-size,34);
            font-weight: 600;
        }

    }

    .chose-mychosed {

        background-color: #fff;
        > div {
            padding-top: 10px;
            display: -ms-flex;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex
        }
    }
  .chose-view-title{
    color:#000
  }
  .introduce{
    width:100%
  }
.introduce li{
  float:left;
  color:#A4A4A4;
  width:50%;
  font-size:12px;
  line-height:25px
}
    .footer {
        width: 100%;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        height: 14vw;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #ffffff;
        -moz-user-select: none;
        -webkit-user-select: none;
        .bt();
        .footer-addcar,
        .footer-gocar,
        .footer-index {
            text-align: center;
        }

        .footer-index {
            -webkit-flex: 3;
            -ms-flex: 3;
            flex: 3;
            line-height: 14vw;
            height: 14vw;
            padding-top: 1.5vw;
            border-right-color: #f7f7f7;
            border-right-style: solid;
            .fz(border-right-width,1);

            i {
                .fz(font-size,45);
            }
            &:active {
                background-color: #f1f1f1;
            }
        }

        .footer-gocar {
            position: relative;
            -webkit-flex: 3;
            -ms-flex: 3;
            flex: 3;
            height: 14vw;
            line-height: 14vw;
            padding-top: 1.6vw;
            span {
                height: 5.5vw;
                width: 5.5vw;
                line-height: 5.5vw;
                position: absolute;
                top: 0.5vw;
                right: 5.5vw;
                background-color: @cl;
                border-radius: 50%;
                color: #fff;
                .fz(font-size,24);
            }
            &:active {
                background-color: #f1f1f1;
            }
            i {
                .fz(font-size,48);
            }
        }

        .footer-addcar {
            -webkit-flex: 6;
            -ms-flex: 6;
            flex: 6;
            line-height: 14vw;
            height: 14vw;

            color: #fff;
            background-color: @cl;
            letter-spacing: 0.2vw;
            &:active {
                background-color: #ff7d00;
            }
        }
    }
}
</style>
