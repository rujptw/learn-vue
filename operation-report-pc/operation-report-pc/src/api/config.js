/**
 * 定制axios
 *  */
import {
  Message
} from 'element-ui';
import axios from 'axios'
import store from '../vuex';

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'test') {
  axios.defaults.baseURL = ''
}
//请求超时时间1
axios.defaults.timeout = 8000

//请求拦截器
axios.interceptors.request.use((confog) => {
  if (store.state.user.token) {
    // 让每个请求都携带上token
    config.headers.Authorization = store.state.user.token
  }
  return config;
}, (err) => {
  console.log(err) //for debug
  Promise.reject(err)
})

//响应拦截器
axios.interceptors.response.use(
  (res) => {
    if (res.data.meta) {
      const code = res.data.meta.code
      // 50014:Token 过期了 50012:其他客户端登录了 50008:非法的token
      if (code !== 'SUCCESS') {
        Message({
          message: res.data.meta.message,
          showClose: true,
          type: 'error',
          duration: 3600
        })
      } else {
        return res
      }
    }
    return res
  }, (err) => {
    console.log('err' + err);
    console.log(err.response)
    if (err.response) {
      let statusCode = err.response.statusCode
      if (statusCode === 401) {
        Message({
          message: '身份未验证，请确认身份信息',
          showClose: true,
          type: 'error',
          duration: 3600
        })
      } else if (statusCode === 404) {
        Message({
          message: '错误，404，暂未找到页面',
          showClose: true,
          type: 'error',
          duration: 3600
        })
      } else if (statusCode >= 500 && statusCode <= 505) {
        Message({
          message: '服务器发生错误,请稍后再试',
          showClose: true,
          type: 'error',
          duration: 3600
        })
      } else {
        Message({
          message: '服务器响应超时,请稍后再试',
          showClose: true,
          type: 'error',
          duration: 3600
        })
      }
    }
  })

  export default axios