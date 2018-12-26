import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Category = resolve => require(['@/views/Category.vue'], resolve)
const CategoryMain = resolve => require(['@/components/category/main.vue'], resolve)
const Car = resolve => require(['@/views/Car.vue'],resolve)
const User = resolve => require(['@/views/User.vue'], resolve)
const Detail = resolve => require(['@/views/Detail.vue'], resolve)
const Search = resolve => require(['@/views/Search.vue'], resolve)
const Pay = resolve => require(['@/components/car/pay/pay.vue'], resolve)
const Login = resolve => require(['@/views/login.vue'], resolve)
const Identify = resolve => require(['@/views/Identify.vue'], resolve)
const Scanne = resolve => require(['@/views/Scanne.vue'], resolve)
const Contrast = resolve => require(['@/views/Contrast.vue'], resolve)
const Indexes = resolve => require(['@/views/Indexes.vue'], resolve)
const Register = resolve => require(['@/views/Register.vue'], resolve)
const ForgetPwd = resolve => require(['@/views/ForgetPwd.vue'], resolve)
const NewDisplay = resolve => require(['@/views/NewDisplay.vue'], resolve)
const Compare = resolve => require(['@/views/Compare.vue'], resolve)
const ResetPwd = resolve => require(['@/views/Resetpwd.vue'], resolve)
const UpdateInfor = resolve => require(['@/views/Updateinfor.vue'], resolve)
const RenZheng = resolve => require(['@/views/Renzheng.vue'], resolve)
const BrandIntro = resolve => require(['@/views/BrandIntro.vue'], resolve)
const Activity = resolve => require(['@/views/Activity.vue'], resolve)
const BrandList = resolve => require(['@/views/BrandList.vue'], resolve)
const BrandDetails = resolve => require(['@/views/BrandDetails.vue'], resolve)
const Maps = resolve => require(['@/views/Maps.vue'], resolve)
const Appreciation = resolve => require(['@/views/Appreciation.vue'], resolve)

export default new Router({
  routes: [{
      path: '/',
      name: '首页',
      component: Index
    }, {
      path: '/category',
      name: '分类页',
      redirect: '/category/all',
      component: Category,
      children: [{
        path: '/category/:tab',
        name: '分类页',
        component:CategoryMain
      }]
    }, {
      path: '/car',
      name: '购物车页',
      component: Car
    }, {
      path: '/car/pay',
      name: '支付页',
      component: Pay
    },
    {
      path: '/user',
      name: '用户页',
      component: User,
      meta: {
           requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
       },
    }, {
      path: '/detail',
      name: '详情页',
      component: Detail
    }, {
      path: '/search',
      name: '导购页',
      component: Search
    },{
      path: '/login',
      name: '登录页',
      component: Login
    },{
      path: '/identify',
      name: '真假烟辨别页',
      component: Identify
    },{
      path: '/scanne',
      name: '扫描页',
      component: Scanne
    },{
      path: '/contrast',
      name: '对比选择',
      component: Contrast
    },{
      path: '/indexes',
      name: '索引页',
      component: Indexes
    },{
      path: '/register',
      name: '注册页',
      component: Register
    },{
      path: '/forgetpwd',
      name: '忘记密码',
      component: ForgetPwd
    },{
      path: '/newdisplay',
      name: '新品展示',
      component: NewDisplay
    },{
      path: '/resetpwd',
      name: '密码重置',
      component: ResetPwd,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      },
    },{
      path: '/updateinfor',
      name: '个人信息修改',
      component: UpdateInfor,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      },
    },{
      path: '/renzheng',
      name: '我要认证',
      component: RenZheng,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
      },
    },{
      path: '/compare',
      name: '参数对比',
      component: Compare
    },{
      path: '/brandintro',
      name: '品牌介绍',
      component: BrandIntro
    }
    ,{
      path: '/activity',
      name: '活动展示',
      component: Activity
    },{
      path: '/brandlist',
      name: '品牌资讯列表',
      component: BrandList
    },{
      path: '/branddetails',
      name: '品牌资讯详情',
      component: BrandDetails
    },{
      path: '/map',
      name: '地图',
      component: Maps
    },{
      path: '/appreciation',
      name: '烟标鉴赏',
      component: Appreciation
    }
  ]
})
