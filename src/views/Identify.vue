<template lang="html">
	<div>
		<v-header title="真假烟鉴别"/>
		<ul class="list">
		   <li>
		   	<div>
		   	 <P>真假烟鉴别——利群(西子阳光)</P>
		   	 <img src="">
		   	</div>
		   	<p>查看详情</p>
		   </li>
	    </ul>
	</div>
</template>

<script>
  import Header from '@/common/_mheader.vue'
  export default {
    components: {
    'v-header': Header,
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
