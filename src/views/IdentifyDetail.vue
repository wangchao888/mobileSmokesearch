<template lang="html">
	<div>
		<v-header title="真假烟鉴别详情"/>
    <h4>{{selectedList.title}}</h4>
     <p>Starts at {{selectedList.price}}</p>
	</div>
</template>

<script>
  import Header from '@/common/_mheader.vue'
  export default {
    components: {
     'v-header': Header,
     },	
     computed: {
       selectedList() {
         return this.$store.state.identify.selectedList
         }
     },	
	}
</script>

<style lang="less" scoped>
  
</style>
