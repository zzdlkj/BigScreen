/*
  得到sessionStorage
  不传参数则返回所有
 */

export function getStorage (arg) {
  var storage = window.sessionStorage
  var obj = {}
  if (arguments.length === 1) {
    return storage[arg] && JSON.parse(storage[arg])
  } else {
    for (let i = 0; i < storage.length; i++) {
      var key = storage.key(i)
      obj[key] = JSON.parse(storage[key])
    }
    return obj
  }
}

/*
  设置sessionStorage
 */
export function setStorage (obj) {
  var storage = window.sessionStorage
  for (let key in obj) {
    storage[key] = JSON.stringify(obj[key])
  }
}
// 设置当前时间
export function formatTime(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.1,(date.getFullYear()+&#x2033;).substring(4&#x2212;RegExp." role="presentation" style="position: relative;">1,(date.getFullYear()+′′).substring(4−RegExp.1,(date.getFullYear()+″).substring(4−RegExp.1, (date.getFullYear() + '').substring(4 - RegExp.1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`({k})`).test(fmt))&#xA0;{&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;let&#xA0;str&#xA0;=&#xA0;o[k]&#xA0;+&#xA0;'';&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;fmt&#xA0;=&#xA0;fmt.replace(RegExp." role="presentation" style="position: relative;">{k})`).test(fmt)) {         let str = o[k] + '';         fmt = fmt.replace(RegExp.{k})`).test(fmt)) {         let str = o[k] + '';         fmt = fmt.replace(RegExp.{k})`).test(fmt)) {         let str = o[k] + '';         fmt = fmt.replace(RegExp.1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
  };
  function padLeftZero(str) {
    return ('00' + str).substring(str.length);
  }
  
export { formatTime }