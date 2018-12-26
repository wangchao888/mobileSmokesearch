<template lang="html">
  <div class="login">
    <v-header title="密码找回" />
    <section>
      <mt-field
        label="手机号"
        placeholder="请输入您的手机号"
        type = "tel"
        v-model = "phone"
        :readonly = '!toggle'
        :disableClear = '!toggle'
        class="mt_field"
      ></mt-field>
      <mt-field
        label="验证码"
        placeholder="验证码"
        type="number"
        v-model="number"
        :readonly='!toggle'
        :disableClear = '!toggle'
        class="mt_field"
      >获取验证码</mt-field>
      <mt-field
        label="密码"
        placeholder="请输入您的密码"
        type="password"
        v-model="password"
        :readonly='!toggle'
        :disableClear = '!toggle'
        class="mt_field"
      ></mt-field>
      <mt-field
        label="再次输入密码"
        placeholder="请再次输入您的密码"
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
        @click="register"
        class="mt_btn"
        v-if='toggle'>修改密码</mt-button>
    </section>
    <section style="padding-top:2rem;text-align: center;font-size:14px">
    </section>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import Header from '@/common/_mheader.vue'

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
    methods:{
      // 登录按钮
      register(){
        if(this.account!=="" && this.password!=="") {
          Toast('登录成功,存储token,跳转网页');
          this.toggle = false;
          this.$store.commit('CHANGE_TOKEN',1);
        }else {
          Toast('账号验证码不能为空');
        }

        setTimeout(()=>{
          this.$router.replace({
            path: ''//修改成功自动跳转
          })
        },1000);
        // 登录成
      },
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
      img{
        width:100%;
        height:15rem;
      }
      /*.mt_field{
        border-bottom: 1px solid rgba(230, 230, 230, 1);
      }*/
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
    .Iagree{
      text-decoration: underline;
      color: #6373B7;
    }
  }
</style>
