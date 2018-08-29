// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'assets/echarts.js'
import store from 'vuex'
import ElementUI from 'element-ui'
import { Base64 } from 'js-base64'
import 'style/theme/index.css' //基本样式引入
import 'style/rest.css' // 全局自定义的css样式
import axios from 'api/config'

Vue.prototype.$axios = axios //将定制的axios挂载到Vue原型上
Vue.prototype.$echarts = echarts //将echarts挂载到Vue原型上

Vue.use(ElementUI)
Vue.config.productionTip = false


if (process.env.NODE_ENV === 'production') {
  //生产环境 关闭警告 vue-devtools
  Vue.config.productionTip = false
  Vue.config.devtools = false
}
/**是否登录判断，未登录跳转到登录页 */
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if(store.state.user.token) {
//       next()
//     }else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}
//       })
//     }
//   } else {
//     next()
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
