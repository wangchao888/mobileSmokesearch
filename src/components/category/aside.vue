<template lang="html">
  <aside class="aside">
    <ul>
      <li v-for="(k,i) in datas" @click='changeTabIndex(i)'>
        <router-link :to="{path:'/category/'+k.id}" :class='{active:i==tabIndex}' >{{k.title}}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    props: {
      datas:{
        type:Array,
        default:function(){
          return []
        }
      }
    },
    computed:{
      tabIndex(){
        return this.$store.state.category.tabIndex
      }
    },
    methods:{
      changeTabIndex(i) {
         this.$store.commit('CHANGE_TABINDEX',i)
      }
    }
  }
</script>

<style lang="less" scoped>
  .aside {
    flex: 2.2;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #d9d9d9;
    border-right:1px solid #fafafa;
    &::-webkit-scrollbar {display:none}
    > ul {
      height: 100%;
      width: 100%;
      li {
        text-align: center;
        a {
          display: block;
          padding: 4vw 0;
          position: relative;
          font-size: 16px;
        }
        .active {
          position: relative;
          &::before {
            width: 3px;
            height: 28px;
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -14px;
            background-color: #112B40;
          }
        }
      }
    }
  }
</style>
