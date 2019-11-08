/*
 * @Author: your name
 * @Date: 2019-11-08 14:49:08
 * @LastEditTime: 2019-11-08 16:09:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chatting\src\main.js
 */
import Vue from 'vue'
import { Button } from "view-design";
import 'view-design/dist/styles/iview.css';

import App from './App.vue'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false
console.log(Button);

Vue.component('Button',Button)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
