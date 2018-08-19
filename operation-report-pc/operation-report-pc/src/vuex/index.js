import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      user: {},
      reportName: '报表'
    },
    mutations: {
      loginIn (state, user) {
        state.user = user
      },
      loginOut (state) {
        window.sessionStorage.removeItem('user')
        state.user = {}
      },
      changeReportName (state, str) {
        window.sessionStorage.reportName = str
        state.reportName = str
      }
    }
  })