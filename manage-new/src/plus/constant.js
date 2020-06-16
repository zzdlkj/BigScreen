export function getSex (index) {
  var obj = {
    1: 'male',
    2: 'female'
  }
  if (obj.index) {
    return obj[index]
  } else {
    return obj[1]
  }
}
