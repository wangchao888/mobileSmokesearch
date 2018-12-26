<template lang="html">
  <!-- gotoRouter:点击后路由跳转到与id名相同的route.name所对应的路径 -->
  <footer class="footer" @click.stop='gotoRouter'>
    <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="首页">
      <i class="icon iconfont">&#xe65f;</i>
        首页
    </mt-tab-item>
    <mt-tab-item id="分类页">
      <i class="icon iconfont">&#xe7f9;</i>
      分类
    </mt-tab-item>
    <mt-tab-item id="导购页">
      <i class="icon iconfont">&#xe7b1;</i>
      导购
    </mt-tab-item>
    <mt-tab-item id="用户页">
      <i class="icon iconfont">&#xe625;</i>
      我的
    </mt-tab-item>
  </mt-tabbar>
  </footer>
</template>

<script>
  export default {
    methods: {
      gotoRouter() {
        this.$router.push({
          name: this.selected
        })
      }
    },
    data() {
      return {
        //对应mt-tab-item 的id值
        selected: ''
      }
    },
    mounted() {

      //获取当前路由名称，根据该名称给当前footer添加is-selected
      let Rname = this.$route.name;
      switch (Rname) {
        case '首页':
          this.selected = '首页';
          break;

        case '分类页':
          this.selected = '分类页';
          break;

        case '导购页':
          this.selected = '导购页';
          break;

        case '用户页':
          this.selected = '用户页';
          break;
      }
    }

  }
</script>

<style lang="less" scoped>
  @import '../assets/fz.less';
  @import '../assets/css/style.css';
i{
  display: block;
  font-size: 23px;
  padding-bottom: 8px;
}
  .footer .mint-tabbar .is-selected{
    color: #3B58B2 !important;
  }
.mint-tab-item-label:hover {
  color:#333;

}
  .footer {


    .mint-tabbar {
      background-color: #fff;
      background-image: none;
      box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, .13);
      -webkit-box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, .13);
      .is-selected {
        color: @cl;
        background-color: #fff;
        i {
          &::before {
            color: @cl;
          }
        }
      }
      i {
        .fz(font-size, 42);
      }
    }
  }
</style>
