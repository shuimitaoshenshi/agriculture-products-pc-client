import axios from 'axios'
axios.baseURL = 'http://127.0.0.1:8080'
// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
export function getCategoryApi() {
  return axios.get('/api/category/list')
}