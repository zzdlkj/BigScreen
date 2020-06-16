<template>
  <div>
     <router-view @changelang='langChange' v-if='isRouterAlive'></router-view>

  </div>
</template>

<script>
  window.onerror = function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {

  }
  import 'src/style/web2.2.css'
  import 'src/style/style.css'
  import store from './vuex/store'
  import {getUserInfo, getUserInfoAll} from 'src/vuex/getters'
  import {saveUserInfo} from 'src/vuex/actions'
  import Vue from 'vue'
  export default {
    store: store,
    ready () {
      // if (!store.state.login.token) {
      //   this.$router.go('/login')
      // }
      (function () {
        var lastTime = 0
        var vendors = ['webkit', 'moz']
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
          window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
                                        window[vendors[x] + 'CancelRequestAnimationFrame']
        }
        if (!window.requestAnimationFrame) {
          window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime()
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
            var id = window.setTimeout(function () {
              callback(currTime + timeToCall)
            }, timeToCall)
            lastTime = currTime + timeToCall
            return id
          }
        }
        if (!window.cancelAnimationFrame) {
          window.cancelAnimationFrame = function (id) {
            clearTimeout(id)
          }
        }
      }())
      if (this.getUserInfo && this.getUserInfo.lang !== undefined) {
        console.log(this.getUserInfo.lang)
        Vue.config.lang = this.getUserInfo.lang
      }
    },
    // provide () {
    //   return {
    //     reload: this.reload
    //   }
    // },
    data () {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      langChange (lang) {
        let info = this.getUserInfoAll
        if (this.getUserInfo) {
          info.userinfo.lang = lang
          this.saveUserInfo(info)
        }
        Vue.config.lang = lang
        this.$root.reload()
      },
      reload () {
        this.isRouterAlive = false
        this.$nextTick(() => (this.isRouterAlive = true))
      }
    },

    vuex: {
      getters: {
        getUserInfo,
        getUserInfoAll
      },
      actions: {
        saveUserInfo
      }
    }
  }
</script>
<style>
  .form-control {
    font-weight: normal;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0 auto;
  }
  body {
    min-width: 1000px;
  }
</style>
