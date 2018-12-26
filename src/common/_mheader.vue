<template lang="html">
    <div class="mheader">
       <mt-header :title="title">
        <div @click="$router.go(-1)" slot="left">
          <mt-button icon="back">返回</mt-button>
        </div>
    </mt-header>
  </div>
</template>
<script>

export default {
    props:['title'],
}
</script>

<style lang="less" scoped>
.mheader{
  .mint-header{
  background-color:#FFFFFF;
  color:#101010;
 }
}
</style>
