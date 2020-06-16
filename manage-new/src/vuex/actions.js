// action 会收到 store 作为它的第一个参数
// 这里定义我们vue组件要操作的动作事件, 比如请求一个异步操作,获取其他组件的状态等
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
import api from '../api'
import * as types from './types'

export const localLogin = (store, data) => {
  store.dispatch('LOGIN_SUCESS', data)
}
export const saveUserInfo = (store, data) => {
  // 保存用户登录信息
  store.dispatch(types.SAVE_USER_INFO, data)
}
export const loginOut = ({dispatch}) => {
  dispatch(types.LOGIN_OUT)
}
// export const changeSite = (store, data) => {
//   store.dispatch(types.CHANGE_SITE, data)
// }
// export const changeMenu = ({dispatch}) => {
//   dispatch(types.CHANGE_MENU)
// }

export const saveToken = ({dispatch}, str) => {
  dispatch(types.SAVE_TOKEN, str)
}

export const pushFilter = ({dispatch}, obj) => {
  dispatch(types.PUSH_FILTER, obj)
}

export const delFilter = ({dispatch}, index) => {
  dispatch(types.DEL_FILTER, index)
}

export const clearFilter = ({dispatch}) => {
  dispatch(types.CLEAR_FILTER)
}

export const mainFilter = (store, obj) => {
  store.dispatch(types.MAIN_FILTER, obj)
}

export const compare = (store, obj) => {
  store.dispatch(types.COMPARE, obj)
}

export const delCompare = (store, id) => {
  store.dispatch(types.DEL_COMPARE, id)
}
export const goCompare = (store, arr) => {
  store.dispatch(types.GO_COMPARE, arr)
}

export const clearCompare = (store) => {
  store.dispatch(types.CLEAR_COMPARE)
}

export const sendDetail = (store, obj) => {
  store.dispatch(types.SEND_DETAIL, obj)
}
// 测评类型
export const speciesType = ({state, dispatch}) => {
  if (state.search.speciesType.length === 0) {
    api.getSpeciesType().then(res => {
      if (res.data.code !== 200) return false
      dispatch(types.SET_SPECIES_TYPE, res.data.data)
    })
  }
}
export const yearsAll = ({state, dispatch}, type) => {
  // 获取全部年份
  let key = `${type}Years`
  if (state.search[key].length > 0) return false
  api.getYears({type}).then(res => {
    if (res.data.code !== 200) return false
    dispatch(types.SET_ALL_YEARS, res.data.data, type)
  })
}
// 国籍类型
export const districtType = ({state, dispatch}) => {
  if (state.search.districtType.length === 0) {
    api.getDistrictType().then(res => {
      if (res.data.code !== 200) return false
      dispatch(types.SET_DISTRICT_TYPE, res.data.data)
    })
  }
}
export const areasAction = ({state, dispatch}) => {
  // 将区域 缓存
  if (state.cache.area.length === 0) {
    api.getAreas().then((res) => {
      dispatch(types.JSON_AREA, res.data.area)
    })
  }
}

export const savePrintInfo = ({dispatch}, arr, obj, link) => {
  dispatch(types.SAVE_PRINT_INFO, arr, obj, link)
}
// 存储查询的队伍和个人的id
export const idStore = (store, obj) => {
  store.dispatch(types.ID_STORE, obj)
}
// 校园demo保存班级
export const saveGrade = (store, arr) => {
  store.dispatch(types.SAVE_GRADE, arr)
}

export const showAlert = (store, str, type, autoHide) => {
  // 显示alert弹窗
  store.dispatch(types.SHOW_ALERT, str, type, autoHide)
}

export const closeAlert = (store) => {
  // 关闭alert弹窗
  store.dispatch(types.CLOSE_ALERT)
}

export const showConfirm = (store, str) => {
  // 显示 confirm
  store.dispatch(types.SHOW_CONFIRM, str)
}

export const changeConfirm = (store, bool) => {
  // 更改状态
  store.dispatch(types.CHANGE_CONFIRM, bool)
}

export const pushPrintLink = (store, obj) => {
  // 增加一个链接到vuex
  store.dispatch(types.ADD_PRINT_LINK, obj)
}

export const deletePrintLink = (store, index) => {
  // 移除某一个链接
  store.dispatch(types.DELETE_PRINT_LINK, index)
}
// 更改print的缓存条件
export const changePrintCache = ({dispatch}, type, arr) => {
  dispatch(types.CHANGE_PRINT_CACHE, type, arr)
}

// 保存登陆时视图权限
export const saveViews = ({dispatch}, str) => {
  dispatch(types.SAVE_VIEWS, str)
}
// 导航页选择配置团队以及指标
export const setSelect = ({dispatch}, str) => {
  // 保存选择
  dispatch(types.SELECTED, str)
}
export const clearSelect = (store) => {
  // 删除选择
  store.dispatch(types.CLEAR_SELECTED)
}
// 固件升级下载地址存储
export const setFirmwareUrl = ({dispatch}, str) => {
  dispatch(types.FIRMWARE_URL, str)
}
// 保存获取的团队及人员列表
export const setTeams = ({dispatch}, arr) => {
  // 保存团队列表
  dispatch(types.TEAMS, arr)
}
export const clearTeams = (store) => {
  // 删除选择
  store.dispatch(types.CLEAR_TEAMS)
}
// 保存对比列表
export const setCompare = ({dispatch}, str) => {
  dispatch(types.SAVE_COMPARE, str)
}
export const clearCompareList = (store) => {
  // 清空对比
  store.dispatch(types.CLEAR_COMPARE_LIST)
}
export const deleteCompare = (store, index) => {
  // 删除对比项
  store.dispatch(types.DELECT_COMPARE, index)
}

// 数据深度分析
export const saveAnalysis = ({dispatch}, str) => {
  dispatch(types.SAVE_ANALYSIS, str)
}
export const clearAnalysis = (store) => {
  // 清空对比
  store.dispatch(types.CLEAR_ANALYSIS)
}

// 中足协首页数据存储
export const saveCfadata = ({dispatch}, obj) => {
  dispatch(types.SAVE_CFADATA, obj)
}
export const clearCfadata = (store) => {
  store.dispatch(types.CLEAR_CFADATA)
}
// 广东省大屏
export const saveScreen = ({dispatch}, obj) => {
  dispatch(types.SAVE_SCREEN, obj)
}
