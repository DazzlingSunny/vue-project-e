//路由器对象模块
import Vue from 'vue'
import VueRouter from "vue-router";

// import MSite from "../pages/MSite/MSite";
// import Search from "../pages/Search/Search";
// import Order from "../pages/Order/Order";
// import Profile from "../pages/Profile/Profile";

//路由组件懒加载,只有再需要该组件时才去加载对应的js文件，当然是刷新后的第一次点击去发请求访问该js文件，后续都不会发请求了
const MSite = () => import("../pages/MSite/MSite")
const Search = () => import("../pages/Search/Search")
const Order = () => import("../pages/Order/Order")
const Profile = () => import("../pages/Profile/Profile")


import Login from "../pages/Login/Login";
import Shop from "../pages/Shop/Shop";
import ShopGoods from "../pages/Shop/ShopGoods/ShopGoods";
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRating from '../pages/Shop/ShopRatings/ShopRatings'


//声明使用插件
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
      {
        path:'/msite',
        component:MSite,  // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
        meta:{
          showFooter:true
        }
      },
      {
        path:'/search',
        component:Search,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/order',
        component:Order,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/profile',
        component:Profile,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/',
        redirect:'/msite'
      },
      {
        path:'/login',
        component:Login
      },
      {
        path:'/shop',
        component:Shop,
        children:[
          {
            path:'goods',
            component:ShopGoods
          },
          {
            path:'ratings',
            component:ShopRating
          },
          {
            path:'info',
            component:ShopInfo
          },
          {
            path:'',
            redirect:'goods' //指定默认自动跳转
          }
        ]
      }
    ]
})
