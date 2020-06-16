// 获取传入的参数
var fs = require('fs')
process.argv.slice(2).forEach(function (fileName) {
  var router = fileName
  console.log(router)
})

fs.readFile('./src/router.js', function (err, data) {
  if (err) throw err

  console.log(data.toString())
})
