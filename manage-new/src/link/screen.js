const SCREEN = {
  component: function (resolve) {
    require(['src/routers/screen/index.vue'], resolve)
  },
  subRoutes: {
    '/home': {
      component: function (resolve) {
        require(['src/routers/screen/home.vue'], resolve)
      }
    },
    '/edu': {
      component: function (resolve) {
        require(['src/routers/screen/edu.vue'], resolve)
      }
    },
    '/match': {
      component: function (resolve) {
        require(['src/routers/screen/match.vue'], resolve)
      }
    },
    '/base': {
      component: function (resolve) {
        require(['src/routers/screen/base.vue'], resolve)
      }
    }
  }
}
export default SCREEN
