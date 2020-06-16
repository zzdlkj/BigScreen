
import screen from 'src/link/screen'

export default function (router) {
  let obj = {}
  obj = {
    '/screen': screen
  }

  router.map(obj)
  router.beforeEach(function (transition) {
    window.scrollTo(0, 0)
    let path = transition.to.path
    if (path.includes('report')) {
      document.querySelector('body').style.backgroundColor = '#fafafa'
    } else {

    }
    transition.next()
  })
  router.afterEach(function (transition) {
  })
  router.alias({
    // 匹配 /a 时就像是匹配 /a/b/c
  })
  router.redirect({
    '*': '/screen/home'
  })
}
