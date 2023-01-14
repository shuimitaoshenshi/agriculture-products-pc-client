// import request from "@/js/request"
import axios from 'axios'
// // import request from './js/request'
// axios.defaults.baseURL = 'http://127.0.0.1:8080'
// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
export function userLoginApi(data) {
  return axios.post('/api/user/login',data)
}
export function sellerLoginApi(data) {
  return axios.post('/api/seller/login',data)
}
export function userRegisterApi(data) {
  return axios.post('/api/user/register',data)
}
export function sellerRegisterApi(data) {
  return axios.post('/api/seller/register',data)
}


// function loginoutApi() {
//   return $axios({
//     url: '/user/loginout',
//     method: 'post'
//   })
// }
