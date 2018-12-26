<template lang="html">
  <section class="section1">
    <h1 class="section1-title">
      新品展示
      <i class="icon iconfont" style="font-size: 23px">&#xe622;</i>
    </h1>
    <section class="ab-photo pr">
				<div class="swiper-container">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide" v-for="item in list">
				        	<div class="am-img pr">
                    <router-link :to="{name:'详情页'}">
				        		<img :src="item.imgPath" alt="">
                     </router-link>
				        		<div class="am-title pa">
				        			<p class="tddd">黄山</p>
				        			<p>上市时间</p>
                      <p>5.0元/盒</p>
				        		</div>
				        	</div>
				        </div>
				    </div>
				</div>
			</section>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';
import swiper from '../../assets/js/swiper.min.js'
export default {
  props: {
    banner: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  updated () {
		this.initSwiper()
  },
  created (){
    this.initSwiper()
  },
  methods: {
    initSwiper () {
    	this.$nextTick(() => {
    		var swiper = new Swiper('.swiper-container', {
  		    pagination: '.swiper-pagination',
  		    slidesPerView: 'auto',
  		    centeredSlides: false,
  		    spaceBetween: 5
    		})
    	})
    }
	},
}

</script>
<style lang="less" scoped>
@import "../../assets/fz.less";
@import '../../assets/css/style.css';
.section1 {
  .pt();
  padding-top:3vw;
  .section1-title {
    .bt();
    background-color: #ffffff;
    text-align: left;
    padding: 4vw 3vw;
    .fz(font-size, 40);
    color: #333;
    position: relative;

    i {
      position: absolute;
      right: 6vw;
      top: 50%;
      .fz(font-size, 36);
      .fz(margin-top,-16);

      &::before {
        color: rgb(159, 159, 159);
      }
    }
  }

  .section1-list {
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    padding: 0 2vw 4vw 2vw;
    li {
      width: 25%;
      padding: 1vw;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      a,
      img {
        width: 100%;
        display: block;
      }
      h2,
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      h2 {
        .fz(font-size, 32);
        padding-top: 3vw;
        color: #333;
      }

      p.section2-list-intro {
        padding-top: 2vw;
        .fz(font-size, 26);
        color: rgb(150, 150, 150);
      }

      p.section2-list-price {
        color: #b4282d;
      }
    }
  }

  .section1-banner {
    display: block;
    width: 100vw;
    img {
      width: 100%;
      height: 24vw;
    }
  }
}
.ab-photo {
	padding:0 3vw;
	box-sizing: border-box;
	background-color: #fff;
}
.crew-ab-photo {
	padding: 15px 15px 0px;
}
.ab-header {
	z-index: 1000;
}
.ab-header span {
	font-size: .9375rem;
	line-height: 2rem;
	line-height: 10vmin;
	color: #000;
}
.hide-something {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
.am-img {
	height: 23vw;
}
.crew-img {
	height: 100px;
}
.am-img img{
	height: 100%;
	width: auto;
}
.am-title {
	width: 100%;
}
.am-title p {
	text-align: center;
}
.am-title p:first-child {
	color: #333;
	font-size: .9375rem;
}
.am-title p:nth-child(2){
  color: #333;
	font-size: .9375rem;
}
.am-title p:last-child {
	color: #999;
	font-size: .9375rem;
}
.swiper-container {
	height: 45vw;
  width: 100%;
  overflow: initial;
  overflow-x: hidden;
}
.crew-swiper-container {
	margin-top: 7px;
	height: 165px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: top;
}
.swiper-slide:nth-child(2n),
.swiper-slide:nth-child(3n) {
    width: auto;
}
.no-data {
	padding: 60px;
	font-size: 16px;
	color: #666;
	text-align: center;
}
</style>

