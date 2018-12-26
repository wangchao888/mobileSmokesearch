<template lang="html">
	<div class=search>
		<v-searchTab/>
		<v-searchList :datas="allData.list"/>
		<v-footer/>
	</div>
</template>

<script>
	import searchTab from '@/components/search/searchTab.vue'
	import SearchList from '@/components/search/serchList.vue'
	import Footer from '@/common/_footer.vue'
	import {query} from '../api/search/query.js';
	export default {
		components: {
			'v-searchTab': searchTab,
			'v-searchList': SearchList,
			'v-footer': Footer
		},
		data () {
			return {
		    	allData: {}
			}
		},
		created () {
			const datas = {} 
			query(datas).then(data => {
			this.allData = data.data         
			});
		}
	}
</script>

<style lang="less" scoped>

</style>
