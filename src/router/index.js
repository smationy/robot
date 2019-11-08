/*
 * @Author: your name
 * @Date: 2019-11-08 15:17:55
 * @LastEditTime: 2019-11-08 18:28:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chatting\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
Vue.use(VueRouter)

const router =  new VueRouter({
  mode:'history',
  routes
})
router.beforeEach((to,from,next) =>{
  if(from.params.name == ''){
    if(localStorage.getItem('userName')){
      next()
    }
  }
})

export default router