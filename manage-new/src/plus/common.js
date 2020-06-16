/* eslint-disable */
import Vue from "vue";
/**
 * [getRound description]
 * @param  {[type]} num [数字]
 * @param  {[type]} len [保留几位]
 * @return {[type]}     [description]
 */
export function getRound(num, len) {
  var number = Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
  if (isNaN(number)) number = 0;
  if (num === "--") number = "--";
  return number;
}
/**
 *
 * @export 根据字符串来设置权限
 * @param {any} str
 * @param {any} obj
 * @returns
 */
export function setThisViews (str, obj) {
  str = str || ''
  for (let key in obj) {
    if (key === str) {
      obj[key].show = true
      return true
    } else if (obj[key].child) {
      setThisViews(str, obj[key].child)
    }
  }
}
