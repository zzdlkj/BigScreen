/**
 * [oneOf 当前属性是否在数组内]
 *
 * @method oneOf
 *
 * @param  {[type]} value [字符型]
 * @param  {[type]} arr   [数组]
 *
 * @return {[type]} [description]
 */

export function oneOf (value, arr) {
  return arr.some(key => value === key)
}
