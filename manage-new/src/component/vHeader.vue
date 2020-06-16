<template>
  <div class='search' :class="{'nothost': !hosts, 'navPage':isNav}">
  <!-- <keep-alive> -->
    <div class='searchcload'>
	  	<div class="left" style='cursor:pointer;line-height:47px;' @click="getIndex">
	  		<span :style='styleObj'></span>
	  		<span>{{mainTitle}}</span>
	  	</div>
      <div v-if='cfaDemo' class='left' style='font-size: 19px;line-height: 46px;margin-left: 10px;'> | <a href="http://58.56.18.62:8090/#/BINav" style='color: #fff; font-size:14px;margin-left:9px;'>返回导航页</a></div>

      <!-- 教师模式头部导航 -->
        <ul class='pageNav' v-if='level'>
          <li v-for='li in pageNav':class="{'active': pageActive==li.key}" @click='changePage(li)'>
            <span>{{li.name}}</span>
          </li>
        </ul>
	  	<div class="right">
        <ul class='navModal'>
          <li  v-if='isNav'>
            <avatar :src='coachinfo.centerAvatar' :title='coachinfo.nickname' width='28' height='28'></avatar>
            <span style='margin-left:3px;'>{{coachinfo.nickname}}</span>
          </li>
          <li class='notNull'  v-if='isNav'>|</li>
          <li v-if='!cfaDemo&&role!="teacher"'><span @click="changeLang('zhCN')" :class="{'active':lang=='zhCN'}">中文</span> | <span  @click="changeLang('enUS')" :class="{'active':lang=='enUS'}"> English</span></li>
          <li class='notNull'  v-if='isNav&&role!="teacher"'>|</li>
          <li class='dropdown' v-if='false&&isNav'>
            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>管理设置</span><span class="glyphicon glyphicon-menu-down" style="font-size: 14px; margin-left:8px;"></span></a>
            <ul class="dropdown-menu" role='menu'>
              <li v-if='orgNum'><a @click="goManage('org')">机构管理</a></li>
              <li v-if='teamNum'><a @click="goManage('team')">团队管理</a></li>
            </ul>
          </li>
          <li class='dropdown'  v-if='isNav'>
            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>{{$t('nav.header.software')}}</span><span class="glyphicon glyphicon-menu-down" style="font-size: 14px; margin-left:8px;"></span></a>
            <ul class="dropdown-menu" role='menu'>
              <li><a :href="wareUrl">{{$t('nav.header.yjgj')}}</a></li>
            </ul>
          </li>
          <li class='notNull'  v-if='isNav'>|</li>
        </ul>
	      <ul>
	      	<li v-for='navs in nav' :class="{'active': isnav==$index}" @click='loginout($index)' title='退出'>
            <span v-if='navs.classleft' class='home' :style="{background: navs.classleft}"></span>
            <span v-if='navs.name'>{{navs.name}}</span>
            <span :class='navs.classright' v-if='navs.classright'></span>
	      	</li>
	      </ul>
	  	</div>
	  	<div class='cle-both'></div>
    </div>
    <!-- </keep-alive> -->
  </div>
