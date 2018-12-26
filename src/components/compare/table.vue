<template>
<div style="width:100%;overflow-x:scroll;"> 
  <table id="table">
      <tr>
          <td><mt-switch></mt-switch>隐藏相同</td>
      </tr>
      <tr>
          <td>详情信息</td>
      </tr>
      <tr>
          <td>单盒零售</td>
      </tr>
      <tr>
          <td>卷烟类型</td>
      </tr>
      <tr>
          <td>焦油量</td>
      </tr>
      <tr>
          <td>烟气碱量</td>
      </tr>
      <tr>
          <td>一氧化碳</td>
      </tr>
      <tr>
          <td>烟的长度</td>
      </tr>
      <tr>
          <td>包装形式</td>
      </tr>
      <tr>
          <td>单盒支数</td>
      </tr>
      <tr>
          <td>单条支数</td>
      </tr>
      <tr>
          <td>盒码</td>
      </tr>
      <tr>
          <td>条码</td>
      </tr>
      <tr>
          <td>是否细支</td>
      </tr>
      <tr>
          <td>是否爆珠</td>
      </tr>
      <tr>
          <td>滤嘴类型</td>
      </tr>
      <tr>
          <td>产品状态</td>
      </tr>
      <tr>
          <td>用户评价</td>
      </tr>
      <tr>
          <td>口味</td>
      </tr>
      <tr>
          <td>外观</td>
      </tr>
      <tr>
          <td>性价比</td>
      </tr>
      <tr>
          <td>综合</td>
      </tr>
      <tr>
          <td>评价</td>
      </tr>
  </table>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted:function(){
    let $tr = $('#table').children('tr')
    var list = this.$store.state.indexes.selectedList
     for(var i=0;i<list.length;i++){
        $($tr[1]).append("<td style='padding:10px 15px;'>"+list[i].price+"</td>");
     }
  },
}
</script>
<style lang="less" scoped>
 #table{
    td{
        padding:10px;
    }
 }
</style>