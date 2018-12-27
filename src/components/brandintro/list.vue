<template lang="html">
  <div class="wrap">
    <ul class="something">
      <li style="height:auto;" class="biaoti">企业简介</li>
      <li class="cont">
        <div class="something_left"><img src="../../assets/7_img.jpg"/> </div>
        <div class="something_right">
          <p>河北中烟工业有限责任公司，成立于2003年6月12日，隶属国家烟草专卖局（中国烟草总公司）。下辖张家口卷烟厂有限责任公司和河北白沙烟草有限责任公司（下辖河北白沙烟草有限责任...</p>
          <a href="#">详细介绍》</a>
        </div>
      </li>
    </ul>
    <ul class="something">
      <li style="height:auto;" class="biaoti">企业要闻</li>
      <div class="news">
        <p>河北中烟石家庄卷烟厂举办建厂70周年活动</p>
      </div>
    </ul>
    <ul class="something">
      <li style="height:auto;" class="biaoti">旗下产品</li>
      <li v-for="(k,i) in list":key='k.id' style="width:25%;float:left;" >
        <div class="ppcp" >
          <img v-lazy="k.imgPath" style="width:100%">
        </div>
      </li>
      <li style="clear:both;height:0 !important;"></li>
    </ul>
    <ul class="something">
      <li style="height:auto;" class="biaoti">下属企业</li>
      <div class="news">
        <p>河北白沙烟草有限责任公司</p>
      </div>
    </ul>
  </div>
</template>
<script>
import { Lazyload } from 'mint-ui';
import {query} from '../../api/companyintro/query.js';//模拟数据
  export default {
    data() {
      return {
        list:[]
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
  @import "../../assets/fz.less";
  .wrap {
    width: 100%;
    .something {
      width: 100%;
      background-color: #fff;
      > li {
        display: -ms-flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;

        position: relative;
        height: 26vw;
          img {
            display: block;
            width: 100%;
            height: 100%;
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
  .ppcp{
    margin: 10px;
  }
  .biaoti{
    border-bottom:1px solid #F5F5F5;
    padding:2vw;
  }
  .cont{
    padding:4vw 2vw;
  }
  .something_left{
    -ms-flex: 3;
    -webkit-box-flex: 3;
    flex: 3;
  }
  .something_right{
    -ms-flex: 5;
    -webkit-box-flex: 5;
    flex: 5;
    font-size:12px;
    padding-left: 3vw;
    text-indent: 2em;
  }
  .something_right a{
    float: right;
  }
  .news{
    padding:4vw 2vw;
    font-size: 12px;
  }
</style>
