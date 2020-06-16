import Vue from 'vue'
import vueResource from 'vue-resource'
import store from 'src/vuex/store'
Vue.use(vueResource)

//  http相关
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true

Vue.http.interceptors.push((request, next) => {
  if (!request.url.includes('login')) {
    request.params.token = store.state.login.token
  }
  if (request.url.includes('majun')) {
    request.params.cache_shield = 1
  }

  request.headers = {

  }

  next((response) => {
    if (typeof response.data === 'string') {
      try {
        response.data = JSON.parse(response.data)
      } catch (err) {
        //
      }
    }
    if (response.data && response.data.code === 444 && !window.isPcFx) {
      window.localStorage.clear()
      store.state.login.token = ''
      store.state.login.login = {}
      window.router.go({path: '/login'})
    }
    if (response.status === 408) {
      // 访问超时
    }
  })
})

export const AuthResource = Vue.resource('login')

