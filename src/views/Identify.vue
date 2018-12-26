<template lang="html">
	<div>
		<v-header title="真假烟鉴别"/>
		<ul class="list">
		   <li v-for="(k,i) in list">
		   	<div>
		   	 <P>{{k.title}}</P>
		   	 <img :src="k.imgPath">
		   	</div>
		   	<p  @click="seeDetail(k,i)">查看详情</p>
		   </li>
	    </ul>
	</div>
</template>

<script>
  import Header from '@/common/_mheader.vue'
  import {query} from '@/api/identify/query.js';
  export default {
    components: {
    'v-header': Header,
	  },
	   data() {
		return {
		   list:[]
		  }     
		},	
	  methods: {
		seeDetail (k,i) {			
			this.$store.state.identify.selectedList=k;
			this.$router.replace({
				path: 'identifydetail'//修改成功自动跳转
			})
		}
	  },
	  beforeCreate() {
		const datas = {} 
		query(datas).then(data => {
		this.list = data.data.list        
		});
	 },	
	}
</script>

<style lang="less" scoped>
  .list{
  	padding:10px;
  	li{
       border-radius: 5px 5px 5px 5px;
       background-color: rgba(255, 255, 255, 1);
	   border: 1px solid rgba(202, 202, 202, 1);
	   margin-bottom: 10px;
  		div{
          padding:0 10px;
          border-bottom:1px solid rgba(202, 202, 202, 1);
          p{
          	padding:10px 0;
          	color:#000000;
  	        font-size:16px;
          }
          img{
          	width:100%;
          	height:10rem;
          	margin-bottom:10px;
          }
  		}
  		p{
  			padding:10px 10px;
  			color:#000000;
  	   font-size:16px;
  		}
  	}
  }
</style>
