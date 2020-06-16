import {SAVE_CFADATA, CLEAR_CFADATA} from '../types'
const state = {
  data: {}
}

let item = window.localStorage.cfaData || '{}'
state.data = JSON.parse(item)

const mutations = {
  [SAVE_CFADATA] (state, obj) {
    state.data = obj
    window.localStorage.cfaData = JSON.stringify(state.data)
  },
  [CLEAR_CFADATA] (state) {
    state.data = {}
    window.localStorage.cfaData = JSON.stringify(state.data)
  }
}

export default {
  state,
  mutations
}
