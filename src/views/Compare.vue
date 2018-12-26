<template lang="html">
    <div class="compare">
      <!-- slot分发内容 让子组件混合父组件的内容 -->
      <v-header title="参数对比"/>
      <v-table/>
    </div>
</template>

<script>
import Header from '@/common/_mheader.vue'
import Table from '@/components/compare/table.vue'
export default {
    components: {
    'v-header': Header,
    'v-table':Table
  }
}
</script>

<style lang="less" scoped>

</style>
