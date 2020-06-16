import {getRound} from 'src/plus/common'
export function filterNo (val) {
  if (val === null || val === '' || val === undefined || val * 1 === 0) {
    return '--'
  } else {
    return val
  }
}
export function mToKm (val) {
  let str = val
  if (typeof val === 'number') {
    if (val > 10000) {
      str = getRound(val / 1000, 1) + 'km'
    } else {
      str = val + 'm'
    }
  }
  return str
}
/**
 * [isNotZero 除0外的价值返回假]
 * @param  {[type]}  val [description]
 * @return {Boolean}     [description]
 */
export function notZero (val) {
  return !(!val && val !== 0)
}
