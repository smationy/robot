<!--
 * @Author: your name
 * @Date: 2019-11-08 15:27:39
 * @LastEditTime: 2019-11-08 18:13:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chatting\src\pages\Login.vue
 -->
<template>
  <div id="login">
    <div class="background">
      <div class="content">
        <h1 class="title">Vue.js Chat</h1>
        <div class="text">
          <span class="text">
            Powered by Chatkit SDK and Bootstrap-Vue 
          </span>
          <span class="text">
            For more information visit website
          </span>
        </div>
        <Button type="success">More Info</Button>
      </div>
    </div>
    <div class="main">
      <div class="log">
        <h2>Chat login</h2>
        <hr>
        <div class="registered">
          <div class="name">User Name</div>
          <Input v-model="userName" placeholder="Enter user name" class="i-input"/>
          <Button type="info" @click="logIn">Login</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Input } from 'view-design'
export default {
  data(){
    return{
      userName:''
    }
  },
  methods:{
    logIn(){
      this.userName = this.userName.trim()
      this.$store.dispatch('setUserName',{userName:this.userName})
      this.userName = ''
    }
  },
  components:{
    Input
  },
}
</script>
<style lang='stylus' scoped>
  #login
    .background
      background-color #17A2B8
      height 60vh
      color #fff
      //开启BFC
      overflow hidden
      .content
        margin-top 15%
        margin-left 40px
        .title
          font-size 60px
          font-weight normal
          font-family Arial, Helvetica, sans-serif
        .text
          font-size 20px
          display block
          margin-bottom 15px
          &:nth-child(1)
            font-family Arial
    .main
      color #333
      .log
        width 40%
        margin 0 auto 
        hr
          background-color #e5e5e5 !important
        h2
          font-size 24px
          line-height 50px
          text-align center
        .registered
          margin-top 10px
          .name
            font-size 15px
            line-height 30px
          .i-input
            display block
            margin 10px 0 20px 0
</style>