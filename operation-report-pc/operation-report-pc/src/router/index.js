import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/login/login'
//异步加载组件
const Wrapper = resolve => require(['components/common/wrapper.vue'], resolve)
const Home = resolve => require(['pages/home/home.vue'], resolve)
const Report = resolve => require(['pages/report/report.vue'], resolve)
const cantFind = resolve => require(['pages/404/cant-find.vue'], resolve)


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/',
    name: "首页",
    redirect: "/home",
    component: Wrapper,
    children: [{
        path: "home",
        component: Home,
        name: 'Home',
        meta: {
          requiresAuth: true
        }

      },
      {
        path: "report",
        component: Report,
        name: "Report",
        meta: {
          requiresAuth: true
        }
      }
    ]
  }, {
    path: '*',
    component: cantFind,
    name: 'cant-find'
  }]
})
