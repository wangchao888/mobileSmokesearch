<template lang="html">
  <div class="login">
    <mt-header class="header backgroundheader"  title="个人信息修改">
      <router-link to="/user" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!--<mt-button slot="right" style="color:#3F65B5;">手机登陆</mt-button>-->
    </mt-header>
    <section>
      <mt-field
        label="头像"
        type = "file"
        :readonly = '!toggle'
        :disableClear = '!toggle'
        class="mt_field"
      ><img src="../assets/user/yan.jpg" class="touxiang"/> </mt-field>
      <mt-field
        label="姓名"
        type="text"
        v-model="text"
        :readonly='!toggle'
        :disableClear = '!toggle'
        class="mt_field"
      >李爱民</mt-field>
      <mt-field
        label="昵称"
        type="text"
        v-model="text"
        :readonly='!toggle'
        :disableClear = '!toggle'
        class="mt_field"
      >爱抽烟的老头</mt-field>
      <mt-field
        label="手机号"
        type="tel"
        v-model="tel"
        :readonly='!toggle'
        :disableClear = '!toggle'
        class="mt_field"
      >138-1001-1009</mt-field>
    </section>
    <section>
      <mt-button
        plain
        size="large"
        @click="save"
        class="mt_btn"
        >保存</mt-button>
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
      // 保存按钮
      save(){
        setTimeout(()=>{
          this.$router.replace({
            path: ''//保存成功自动跳转
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
      color:#FFF !important;
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
    .touxiang{
      width:40px;
      height: 40px;
      border-radius:50%;
      float: right;
    }
  }
</style>
