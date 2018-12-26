<template lang="html">
	<div>
		<v-header title="品牌资讯详情"/>
	</div>
</template>

<script>
  import Header from '@/common/_mheader.vue'
//   import {query} from '@/api/branddetails/query.js';
  export default {
      

    components: {
     'v-header': Header,
     },	
     data () {
    return {
      allData: {}
    }
  },	
	}
</script>

<style lang="less" scoped>
  
</style>
