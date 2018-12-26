<template lang="html">
  <div class="login">
    <mt-header class="header backgroundheader"  title="密码重置">
      <router-link to="/user" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!--<mt-button slot="right" style="color:#3F65B5;">手机登陆</mt-button>-->
    </mt-header>
    <section>
      <mt-field
        placeholder="请输入您的原密码"
        type = "password"
        v-model = "password"
        :readonly = '!toggle'
        :disableClear = '!toggle'
        class="mt_field"
      ></mt-field>
      <mt-field
        placeholder="请输入您的新密码"
        type="password"
        v-model="password"
        :readonly='!toggle'
        :disableClear = '!toggle'
        class="mt_field"
      ></mt-field>
      <mt-field
        placeholder="请再次输入您的新密码"
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
        @click="update"
        class="mt_btn">修改密码</mt-button>
    </section>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    data(){
      return {
        account:'',
        password:'',
        toggle:!this.$store.state.login.token
      }
    },
    methods:{
      // 修改按钮
      update(){
        if(this.account!=="" && this.password!=="") {
          Toast('登录成功,存储token,跳转网页');
          this.toggle = false;
          this.$store.commit('CHANGE_TOKEN',1);
        }else {
          Toast('账号密码不能为空');
        }

        setTimeout(()=>{
          this.$router.replace({
            path: 'user'//修改成功自动跳转
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
    .backgroundheader{
      background-color:#112B40 !important;
      color:#FFF  !important;
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
    }
  }
</style>
