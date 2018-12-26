<template lang="html">
	<div class=search>
		<v-header title="新品展示"/>
		<v-searchTab/>
		<v-searchList :datas="allData.list"/>
		<!-- <v-footer/> -->
	</div>
</template>

<script>
	import Header from '@/common/_mheader.vue'
	import searchTab from '@/components/newdisplay/searchTab.vue'
	import SearchList from '@/components/newdisplay/serchList.vue'
	import Footer from '@/common/_footer.vue'
	import {query} from '../api/search/query.js';
	export default {
		components: {
			'v-header':Header,
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
