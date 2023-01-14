import axios from 'axios'

// // // 创建axios实例
const request = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: 'http://127.0.0.1:8080',
  // 超时
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 1000000
})
export default request

// // request.interceptors.request.use(config => {
// //   config.headers['Content-Type'] = 'application/json;charset=utf-8'

// //   // config.headers['token'] = user.token;  // 设置请求头
// //   return config
// // }, error => {
// //   return Promise.reject(error)
// // })

// //   // request拦截器
// //   service.interceptors.request.use(config => {
// // //     // 是否需要设置 token
// // //     // const isToken = (config.headers || {}).isToken === false
// // //     // if (getToken() && !isToken) {
// // //     //   config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
// // //     // }
// // //     // get请求映射params参数
// //     if (config.method === 'get' && config.params) {
// //       let url = config.url + '?'
// //       for (const propName of Object.keys(config.params)) {
// //         const value = config.params[propName]
// //         const part = encodeURIComponent(propName) + '='
// //         if (value !== null && typeof (value) !== 'undefined') {
// //           if (typeof value === 'object') {
// //             for (const key of Object.keys(value)) {
// //               const params = propName + '[' + key + ']'
// //               const subPart = encodeURIComponent(params) + '='
// //               url += subPart + encodeURIComponent(value[key]) + '&'
// //             }
// //           } else {
// //             url += part + encodeURIComponent(value) + '&'
// //           }
// //         }
// //       }
// //       url = url.slice(0, -1)
// //       config.params = {}
// //       config.url = url
// //     }
// //     return config
// //   }, error => {
// //     Promise.reject(error)
// //   })

// //   // 响应拦截器
// //   service.interceptors.response.use(res => {
// //     console.log('---响应拦截器---', res)
// //     if (res.data.code === 0 && res.data.msg === 'NOTLOGIN') { // 返回登录页面
// //       // window.top.location.href = '/front/page/login.html'
// //       // window.top.location.href = 'https://www.bilibili.com/'
// //     } else {
// //       return res.data
// //     }
// //   },
// //   error => {
// //     let { message } = error
// //     // if (message == 'Network Error') {
// //     if (message === 'Network Error') {
// //       message = '后端接口连接异常'
// //     } else if (message.includes('timeout')) {
// //       message = '系统接口请求超时'
// //     } else if (message.includes('Request failed with status code')) {
// //       message = '系统接口' + message.substr(message.length - 3) + '异常'
// //     }
// //     window.vant.Notify({
// //       message: message,
// //       type: 'warning',
// //       duration: 5 * 1000
// //     })
// //     // window.top.location.href = '/front/page/no-wify.html'
// //     return Promise.reject(error)
// //   }
// //   )
// // win.$axios = service
// export default request
// import axios from 'axios'

// const request = axios.create({
//   baseURL: '/api', // 使用/api作为基地址
//   timeout: 5000
// })

// // request 拦截器
// // 可以自请求发送前对请求做一些处理
// // 比如统一加token，对请求参数统一加密
// request.interceptors.request.use(config => {
//   config.headers['Content-Type'] = 'application/json;charset=utf-8'

//   // config.headers['token'] = user.token;  // 设置请求头
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// // response 拦截器
// // 可以在接口响应后统一处理结果
// request.interceptors.response.use(
//   response => {
//     let res = response.data
//     // 如果是返回的文件
//     if (response.config.responseType === 'blob') {
//       return res
//     }
//     // 兼容服务端返回的字符串数据
//     if (typeof res === 'string') {
//       res = res ? JSON.parse(res) : res
//     }
//     return res
//   },
//   error => {
//     console.log('err' + error) // for debug
//     return Promise.reject(error)
//   }
// )

// export default request
