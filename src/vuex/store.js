//store.js
import Vue from 'vue'
import Vuex from 'vuex'

// 头部分类
import detail from './modules/detail'
import category from './modules/category'
import login from './modules/login'
import indexes from './modules/indexes'
import brandlist from './modules/brandlist'
import identify from './modules/identify'
import appreciation from './modules/appreciation'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    detail,
    category,
    login,
    indexes,
    brandlist,
    identify,
    appreciation
  }
})
