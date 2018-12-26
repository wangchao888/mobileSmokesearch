<template lang="html">
    <div class="box">
     <mt-button slot="right" @click="showToggle">价格</mt-button>
     <mt-button slot="right">类型</mt-button>
     <mt-button slot="right">更多条件</mt-button>
    </div>
</template>
<script>
export default {
  data(){
    return {
      btnText:"隐藏",
	  isShow:true
    }
  },
  methods:{
    showToggle:function(){
				this.isShow = !this.isShow
				if(this.isShow){
                    this.btnText = "隐藏"
                    console.log(this.btnText)
				}else{
                    this.btnText = "显示"
                     console.log(this.btnText)
				}
			}

  }
}

</script>

<style lang="less" scoped>
.box{
  background-color: rgba(255, 255, 255, 1);
  overflow: auto;
  width: 100%;
  z-index: 100;
  .mint-button{
    width:calc(100%/3);
    float:left;
    color:#333;
    text-align: center;
    font-size:14px !important;
    border-radius: 0 !important;
  }
}
</style>
