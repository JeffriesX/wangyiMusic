// requset.js对axios进行了二次封装，封装到了instance中，使原始axios不易被污染，便于维护
//      页面中直接用request代替axios即可，如axios.get就等于request.get
//      页面中使用时提前引入即可：import request from '@/utils/request'

import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Toast.loading({
    message: '加载中...', // 文本设置
    forbidClick: true, // 背景点击
    duration: 0 // 加载效果不自动消失，等加载结果出来后配置Toast.clear()清除效果
  })

  // 请求头信息统一设置
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  // 对响应数据做点什么 (默认axios会多包装一层data，需要响应拦截器中处理一下)
  const res = response.data
  // 通过状态码比对进行判断（一般200为成功，500为失败）
  if (res.status === 200) {
    // 给错误提示, Toast 默认是单例模式，后面的 Toast调用了，会将前一个 Toast 效果覆盖
    // 同时只能存在一个 Toast
    Toast('请求响应失败')
    // 抛出一个错误的promise
    return
  } else {
    // 正确情况，直接走业务核心逻辑，清除loading效果
    Toast.clear()
  }
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})
// 将instance发送出去
export default instance
