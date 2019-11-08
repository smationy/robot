/*
 * @Author: your name
 * @Date: 2019-11-08 15:22:54
 * @LastEditTime: 2019-11-08 18:11:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chatting\src\vuex\store.js
 */
import Vuex from 'vuex'
import Vue from 'vue'
import login from './modules/login'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    login
  }
})