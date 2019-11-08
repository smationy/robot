/*
 * @Author: your name
 * @Date: 2019-11-08 15:18:04
 * @LastEditTime: 2019-11-08 18:18:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chatting\src\route\routes.js
 */
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'

export default[
  { path: '', component: Login },
  { path: '/home', component: Home }
]