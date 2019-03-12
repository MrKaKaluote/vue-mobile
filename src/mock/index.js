/*
 * @Description: 引入mock.js及配置文件
 * @Author: MrGao
 * @LastEditors: gaosong
 * @Date: 2019-03-12 10:35:08
 * @LastEditTime: 2019-03-12 15:47:10
 */

import Mock from 'mockjs'
import User from './user'

Mock.mock('/root/login/checkMemberLogin', 'post', () => {  // 此处会劫持/root/login/checkMemberLogin接口，并返回数据
  return User.userInfo  // 返回模拟数据
})
