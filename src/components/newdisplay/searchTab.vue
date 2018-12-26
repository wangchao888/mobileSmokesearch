<template lang="html">
  <div>
    <div class="box">
      <mt-button slot="right" @click="openTimePicker">上市时间<i class="icon iconfont">&#xe60b;</i></mt-button>
      <mt-button slot="right" @click="openPicker('price')">价位区间<i class="icon iconfont">&#xe60b;</i></mt-button>
      <mt-button slot="right" @click="openPicker('type')">类型<i class="icon iconfont">&#xe60b;</i></mt-button>
      <mt-button slot="right" @click="openPicker()">是否细支<i class="icon iconfont">&#xe60b;</i></mt-button>
    </div>
    <mt-popup
      v-model="popupVisible"
      position="bottom" style="width:100%">
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
     <mt-datetime-picker
      type="date"
      ref="picker"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm"
      :startDate="startDate"
      >
    </mt-datetime-picker>
</div>
</template>
<script>
  import Header from '@/common/_mheader.vue'
import { DatetimePicker,Picker ,Popup } from 'mint-ui'
import moment from 'moment'// 格式化时间
import Vue from 'vue'
Vue.component(DatetimePicker.name,DatetimePicker,Popup)
export default {
  data () {
    return {
      dateTime: '',
      startDate: new Date(),
      popupVisible:false,
      pickerVisible:false,
      slots:[]
    }
  },
  methods: {
    openPicker(data){
      this.pickerVisible=false,
      this.popupVisible=true
      if(data=='price'){
        this.slots=  [
          {
              flex: 1,
              values: ['0', '100', '200', '300', '400'],
              className: 'slot1',
              textAlign: 'left'
            }, {
              divider: true,
              content: '-',
              className: 'slot2'
            }, {
              flex: 1,
              values: ['100', '200', '300', '400', '500'],
              className: 'slot3',
              textAlign: 'right'
            }
        ]
      }else if(data=='type'){
         this.slots= [{values: ['第一种类型', '第二种类型']}]
      }else{
         this.slots= [{values: ['是', '否']}]
      }
    },
    onValuesChange(picker, values) {
      console.log(picker)
      console.log(values)
    },
    openTimePicker () {
      this.$refs.picker.open()
    },
    handleConfirm (data) {
      let date = moment(data).format('YYYY.MM.DD')
      this.dateTime = date
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
  .mint-button--default{
    box-shadow: 0 0 1px #fff !important;
  }
  .iconfont{
    font-size:12px !important;
  }
  .mint-button{
    width: 25%;
    float: left;
    color:#333;
    text-align: center;
    font-size:13px !important;
    border-radius: 0 !important;
    background-color:#fff;
    border-bottom:1px solid #999;
    border-top:1px solid #999;
  }
}
</style>
