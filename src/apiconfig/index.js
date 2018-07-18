/* eslint-disable */
import axios from 'axios'

/**
* 定义请求常量
* TIME_OUT、ERR_OK
*/
export const TIME_OUT = 1000;    // 请求超时时间
export const ERR_OK = true;      // 请求成功返回状态，字段和后台统一
export const baseUrl = process.env.BASE_URL   // 引入全局url，定义在全局变量process.env中

// 请求超时时间
axios.defaults.timeout = TIME_OUT

// 封装请求拦截
axios.interceptors.request.use(
	config => {
		let token = localStorage.getItem('token')   // 获取token
		config.headers['Content-Type'] = 'application/json;charset=UTF-8'
		config.headers['Authorization'] = ''
		if(token != null){                          // 如果token不为null，否则传token给后台
			config.headers['Authorization'] = token
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)
// 封装响应拦截，判断token是否过期
axios.interceptors.response.use(
  response => {
    let {data} = response
    if (data.message === 'token failure!') {    // 如果后台返回的错误标识为token过期，则重新登录
      localStorage.removeItem('token')          // token过期，移除token
      // 进行重新登录操作
    } else {
      return Promise.resolve(response)
    }
  },
  error => {
    return Promise.reject(error)
  }
)
// 封装post请求
export function fetch(requestUrl, params = '') {
  return axios({
    url: requestUrl,
    method: 'post',
    data: {
      'body': params
    }
  })
}
