import Vue from 'vue'
import App from './App.vue'
import store from './store'
//引入mint-ui
import {Button} from 'mint-ui'
//引入图片懒加载
import VueLazyload from "vue-lazyload";

import './mock/mockServer' // 加载mockServer即可
import loading from './common/imgs/loading.gif' //需要使用图片懒加载的图片
import './fiters' //加载过滤器

//引入路由器
import router from './router/index.js'

//注册全局组件标签
Vue.component(Button.name,Button) // <mt-button>
Vue.use(VueLazyload,{ // 内部自定义了一个指令lazy
  loading
})

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router, //使用vue-router
  store, //使用上vuex
  created(){
    Vue.prototype.$bus = this
  }
})
