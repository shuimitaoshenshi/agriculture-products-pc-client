import request from "@/js/request"
// import axios from 'axios'
// // import request from './js/request'
// axios.defaults.baseURL = 'http://127.0.0.1:8080'
// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
export function loginApi(data) {
  return request.post('/user/login',data)
  // return $axios({
  //   'url': '/user/login',
  //   'method': 'post',
  //   data
  // })
}

export function sendMsgApi(data) {
  // return $axios({
  // return request({
  //   url: '/api/user/sendMsg',
  //   method: 'post',
  //   data
  // })
  return request.post('/api/user/sendMsg',data)
}

// function loginoutApi() {
//   return $axios({
//     url: '/user/loginout',
//     method: 'post'
//   })
// }
