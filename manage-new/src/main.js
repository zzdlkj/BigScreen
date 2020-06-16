import Vue from 'vue'
import App from './App'
import routerMap from './router'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'
import locale from 'src/locale'
import animated from 'src/transition'
import {mToKm, notZero, filterNo} from 'src/plus/filter'
import {posSwitch} from 'src/plus/common'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'babel-polyfill'

Vue.use(VueRx, Rx)
Vue.use(VueRouter)
Vue.use(vueResource)
Vue.use(VueI18n)
Vue.use(iView)
Vue.config.lang = 'zhCN'
// Vue.use(VideoPlayer)

// 加载语言包
Object.keys(locale).forEach(lang => {
  Vue.locale(lang, locale[lang])
})
// 加载动画
Object.keys(animated).forEach(key => {
  Vue.transition(key, animated[key])
})
Vue.filter('mToKm', mToKm)
Vue.filter('posSwitch', posSwitch)
Vue.filter('filterNo', filterNo)
Vue.filter('notZero', notZero)
var router = new VueRouter({
  history: true
})
window.router = router
routerMap(router)

router.start(App, '#app')
window.init = function () {
  router.stop()
  router.start(App, '#app')
}
Vue.prototype.open = function (path) {
  let origin = window.location.origin
  window.open(origin + path)
}
window.isbug = false
