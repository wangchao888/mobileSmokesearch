<template lang="html">
	<div class="wrap">
		<v-header/>
        <v-something/>
	</div>
</template>

<script>
	import Header from '@/components/brandintro/header.vue'
    import Something from '@/components/brandintro/list.vue'
	export default {
		components: {
		 'v-header':Header,
         'v-something':Something,
		},
	}
</script>

<style lang="less" scoped>
 .indexes{
    background-color: #EFEFF4;
 }
</style>
