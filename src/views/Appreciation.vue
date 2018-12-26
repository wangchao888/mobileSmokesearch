<template lang="html">
	<div class=search>
		<v-header title="烟标鉴赏"/>
		 <ul class="section5-list">
            <li v-for="k in list" :key='k.id'>
                <a @click="toDetails(k,i)">
                 <img v-lazy="k.imgPath">
                <p>{{k.intro}}</p>
                </a>
                <h3>{{k.title}}</h3>
                <span>$ {{k.price}}</span>
            </li>
        </ul>
	</div>
</template>

<script>
    import Header from '@/common/_mheader.vue'
    import {query} from '../api/appreciation/query.js';
	export default {
		components: {
			'v-header':Header,
        },
        data () {
			return {
		    	list: {}
			}
    },
     methods: {
    toDetails (k,i) {
      this.$store.state.appreciation.selectedList = k;
      this.$router.replace({
            path: 'appreciationdetail'//修改成功自动跳转
      })
    }
   },
		created () {
			const datas = {} 
			query(datas).then(data => {
			this.list = data.data.list         
		 });
		}
	}
</script>

<style lang="less" scoped>
.section5-list {
    width: 100%;
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    overflow: hidden;
    li {
      width: 50%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 3vw;
      > a {
        display: block;
        width: 100%;
        position: relative;
        img {
          display: block;
          width: 100%;
        }
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: gold;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 1.2vw 2vw;
        }
      }
    }
  }
</style>
