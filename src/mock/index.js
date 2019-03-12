/*
 * @Description: 引入mock.js及配置文件
 * @Author: MrGao
 * @LastEditors: Please set LastEditors
 * @Date: 2019-03-12 10:35:08
 * @LastEditTime: 2019-03-12 10:54:20
 */

import Mock from 'mockjs'
import User from './user'

Mock.mock('/root/login/checkMemberLogin', 'post', () => {
  return User.userInfo
})
