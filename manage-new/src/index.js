/*eslint-disable*/
import CheckBox from './components/CheckBox'
import vBar from './components/vBar'
import vBtn from './components/vBtn'

const mtSports = {
  CheckBox,
  vBar,
  vBtn,
  vNav,
  vPanel
}
const install = function (Vue, opts = {}) {

  Object.keys(mtSports).forEach((key) => {
    Vue.component(key, mtSports[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = Object.assign(mtSports, {install})
