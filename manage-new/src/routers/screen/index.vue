<template lang="html">
  <v-header role="student" @langchang='langChange' v-if='headerShow' v-if='isLogin'></v-header>
  <router-view @langchang='langChange'></router-view>
</template>

<script>
import vHeader from 'src/component/vHeader'
import {loginOut} from 'src/vuex/actions'
import {getUserInfo} from 'src/vuex/getters'
export default {
  components: {
    vHeader
  },
  created () {
    // console.log(this.$route.path)
    if (this.$route.query.qr !== undefined && this.$route.query.qr * 1 === 1 || this.$route.path.indexOf('orgMatchEvent') !== -1 || this.$route.path.indexOf('teamMatchEvent') !== -1 || this.$route.path.indexOf('matchEventTeam') !== -1 || this.$route.path.indexOf('matchTeamList') !== -1) {
      this.headerShow = false
    }
    if (this.getUserInfo === undefined) {
      this.$route.router.replace('/login')
      this.reload()
    }
  },
  ready () {},
  data () {
    return {
      headerShow: true,
      isLogin: true,
      inject: ['reload']
    }
  },
  methods: {
    langChange (lang) {
      this.$emit('changelang', lang)
    }
  },
  vuex: {
    getters: {
      getUserInfo
    },
    actions: {
      loginOut
    }
  }
}
</script>

<style lang="css">
  body{
    /*background-color: #2d323f;*/
    background-color: #E4E4E4;
    background-image: url('/static/images/person/bg.png');
    background-repeat: no-repeat ;
    background-size: cover;
    /*height:auto;
    transform-origin: left top;
    transform: scale(0.95, 1);*/
  }
  @media print{
    body{
      width:1132px;
      height:auto;
      transform-origin: left top;
      transform: scale(0.95, 1);
    }
    * {
      /*解决打印的时候背景图像不显示*/
      -webkit-print-color-adjust: exact;
    }
  }
  .modal-open{
    /*overflow: auto;*/
  }
</style>
