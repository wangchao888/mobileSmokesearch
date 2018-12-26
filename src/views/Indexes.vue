<template lang="html">
	<div class="indexes">
		<v-header/>
		<v-display/>
        <v-something :list="allData.list"/>
	</div>
</template>

<script>
	import Header from '@/components/indexes/header.vue'
	import Display from '@/components/indexes/display.vue'
	import Something from '@/components/indexes/list.vue'
	import {query} from '@/api/indexes/query.js';
	export default {
		components: {
		 'v-header':Header,
		 'v-display': Display,
         'v-something':Something,
		},
		 data() {
		  return {
			allData: {
			  list:[]
			}
		  }
		},
		beforeCreate() {
		const datas = {} 
		  query(datas).then(data => {
			this.allData = data.data        
		  });
		}
	}
</script>

<style lang="less" scoped>
 .indexes{
    background-color: #EFEFF4;
 }
</style>
