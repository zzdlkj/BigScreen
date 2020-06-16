import {SAVE_SCREEN} from '../types'
//  创建一个对象保持初始状态
const state = {
  data: {}
}
let item = window.localStorage.screen || '{}'
try {
  state.data = JSON.parse(item)
} catch (error) {
  console.log(item)
}

const mutations = {
  [SAVE_SCREEN] (state, obj) {
    state.data = obj
    window.localStorage.screen = JSON.stringify(state.data)
  }
}

export default {
  state,
  mutations
}