</template>
<script>
// import headImg from 'src/component/headImg'
import avatar from 'src/component/avatar'
import {getUserInfo, getFirmwareUrl} from 'src/vuex/getters'
import {loginOut, clearCompareList, clearCfadata} from 'src/vuex/actions'
import {getSex} from 'src/plus/constant'
import store from 'src/vuex/store'
import severs from 'src/config/severs'
export default {
  // activated: {
  //   this.getCase()
  // },
  name: 'header',
  components: {
    avatar
  },
  props: {
    role: {
      type: String,
      default: ''
    }
  },
  vuex: {
    getters: {
      getUserInfo,
      getFirmwareUrl
    },
    actions: {
      loginOut,
      clearCompareList,
      clearCfadata
    }
  },
  inject: ['reload'],
  data: function () {
    return {
      level: true,
      cfaDemo: false, // 是否是足协演示
      setShow: false,
      hosts: true,
      styleObj: {},
      wareUrl: '',
      nav: [
        {classleft: 'url(/static/images/person/per_info.png) no-repeat 3px -33px', name: this.$t('nav.header.loginOut'), classright: ''}
      ],
      isnav: -1,
      coachinfo: {
        smallAvatar: '',
        name: '--',
        sex: 'male'
      },
      infonum: 16,
      jumpTitle: '进入个人模式',
      routeRole: 'admin',
      mainTitle: this.$t('nav.header.title'),
      roles: '',
      hiddens: true,
      orgNum: 0,
      teamNum: 0,
      lang: 'zhCN',
      pageNav: [
        {name: '首页', path: '/edu/index', key: 'index'},
        {name: '管理中心', path: '/edu/teacherManage', key: 'manage'}
        // {name: '团队管理', path: '/edu/teamManager', key: 'teamManager'}
        // {name: '体育教学', path: '/edu/homework', key: 'homework'},
        // {name: '数据报告', path: '/edu/sportReport', key: 'report'}
      ],
      pageActive: 'index'
    }
  },
  ready () {
    // this.$route.router.replace(this.pageNav[0].path)
    // this.pageActive = 'index'
    let host = window.location.host
    if (this.getUserInfo === undefined) {
      this.loginout()
    }
    if (this.getUserInfo.org_type === 164 || this.getUserInfo.role_id === 5) {
      this.level = false
    } else {
      this.level = true
    }
    this.pageNav.forEach(val => {
      if (this.$route.path === val.path) {
        this.pageActive = val.key
      }
    })
    this.lang = this.getUserInfo.lang
    if (host !== 'pe.sportsdatas.cn' || host !== 'petest.sportsdatas.cn') {
      let hostArr = host.split('.')
      if (hostArr[0] !== 'localhost:8080' && hostArr[0] !== 'mt' && hostArr[0] !== 'mttest') {
        this.hosts = false
        if (hostArr[0] === 'cssf') {
          this.styleObj = {
            background: 'url(' + this.getUserInfo.imgs + ')',
            backgroundRepeat: 'no-repeat',
            width: '75px',
            height: '45px'
          }
        } else {
          this.styleObj = {
            background: 'url(' + this.getUserInfo.imgs + ')',
            backgroundRepeat: 'no-repeat'
          }
        }
        this.mainTitle = this.getUserInfo.domTitle
      } else {
        this.mainTitle = this.$t('nav.header.title1')
      }
    }
    if (this.getUserInfo.uid * 1 === 31783) {
      this.mainTitle = '中国足协足球运动表现数据云'
      this.cfaDemo = true
    }
    if (this.infonum >= 99) {
      this.infonum = 99 + '+'
    }
    this.initData()
    let path = this.$route.path
    if (path.includes('admin/personal')) {
      this.routeRole = 'person'
      this.jumpTitle = '进入管理模式'
    }
    let p = this.$route.path
    if (p.indexOf('person_file') !== -1 || p.indexOf('team_file') !== -1 || p.indexOf('nav') !== -1) {
      this.hiddens = false
    }
    this.wareUrl = this.getFirmwareUrl
    // 设置为英文版本
    // Vue.config.lang = 'enUS'
  },
  computed: {
    isHome () {
      let path = this.$route.path
      return path.includes('index/home') || (path.includes('org') && (!path.includes('org/datacompare')))
    },
    typeName () {
      return this.getUserInfo.typeName
    },
    isNav () {
      let path = this.$route.path
      if (path.includes('/nav') || path.includes('/index') || path.includes('/teacherManage') || path.includes('/teamManager') || path.includes('/home')) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    getIndex () {
      let host = window.location.host
      let url
      console.log(window.location.host)
      console.log(severs.logingo[window.location.host])
      if (host === 'pe.sportsdatas.cn' || host === 'petest.sportsdatas.cn' || host === 'localhost:8080' || host === 'wxjy.sportsdatas.cn') {
        console.log('333333333############')
        url = '/level/index'
        // url = severs.logingo[window.location.host]
      } else if (host === 'edu.sportsdatas.cn' || host === 'edutest.sportsdatas.cn') {
        url = '/edu/index'
      } else if (host === 'gdfc.sportsdatas.cn') {
        url = '/asation/home'
      } else {
        url = '/admin/nav'
      }
      if (this.getUserInfo.uid * 1 === 31783) {
        url = '/admin/cfaHome'
      }
      this.$route.router.go(url)
    },
    goHome () {
      let type = this.getUserInfo.typeName
      let url
      switch (type) {
        case 'student':
          url = '/student/index/home'
          break
        case 'coach':
          url = '/coach/index/home'
          break
        default:
          url = '/org/home'
      }
      this.$route.router.go(url)
    },
    initData () {
      let personId = this.getUserInfo.person_id
      let url = `info/${personId}`
      this.$http.get(url).then(res => {
        if (res.data.code === 200) {
          // console.log(res.data.data)
          let {name, nickname, smallAvatar, sex, centerAvatar} = res.data.data
          let obj = {
            name,
            nickname,
            smallAvatar,
            centerAvatar,
            sex: getSex(sex)
          }
          if (!obj.nickname) {
            obj.nickname = obj.name
          }
          for (var k in obj) {
            if (obj[k] === '' || obj[k] === null) {
              obj[k] = '--'
              if (k === 'smallAvatar' || k === 'centerAvatar') {
                obj[k] = ''
              }
            }
          }
          this.coachinfo = obj
          let data = res.data.data
          if (data.orgName) {
            this.orgNum = data.orgName.length || 0
          }
          if (data.teamsName) {
            this.teamNum = data.teamsName.length || 0
          }
        } else {
          console.log(res.data.code)
        }
      }, error => {
        console.log(error)
      })
    },
    clearCookie () {
      var keys = document.cookie.match(new RegExp('([^ ;][^;]*)(?=(=[^;]*)(;|$))', ['gi']))
      if (keys) {
        for (var i = keys.length; i--;) {
          document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
      }
    },
    loginout (index) {
      this.isnav = index
      let num = this.nav.length - 1
      console.log(index, num)
      if (index === num) {
        this.$http.get('logout').then(res => {
          if (res.data.code === 200) {
            this.clearCookie()
            window.localStorage.clear()
            this.loginOut()
            this.$route.router.replace('/login')
          }
        })
      }
      this.clearCompareList()
      this.clearCfadata()
    },
    jump () {
      let url
      if (this.routeRole === 'admin') {
        console.log('11')
        url = '/admin/personal'
        this.$route.router.go(url)
        this.routeRole = 'person'
        this.jumpTitle = '进入管理模式'
      } else if (this.routeRole === 'person') {
        console.log('22')
        url = '/admin/home'
        this.$route.router.go(url)
        this.routeRole = 'admin'
        this.jumpTitle = '进入个人模式'
      }
    },
    goManage (type) {
      if (this.getUserInfo.is_true * 1) {
        let token = store.state.login.token
        let url = 'http://newadmin.sportsdatas.cn/admin/do_login.html?token=' + token + '&type=' + type
        window.open(url)
      }
    },
    changeLang (lang) {
      console.log('123')
      this.$emit('langchang', lang)
    },
    changePage (li) {
      this.pageActive = li.key
      // this.$router.push({path: li.path})
      this.$route.router.replace('/edu')
      this.$route.router.replace(li.path)
    }
  }
}
</script>
<style scoped>
/**/
  @media only screen and (min-width: 1200px){
    .search{min-width: 1200px;}
    .search .searchcload{ width: 1200px;}
  }
  @media only screen and (max-width: 1199px) {
    .search{min-width: 1024px;}
    .search .searchcload{ width: 1024px;}
  }
  .search{
 	  height:50px;
 	  background: #242834;
 	  color:#EEEEEE;
 	  /*text-align: center;*/
    width:100%;
  }
  .search .searchcload{
  	margin: 0 auto;
  	height:50px;
  	line-height: 50px;
    overflow: hidden;
  }
  .navPage.search .searchcload{
    overflow:inherit;
  }
  .search .searchcload div,.search .searchcload .right>ul{
  	display: inline-block;
  	margin:0px;
  	vertical-align: middle;
  }
  .search .searchcload .right span.search-head{
    width:25px;
    height:25px;
    display: inline-block;
    position: absolute;
    right:5px;
    top:5px;
    background: url(/static/images/person/per_info.png) no-repeat 0px -67px;
  }
  .search .searchcload .right .info-num{
    position: absolute;
    left:399px;
    top: 6px;
    width:22px;
    height:22px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    border-radius: 50%;
    background: #F45365;
  }
  .search .searchcload .left span:nth-child(1){
    display: inline-block;
    width: 50px;
    height: 46px;
    line-height: 46px;
    background: url(/static/images/logo_wihte.png) no-repeat 0px 3px;
    vertical-align: middle;
  }
  .hd-style.search .searchcload .left span:nth-child(1){
    height:34px;
    width: 40px;
    background: url(/static/images/hd_logo.png) no-repeat;
    background-size: 30.6px 32px;
  }
  .nothost.search .searchcload .left span:nth-child(1){
    height:40px;
    width: 40px;
    background-repeat: no-repeat;
  }
  .search .searchcload .left span:nth-child(2){
  	font-size: 19px;
    font-weight: bold;
  }
  .search .searchcload .right{
  	text-align: left;
    position: relative;
  }
  .search .searchcload .right ul{
  	margin-top: -3px;
  }
  .search .searchcload .right ul li{
  	float: left;
    /*width: 95px;*/
    padding-left: 3px;
    padding-right: 3px;
    height:50px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
  }
  .search .searchcload .right ul li span.active{
    color:#db3731;
  }
  .search .searchcload .right ul li.notNull{
    padding-left: 10px;
    padding-right:10px;
    font-size: 18px;
  }
/*导航页面模块开始*/
  .search .searchcload .right ul span.findCoach{
    display: inline-block;
    height: 28px;
    width: 32px;
    background: url(/static/images/coach_icon.png) no-repeat;
    vertical-align: middle;
    background-size: 27px 27px;
  }
  .search .searchcload .right ul li.dropdown>a{
    color:#fff;
    font-size: 14px;
    /*padding: 3px 15px;*/
  }
  .search .searchcload .right ul li.dropdown>a:focus{
    background-color: transparent;
  }
  .search .searchcload .right ul li.dropdown.open>a{
     background-color: transparent;
  }
  .search .searchcload .right ul.dropdown-menu{
    background:#4c5366; line-height: 30px; padding:0px; min-width:90px;
  }
  .search .searchcload .right ul.dropdown-menu>li>a{
    padding:0px 5px;
    line-height: 40px;
    color:#fff;
  }
  .search .searchcload .right ul.dropdown-menu>li>a:hover{
    background:#66708a;
  }
  .search .searchcload .right ul.dropdown-menu>li{
    height:40px;
    width:100%;
    padding:0px;
  }
  .search .searchcload .right ul.dropdown-menu>li a{
    border-bottom: 1px solid #f7f7f7;
  }
  .search .searchcload .right ul.dropdown-menu>li:last-child a{
    border-bottom: none;
  }
/*导航页面模块结束*/
  .search .searchcload .right .form-control{
  	padding-right: 42.5px;
    background: #555E75;
    color: #fff;
    border-radius: 0px;
    border:none;
    height:30px;
  }
  .home{
    display: inline-block;
    /*border:1px solid red;*/
    width:25px;
    height: 25px;
    vertical-align: middle;
    /*background: url(/static/images/person/per_info.png) no-repeat 1px 1px;*/
  }
  .search .searchcload .per_center{
    padding-left: 17px;
    padding-right: 17px;
    border-right: 1px solid #3E4454;
    border-left: 1px solid #3E4454;
    height: 50px;
    margin-left: 30px;
    cursor: pointer;
  }
  .search .searchcload .per_center:hover{
    background: #555E75;
    transition: all .5s ease;
  }
  .search .searchcload .right ul li.modeBtn{
    background: #f7f7f7;
    color: #444;
    height: 29px;
    line-height: 29px;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    margin-right:20px;
  }
  @media print{
    .search{
      display: none;
    }
  }

  .pageNav{
    display: inline-block;
    height:50px;
    margin-left:20px;
  }
  .pageNav li{
    display: inline-block;
    margin: 0px 15px;
    padding: 10px;
    font-size:16px;
    height:48px;
    cursor: pointer;
    line-height: normal;
  }
  .pageNav li span{
    padding:5px;
  }
  .pageNav li.active{
    background:#2f3030;
  }
  .pageNav li.active span{
    border-bottom: 2px solid #fff;
    font-size: normal;
  }
</style>
