// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
// // 下面的是新平台的
export function getUserInfo (state) {
  return state.login.login.userinfo
}
// 获取广东大屏数据
export function getScreenData (state) {
  return state.screen.data
}
