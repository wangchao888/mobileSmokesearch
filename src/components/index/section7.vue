<template lang="html">
  <section class="section7">
    <h1 class="section7-title">
      全国卷烟工业企业
    </h1>
    <div class="container">
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
    </div>
  </section>
</template>

<script>
  export default {
     data() {
      return {

      };
    },
    props: {
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
  .section7 {
    width: 100%;
    padding-top:3vw !important;
    .section7-title {
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
