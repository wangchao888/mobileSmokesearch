<template lang="html">
  <div class="login">
    <v-header title=""/>
    <!-- <span id="qqLoginBtn"></span> -->
    <section>
      <img src="../assets/login/images/jyppcx_logo.png" style="margin:40px 0px;width:320px;height:130px"/>
      <mt-field
       label="账号"
        placeholder="请输入您的账号"
        type = "text"
        v-model = "account"
        :readonly = '!toggle'
        :disableClear = '!toggle'
        class="mt_field"
        ></mt-field>
      <mt-field
       label="密码"
       placeholder="请输入您的密码"
       type="password"
       v-model="password"
       :readonly='!toggle'
       :disableClear = '!toggle'
       class="mt_field"
        ></mt-field>
    </section>
    <section>
      <mt-button
     plain
     size="large"
     @click="login"
     class="mt_btn"
     v-if='toggle'>登录</mt-button>
    <mt-button
     plain
     size="large"
     @click="logout"
     class="mt_btn"
     v-else>退出登录</mt-button>
    </section>
    <section >
      <router-link to='/Register' class="rapid_registration">快速注册</router-link>
      <router-link to='/ForgetPwd' class="forget_password">忘记密码？</router-link>
    </section>
    <section style="padding-top:8rem;">
    <div class="line_box">
      <span class="line"></span>
      <span class="text">第三方登录</span>
      <span class="line"></span>
    </div>
    <div class="img_box">
      <img src="../assets/login/images/wx.png" style="width:30px;height:30px">
      <img src="../assets/login/images/qq.png" style="width:30px;height:30px">
    </div>
    </section>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import Header from '@/common/_mheader.vue'
// import QC from 'http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js'
export default {
  components: {
    'v-header': Header,
  },
  data(){
    return {
      account:'',
      password:'',
      toggle:!this.$store.state.login.token
    }
  },
  mounted(){
    // QC.Login({
    //                 //btnId：插入按钮的节点id，必选
    //                 btnId:"qqLoginBtn",
    //                 //用户需要确认的scope授权项，可选，默认all
    //                 scope:"all",
    //                 //按钮尺寸，可用值[A_XL| A_L| A_M| A_S|  B_M| B_S| C_S]，可选，默认B_S
    //                 size: "B_S"
    //             }, function(reqData, opts){//登录成功
    //                 //根据返回数据，更换按钮显示状态方法
    //                 console.log(reqData);//查看返回数据
    //                 QC.Login.getMe(function(openId, accessToken){//获取用户的openId
    //                     console.log('QQOPENID:'+openId);
    //                     thirdparty(null,null,reqData.figureurl_qq_2,reqData.nickname,1,openId);
    //                     QC.Login.signOut();//退出QQ登录调用事件
    //                 });
    //             }
    //         );
  },
  methods:{
    // 登录按钮
    login(){
      if(this.account!=="" && this.password!=="") {
        Toast('登录成功');
        this.toggle = false;
        this.$store.commit('CHANGE_TOKEN',1);
      }else {
        Toast('账号密码不能为空');
      }

      setTimeout(()=>{
        this.$router.replace({
          path: 'user'
        })
      },1000);
      // 登录成功
    },
   
    //退出登录按钮
    logout(){
      Toast('已退出登录');//退出登录成功,清除token
      this.$store.commit('CHANGE_TOKEN',0);
      this.toggle = true;
      this.account = '';
      this.password = '';
    }
  }
}

</script>

<style lang="less">
  .mint-cell-wrapper{
    /*background-image: none !important;*/
    background-position:bottom left !important;
    font-size:14px
  }
  .mint-cell:last-child{
    background-image: none !important;
  }
.login {
  .header{
    background-color:#fff;
    color:#112B40;
  }
  >section {
    padding:0 2rem;
    >img{
      width:100%;
      height:8rem;
      margin:4rem 0px;
    }
    .mt_btn{
      background-color:#112B40;
      color:#fff;
      font-size:14px;
      letter-spacing: 3px;
      margin-top:20px;
    }
    .rapid_registration,.forget_password{
      font-size:12px;
      padding:15px 0;
      color:#101010;
    }
    .rapid_registration{
      float:left;
    }
    .forget_password{
      float:right;
    }
    .line_box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size:12px;
      .line {
        height: 1px;
        flex-grow: 1;
        background-color: rgba(230, 230, 230, 1);
      }
      .text{
        padding:0 15px;
      }
    }
    .img_box{
      text-align: center;
      letter-spacing: 80px;
      img{
        width:45px;
        height:45px;
      }
    }
  }
}
</style>
