import axios from 'axios'
axios.baseURL = 'http://127.0.0.1:8080'
// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
export function addAddressApi(data) {
  return axios.post('/api/addressBook',data)
}
export function changeAddressApi(data) {
  return axios.put('/api/addressBook',data)
}
export function deleteAddressApi(id) {
  return axios.delete('/api/addressBook?ids='+id)
}
export function getAddressApi(data) {
  return axios.get('/api/addressBook/list',data)
}