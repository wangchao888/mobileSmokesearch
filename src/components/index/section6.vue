<template lang="html">
  <section class="section6">
    <h1 class="section6-title">
      Top15品牌排行榜
      </h1>
      <div class="container">
      <mt-navbar v-model="selected">
    <mt-tab-item id="1">销量</mt-tab-item>
    <mt-tab-item id="2">销售收入</mt-tab-item>
  </mt-navbar>
  <!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <table>
        <tr >
          <td>{{list[0].name}}</td>
          <td>{{list[1].name}}</td>
          <td>{{list[2].name}}</td>
        </tr>
        <tr >
          <td>{{list[3].name}}</td>
          <td>{{list[4].name}}</td>
          <td>{{list[5].name}}</td>
        </tr>
        <tr >
          <td>{{list[6].name}}</td>
          <td>{{list[7].name}}</td>
          <td>{{list[8].name}}</td>
        </tr>
        <tr >
          <td>{{list[9].name}}</td>
          <td>{{list[10].name}}</td>
          <td>{{list[11].name}}</td>
        </tr>
        <tr >
          <td>{{list[12].name}}</td>
          <td>{{list[13].name}}</td>
          <td>{{list[14].name}}</td>
        </tr>
    </table>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
    </mt-tab-container-item>
  </mt-tab-container>
    </div>
  </section>
</template>

<script>
  export default {
     data() {
      return {
        selected: '1'
      };
    },
    props: {
      list: {
        type: Array,
        default: function () {
          return ['1','2','3']
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/css/style.css';
  .section6 {
    width: 100%;
    padding-top:3vw !important;
    .section6-title {
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
   .container{
    padding: 0vw 3vw;
    background-color:#fff;
     table{
        width:100%;
        td{
          padding:8px;
        }
     }
    }
  }
</style>
