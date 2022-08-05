/** axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
// 环境的切换
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'
axios.defaults.timeout = 50000
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 请求拦截器

axios.interceptors.request.use(config => {
  return config
})

function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
// qs.stringify(data)
function post(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, qs.stringify(data))
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

