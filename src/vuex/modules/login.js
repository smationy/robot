/*
 * @Author: your name
 * @Date: 2019-11-08 17:15:03
 * @LastEditTime: 2019-11-08 18:16:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chatting\src\vuex\modules\login.js
 */
import { SETUSERNAME } from "./mutations-type";

export default{
  state: {
    userName:''
  },
  mutations: {
    [SETUSERNAME](state,{userName}){
      state.userName = userName
    }
  },
  actions: {
    async setUserName({commit},data){
      const {userName} = data
      await Promise.resolve()
      localStorage.setItem('userName',userName)
      commit(SETUSERNAME,{userName})
    }
  },
}