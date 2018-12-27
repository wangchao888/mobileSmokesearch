<template lang="html">
  <div class="service">
    <ul class="servicebar">
      <li style='width:60%' @click="toDestination"><i class="icon iconfont">&#xe600;</i><span>历下区影秀路智慧大厦</span></li>
      <li style='width:40%'>
        <div>
          <div style="float: left;">
            <div id="getweathertem"></div>
            <div id="getweather"></div>
          </div>
          <div style="float:right;padding: 6px;">
            <img id="getweatherPic" src="">
          </div>
        </div>
      </li>
    </ul>
    <ul class="servicebar">
      <li style='width:65%'>
        <div class="searchbox">
          <input/>
          <button>搜索</button>
          <div style="clear:both;"></div>
        </div>
      </li>
      <li style='width:35%' @click="toSao"><i class="icon iconfont">&#xe642;</i><span>扫一扫</span></li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery'
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
  },
  mounted:function(){
   $.ajax({
         type: "POST",//默认是GET
         url: "http://api.map.baidu.com/telematics/v3/weather", 
         dataType: "jsonp",
         data: {
            location: '济南', // 城市
            output: "json", // 格式 
            ak: "ohA7QHfg0BBrpiY4kyuIAAsD" // 百度地图ak
         },
         success: function (data) {
             var weatherData=data.results[0].weather_data[0]
             $('#getweathertem').html(weatherData.temperature)
             $('#getweatherPic').attr('src',weatherData.dayPictureUrl)
             $('#getweather').html(weatherData.weather)            
         } 
     })
  },
   methods: {
    toDestination () {
      this.$router.replace({
        path: 'map'//修改成功自动跳转
      })
    },
    toSao(){
      this.$router.replace({
        path: 'scanne'//修改成功自动跳转
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/css/style.css';
  .mint-searchbar{
         padding:0 !important;
         background-color: red;
       }
  .service {
     padding:0 10px;
     padding-top:13vw;
     background-color: #112b40;
     .mint-search{
       height: 15vw !important;
     }
     .servicebar{
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        justify-content: space-around;
        background-color: rgba(17, 43, 64, 1);
        li {
          background-color: rgba(17, 43, 64, 1);
          display: -webkit-flex;
          display: -ms-flex;
          display: flex;
          align-items: center;
          padding: 2vw 0;
          color:#fff;
          span {
            .fz(font-size,28);
            padding-left: 1vw;
          }
          i {
            .fz(font-size,36);
          }
          .searchbox{
            width:90%;
            button{
              float: left;
              width: 25%;
               height: 27px;
            }
            input{
              float: left;
              width: 75%;
              height: 27px;
            }
          }
        }
      }
    }
</style>
