/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import {fetch, baseUrl} from 'config/index'
// 登录接口
export function loginUserNo(params) {
  return fetch(`${baseUrl}/root/login/checkMemberLogin`, params)
}
