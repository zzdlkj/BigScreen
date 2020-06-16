<template>
  <div class='mainBox'>
    <div class="head">
      <div class="headLeft">
        <img v-if="logo" :src="logo" alt="">
        <span>{{configName}}</span>
      </div>
      <div class="headRight">
        <span>powered by 北京动量科技有限责任公司</span>
        <img src="/static/images/gd/setting.png" alt="" @click="jumpSetting">
      </div>
    </div>
    <div class='educationHome'>
      <!-- 左侧开始 -->
      <div class='left'>
        <!-- 左侧第一个卡片 -->
        <div class='left1'>
          <div class='blockTitle'><b></b>信息统计</div>
          <div class="contentTitle" style="margin-top:3vh;">
            <span>注册球员人数</span>
            <span>人</span>
            <span>{{constData.registered.all}}</span>
          </div>
          <!-- 人数下方图例 -->
          <div style="margin-top:0.5vh;">
            <!-- 左部分 -->
            <div class="personNumLeft">
              <!-- 上方图文 -->
              <div class="inlineDiv">
                <div class="sexEchart">
                  <v-bar :Echartobj="sexEcharts"></v-bar>
                </div>
                <div class='fenbu'>
                  <p>男 <span>{{constData.registered.male}}</span> 人</p>
                  <p>女 <span>{{constData.registered.female}}</span> 人</p>
                </div>
              </div>
              <!-- 下方文字 -->
              <div class="echartTitle centerText">男女比例</div>
            </div>
            <!-- 中间线条 -->
            <img style="float:left" class="lineImg" src="/static/images/gd/line1.png" alt="">
            <!-- 右部分 -->
            <div style="float:right" class="personNumRight">
              <div class="ageEchart">
                <v-bar :Echartobj="ageEcharts"></v-bar>
              </div>
              <div class="echartTitle centerText">各年龄层分布</div>
            </div>
          </div>
          <!-- 管辖球队 -->
          <div class="contentTitle" style="margin-top:3vh;">
            <span>注册球队数量</span>
            <span>支</span>
            <span>{{constData.teams.all}}</span>
          </div>
          <!-- 管辖球队下方图例 -->
          <div style="margin-top:0.5vh;">
            <!-- 左部分 -->
            <div class="personNumLeft">
              <!-- 上方图文 -->
              <div class="inlineDiv">
                <div class="sexEchart">
                  <v-bar :Echartobj="sexEcharts0"></v-bar>
                </div>
                <div class='fenbu'>
                  <p>男 <span>{{constData.teams.male}}</span> 支</p>
                  <p>女 <span>{{constData.teams.female}}</span> 支</p>
                </div>
              </div>
              <!-- 下方文字 -->
              <div class="echartTitle centerText">男女比例</div>
            </div>
            <!-- 中间线条 -->
            <img style="float:left" class="lineImg" src="/static/images/gd/line1.png" alt="">
            <!-- 右部分 -->
            <div style="float:right" class="personNumRight">
              <div class="ageEchart">
                <v-bar :Echartobj="ageEcharts1"></v-bar>
              </div>
              <div class="echartTitle centerText">各年龄层分布</div>
            </div>
          </div>
          <div class="contentTitle" style="margin-top:3vh;">
            <span>注册教练人数</span>
            <span>人</span>
            <span>{{constData.coachNum}}</span>
          </div>
        </div>
        <div class="left2">
          <!-- 数字化进程 -->
          <div class='blockTitle' style="margin-top:0.7vh"><b></b>数字化进程</div>
          <div class="inlineDiv" style="margin-top:3vh;">
            <!-- 左 -->
            <div class="leftBottom">
              <div style="text-align:center;">已接入球队</div>
              <div><span class="leftBottomNum">{{gdData.access_arr.team_num.all}}</span><span> 支</span></div>
              <div class="leftBottomEchart">
                <v-bar :Echartobj="sexEcharts1"></v-bar>
              </div>
              <div style="font-size:1.52vh;">男女比例</div>
            </div>
            <div class="lineImg0"></div>
            <!-- 中 -->
            <div class="leftBottom">
              <div style="text-align:center;">已建档球员</div>
              <div><span class="leftBottomNum">{{gdData.access_arr.person_num.all}}</span><span> 人</span></div>
              <div class="leftBottomEchart">
                <v-bar :Echartobj="sexEcharts2"></v-bar>
              </div>
              <div style="font-size:1.52vh;">男女比例</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mid">
        <div class='blockTitle'><b></b>数据概览</div>
        <!-- 上半部分 -->
        <div style="width:100%;height:9vh;margin-top:2.5vh;">
          <div class="midTopItem">
            <div>累计运动次数</div>
            <div><span>{{gdData.all_total.event_time}}</span><span> 次</span></div>
          </div>
          <div class="midTopItem">
            <div>累计运动时长</div>
            <div><span>{{gdData.all_total.duration}}</span><span> {{gdData.all_total&&gdData.all_total.durationUnit?gdData.all_total.durationUnit:'min'}}</span></div>
          </div>
          <div class="midTopItem">
            <div>累计运动人次</div>
            <div><span>{{gdData.all_total.person_time}}</span><span> 人次</span></div>
          </div>
          <div class="midTopItem">
            <div>累计跑动距离</div>
            <div><span>{{gdData.all_total.total_distance}}</span><span> km</span></div>
          </div>
        </div>
        <!-- 重点关注球队 -->
        <div style="width:100%;height:35vh;margin-top:1vh;">
          <div class="contentTitle">
            <span>重点关注球队</span>
          </div>
          <div style="width:100%;height:32.57vh">
              <v-bar :Echartobj="importEcharts1"></v-bar>
          </div>
        </div>
        <div style="font-style:italic;">★只统计比赛数据；黄色为该年龄段标杆数据</div>
        <!-- 下半部分 -->
        <div style="margin-top:0.5vh;">
          <div class="contentTitle" style="border:none;">
            <span>球队月运动负荷趋势</span>
            <span style="font-size:1.5vh;color:#D03F48;margin-right:5%;">{{selectTeamName}}</span>
          </div>
          <div style="height:22vh;margin-top:1vh;">
            <v-bar :Echartobj="importEcharts2"></v-bar>
          </div>
        </div>
      </div>
      <div class="right">
        <div class='blockTitle'><b></b>数据排行</div>
        <div class="contentTitle">
          <span>球员比赛数据排行</span>
        </div>
        <div class="rankList">
          <div class="rankListTitle">
            <table style="width:100%;">
              <tbody>
                <tr>
                  <td class="rankListTitleItem" :class="{'active': changeTag.isMan}">男足</td>
                  <td class="rankListTitleItem" :class="{'active': !changeTag.isMan}" style="border-right:none;">女足</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="rankTeamList">
            <table style="width:100%;">
              <tbody>
                <tr>
                  <td v-for='(index,team) in teamList' class="rankTeamListItem" :class="{'active':changeTag.teamPosition==index,'borderNone':index==teamList.length-1}" :style="{width: 100/teamList.length + '%'}">{{team.name}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="rankTargetList">
            <div class="rankTarget">跑动能力</div>
            <div class="rankTarget">速度耐力</div>
            <div class="rankTarget">最高速度</div>
          </div>
          <div style="float:left;width:100%;padding:0 5px;">
            <table class='rankPlayerList'>
              <tbody>
                <tr v-for='(index,person) in playerList1' :class="{'top':person.top<4}">
                  <td><span>{{person.top}}</span></td>
                  <td><img :src="person.avatar" alt=""></td>
                  <td><p>{{person.name}}</p></td>
                  <td><p>{{person.value}}m</p></td>
                </tr>
              </tbody>
            </table>
            <div style="height: 21.33vh;margin-top:0vh;" class="lineImg1"></div>
            <table class='rankPlayerList'>
              <tbody>
                <tr v-for='(index,person) in playerList2' :class="{'top':person.top<4}">
                  <td><span>{{person.top}}</span></td>
                  <td><img :src="person.avatar" alt=""></td>
                  <td><p>{{person.name}}</p></td>
                  <td><p>{{person.value}}m</p></td>
                </tr>
              </tbody>
            </table>
            <div style="height: 21.33vh;margin-top:0vh;" class="lineImg1"></div>
            <table class='rankPlayerList'>
              <tbody>
                <tr v-for='(index,person) in playerList3' :class="{'top':person.top<4}">
                  <td><span>{{person.top}}</span></td>
                  <td><img :src="person.avatar" alt=""></td>
                  <td><p>{{person.name}}</p></td>
                  <td><p>{{person.value}}m/s</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="contentTitle">
          <span>教练数据排行</span>
        </div>
        <div class="rankList" style="height:25vh;background:none;">
          <div class="rankTargetList">
            <div class="rankTarget">运动次数</div>
            <div class="rankTarget">运动时长</div>
            <div class="rankTarget">平均运动强度</div>
          </div>
          <div style="float:left;width:100%;padding:0 5px;">
            <table class='rankPlayerList' style="height:18vh;">
              <tbody>
                <tr v-for='(index,person) in coachList1' :class="{'top':person.top<4}">
                  <td><span>{{person.top}}</span></td>
                  <td><img :src="person.avatar_center" alt=""></td>
                  <td><p>{{person.name}}</p></td>
                  <td><p>{{person.value}}次</p></td>
                </tr>
              </tbody>
            </table>
            <div style="height: 15vh;margin-top:0vh;" class="lineImg1"></div>
            <table class='rankPlayerList' style="height:18vh;">
              <tbody>
                <tr v-for='(index,person) in coachList2' :class="{'top':person.top<4}">
                  <td><span>{{person.top}}</span></td>
                  <td><img :src="person.avatar_center" alt=""></td>
                  <td><p>{{person.name}}</p></td>
                  <td><p>{{person.value}}{{person.unit}}</p></td>
                </tr>
              </tbody>
            </table>
            <div style="height: 15vh;margin-top:0vh;" class="lineImg1"></div>
            <table class='rankPlayerList' style="height:18vh;">
              <tbody>
                <tr v-for='(index,person) in coachList3' :class="{'top':person.top<4}">
                  <td><span>{{person.top}}</span></td>
                  <td><img :src="person.avatar_center" alt=""></td>
                  <td><p>{{person.name}}</p></td>
                  <td><p>{{person.value}}%</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vBar from 'src/components/vBar'
  import MOBILE from 'src/config/mobile'
  import {getRound} from 'src/plus/common'
  import {getScreenData} from 'src/vuex/getters'
  import {saveScreen} from 'src/vuex/actions'
  export default {
    components: {
      vBar
    },
    data () {
      return {
        configId: 0,
        logo: '',
        configName: '',
        constData: {
          registered: {
            all: 0,
            male: 0,
            female: 0
          },
          teams: {
            all: 0,
            male: 0,
            female: 0
          },
          coachNum: 0
        },
        gdData: {
          access_arr: {
            person_num: {
              all: 0
            },
            team_num: {
              all: 0
            }
          },
          all_total: {
            person_time: 0,
            event_time: 0,
            total_distance: 0,
            duration: 0,
            durationUnit: 'min'
          }
        },
        changeTag: {
          // 球员排行 男
          isMan: true,
          teamPosition: 0
        },
        // 定时器
        timeData: 0,
        timeer: '',
        timeer2: '',
        // 每30秒切换一次数据
        timeTag: 5 * 1000,
        // 每6小时请求一次接口
        timeTag2: 1000 * 60 * 60 * 6,
        // 信息统计注册男女比例
        sexEcharts: {},
        // 信息统计管辖男女比例
        sexEcharts0: {},
        // 信息统计各年龄层分布
        ageEcharts: {},
        ageEcharts1: {},
        // 数字化进程
        sexEcharts1: {},
        sexEcharts2: {},
        // 重点关注 雷达图
        importEcharts1: {},
        // 球队月运动负荷趋势
        importEcharts2: {},
        // 球员排行队伍列表
        teamList: [],
        playerList1: [],
        playerList2: [],
        playerList3: [],
        coachList1: [],
        coachList2: [],
        coachList3: [],
        selectTeamName: ''
      }
    },
    ready () {
      let self = this
      // 获取所有大屏整体配置
      let screen = self.getScreenData
      self.logo = screen.logo
      console.log(screen.refresh_seconds)
      setTimeout(() => {
        if (!screen.configList || screen.configList.length === 0) {
          return
        }
        console.log(screen.screenTag)
        screen.screenTag = screen.screenTag + 1
        if (screen.screenTag > screen.configList.length - 1) {
          screen.screenTag = 0
        }
        self.saveScreen(JSON.parse(JSON.stringify(screen)))
        let index = parseInt(screen.configList[screen.screenTag].index)
        let jump = ''
        if (index === 1) {
          jump = '/screen/home'
        } else if (index === 2) {
          jump = '/screen/match'
        } else if (index === 3) {
          jump = '/screen/edu'
        } else if (index === 4) {
          jump = '/screen/base'
        }
        console.log(jump)
        this.$route.router.go(jump)
      }, screen.refresh_seconds * 1000)
      self.configId = screen.configList[screen.screenTag].configId
      // self.configId = 1
      // 获取这个大屏的数据
      self.getData()
      self.timeer2 = setInterval(() => {
        clearInterval(self.timeer)
        self.timeData = 0
        self.getData()
      }, self.timeTag2)
    },
    methods: {
      jumpSetting () {
        window.open('http://newadmin.sportsdatas.cn/admin/login.html')
      },
      getData () {
        let self = this
        let url = 'get_base_tv_info?config_id=' + self.configId
        self.$http.get(url).then(res => {
          if (res.data.code === 200) {
            self.gdData = res.data.data
            self.configName = self.gdData.name
            self.timeTag = self.gdData.refresh_seconds * 1000
            self.setData()
          }
        })
      },
      setData () {
        // 信息统计
        this.setConstInfo()
        // 数字化进程
        this.setLeftBottomData()
        this.setAllTotalData()
        this.setCoachList()
        // 需要轮播的数据
        this.setReload()
      },
      // 教练列表
      setCoachList () {
        this.coachList1 = this.gdData.coach_info.event_time
        if (this.coachList1 && this.coachList1.length > 0) {
          this.coachList1.forEach((item, key) => {
            item.top = key + 1
            // if (item.name.length > 3) {
            //   item.name = item.name.substring(0, 3)
            // }
            if (!item.avatar || item.avatar === '') {
              item.avatar = 'http://api.sportsdatas.cn/Upload/avatar/user_pic.png'
            }
            item.value = item.event_time
          })
        }
        this.coachList2 = this.gdData.coach_info.seconds
        if (this.coachList2 && this.coachList2.length > 0) {
          this.coachList2.forEach((item, key) => {
            item.top = key + 1
            // if (item.name.length > 3) {
            //   item.name = item.name.substring(0, 3)
            // }
            if (!item.avatar || item.avatar === '') {
              item.avatar = 'http://api.sportsdatas.cn/Upload/avatar/user_pic.png'
            }
            let value = getRound(item.seconds / 60, 0)
            let unit = 'min'
            if (value > 9999) {
              value = getRound(item.seconds / 3600, 0)
              unit = 'h'
            }
            item.value = value
            item.unit = unit
          })
        }
        this.coachList3 = this.gdData.coach_info.load_avg
        if (this.coachList3 && this.coachList3.length > 0) {
          this.coachList3.forEach((item, key) => {
            item.top = key + 1
            // if (item.name.length > 3) {
            //   item.name = item.name.substring(0, 3)
            // }
            if (!item.avatar || item.avatar === '') {
              item.avatar = 'http://api.sportsdatas.cn/Upload/avatar/user_pic.png'
            }
            item.value = getRound(item.load_avg, 0)
          })
        }
      },
      setAllTotalData () {
        this.gdData.all_total.duration = parseInt(this.gdData.all_total.duration / 60)
        if (this.gdData.all_total.duration > 999) {
          this.gdData.all_total.durationUnit = 'h'
          this.gdData.all_total.duration = parseInt(this.gdData.all_total.duration / 60)
        }
        this.gdData.all_total.total_distance = parseInt(this.gdData.all_total.total_distance / 1000)
      },
      setConstInfo () {
        this.constData = this.gdData.const_info
        let height = document.documentElement.clientHeight || document.body.clientHeight
        // 注册球员
        this.constData.registered.all = this.constData.registered.male + this.constData.registered.female
        let sexData = JSON.parse(JSON.stringify(MOBILE.SEX_FENBU0))
        sexData.series[0].data[0].value = this.constData.registered.male
        sexData.series[0].data[1].value = this.constData.registered.female
        this.sexEcharts = sexData
        let ageData = JSON.parse(JSON.stringify(MOBILE.AGE_FENBU))
        let regList = this.constData.registered.birthday
        let list = []
        regList.forEach(v => {
          let obj = {
            name: v.year,
            value: v.value
          }
          list.push(obj)
        })
        ageData.series[0].data = list
        ageData.series[0].label.normal.fontSize = 10 * height / 1050
        this.ageEcharts = ageData
        // 管辖球队
        this.constData.teams.all = this.constData.teams.male + this.constData.teams.female
        let sexData1 = JSON.parse(JSON.stringify(MOBILE.SEX_FENBU0))
        sexData1.series[0].data[0].value = this.constData.teams.male
        sexData1.series[0].data[1].value = this.constData.teams.female
        this.sexEcharts0 = sexData1
        let ageData1 = JSON.parse(JSON.stringify(MOBILE.AGE_FENBU))
        let regList1 = this.constData.teams.birthday
        let list1 = []
        regList1.forEach(v => {
          let obj = {
            name: v.year,
            value: v.value
          }
          list1.push(obj)
        })
        ageData1.series[0].data = list1
        ageData1.series[0].label.normal.fontSize = 10 * height / 1050
        this.ageEcharts1 = ageData1
      },
      setLeftBottomData () {
        //  已接入球队
        let all = this.gdData.access_arr.person_num.all
        if (all >= 100000) {
          this.gdData.access_arr.person_num.all = getRound(all / 10000, 1) + 'w'
        }
        let sexData1 = JSON.parse(JSON.stringify(MOBILE.SEX_FENBU1))
        let man1 = this.gdData.access_arr.team_num.male
        let woman1 = this.gdData.access_arr.team_num.female
        sexData1.series[0].data[0].value = man1
        let manPer1 = getRound(man1 / (man1 + woman1) * 100, 0)
        sexData1.series[0].data[0].name = manPer1 + '%'
        sexData1.series[0].data[1].value = woman1
        sexData1.series[0].data[1].name = (100 - manPer1) + '%'
        this.sexEcharts1 = sexData1
        // 已建档球员
        let sexData2 = JSON.parse(JSON.stringify(MOBILE.SEX_FENBU1))
        let man2 = this.gdData.access_arr.person_num.male
        let woman2 = this.gdData.access_arr.person_num.female
        sexData2.series[0].data[0].value = man2
        let manPer2 = getRound(man2 / (man2 + woman2) * 100, 0)
        sexData2.series[0].data[0].name = manPer2 + '%'
        sexData2.series[0].data[1].value = woman2
        sexData2.series[0].data[1].name = (100 - manPer2) + '%'
        this.sexEcharts2 = sexData2
      },
      setReload () {
        let self = this
        self.setPlayerList()
        self.timeer = setInterval(() => {
          // if (self.timeData !== 1) {
          //   self.timeData += 1
          // }
          self.timeData += 1
          self.setPlayerList()
        }, self.timeTag)
      },
      setPlayerList () {
        let teamData = this.gdData.team_concern
        teamData.sort(function (a, b) {
          return a.team_sex - b.team_sex
        })
        let red = '#ee5e67'
        let gray = '#393f5c'
        let yellow = '#d0c62e'
        // 设置重点关注球队
        let index = this.timeData % teamData.length
        let importData1 = JSON.parse(JSON.stringify(MOBILE.IMPORT_ANGLE))
        let colors = []
        let selected = {}
        let lData = []
        let tData = []
        let height = document.documentElement.clientHeight || document.body.clientHeight
        for (let i = 0; i < teamData.length; i++) {
          // 设置色值
          if (i === 0) {
            colors.push(red)
          }
          colors.push(red)
          // 设置legend选中
          let item = teamData[i]
          selected[item.name] = index === i
          // legend颜色设置
          let obj1 = {
            name: item.name,
            textStyle: {
              fontSize: 15 * height / 1050,
              color: index === i ? red : gray
            }
          }
          lData.push(obj1)
          // 标杆值
          let obj2 = {
            value: [500, 500, 500, 500, 500],
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: yellow
              }
            },
            lineStyle: {
              normal: {
                color: yellow
              }
            }
          }
          // 实际值
          let obj3 = {
            value: [item.teams.totalDistance5Min, item.teams.trimp, item.teams.maxPmetMax, item.teams.speedMaxMax, item.teams.distanceMax1Max],
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: red
              }
            },
            name: item.name,
            lineStyle: {
              normal: {
                color: red
              }
            }
          }
          if (i === 0) {
            tData.push(obj2)
          }
          tData.push(obj3)
        }
        importData1.color = colors
        importData1.legend.selected = selected
        importData1.legend.data = lData
        importData1.series[0].data = tData
        this.importEcharts1 = importData1
        // 球队月运动负荷趋势
        let importData2 = JSON.parse(JSON.stringify(MOBILE.IMPORT_LINER))
        this.selectTeamName = teamData[index].name
        let timeList = teamData[index].time_list
        let xtList = []
        let stList = []
        timeList.forEach(v => {
          xtList.push(v.date.substring(0, 7))
          stList.push(v.value)
        })
        importData2.xAxis[0].data = xtList
        importData2.xAxis[0].axisLabel.textStyle.color = '#38a7ee'
        importData2.xAxis[0].axisLabel.textStyle.fontSize = 9
        importData2.series[0].data = stList
        this.importEcharts2 = importData2
        // 设置人员列表 (区分男女)
        let manTeam = []
        let womanTeam = []
        for (let i = 0; i < teamData.length; i++) {
          let item = teamData[i]
          if (item.team_sex === 2) {
            womanTeam.push(item)
          } else {
            manTeam.push(item)
          }
        }
        let index1 = this.timeData % teamData.length
        this.changeTag.isMan = index1 < manTeam.length
        let tList = []
        // 所有队伍名字
        if (this.changeTag.isMan) {
          this.changeTag.teamPosition = index1
          for (let i = 0; i < manTeam.length; i++) {
            tList.push(manTeam[i])
          }
        } else {
          this.changeTag.teamPosition = index1 - manTeam.length
          for (let i = 0; i < womanTeam.length; i++) {
            tList.push(womanTeam[i])
          }
        }
        this.teamList = tList
        // 当前轮播队伍
        let teamInfo = teamData[index1]
        let pList1 = []
        let pList2 = []
        let pList3 = []
        let infoList1 = teamInfo.persons.totaldistance_5min_max
        infoList1.forEach((v, k) => {
          if (!v.avatar || v.avatar === '') {
            v.avatar = 'http://api.sportsdatas.cn/Upload/avatar/user_pic.png'
          }
          v.top = k + 1
          v.value = getRound(v.value, 0)
          if (v.name.length > 3) {
            v.name = v.name.substring(0, 3)
          }
          pList1.push(v)
        })
        let infoList2 = teamInfo.persons.distance_max1_max
        infoList2.forEach((v, k) => {
          if (!v.avatar || v.avatar === '') {
            v.avatar = 'http://api.sportsdatas.cn/Upload/avatar/user_pic.png'
          }
          v.top = k + 1
          v.value = getRound(v.value, 0)
          if (v.name.length > 3) {
            v.name = v.name.substring(0, 3)
          }
          pList2.push(v)
        })
        let infoList3 = teamInfo.persons.speed_max_max
        infoList3.forEach((v, k) => {
          if (!v.avatar || v.avatar === '') {
            v.avatar = 'http://api.sportsdatas.cn/Upload/avatar/user_pic.png'
          }
          v.top = k + 1
          v.value = getRound(v.value, 1)
          if (v.name.length > 3) {
            v.name = v.name.substring(0, 3)
          }
          pList3.push(v)
        })
        this.playerList1 = pList1
        this.playerList2 = pList2
        this.playerList3 = pList3
      }
    },
    computed: {
    },
    vuex: {
      actions: {
        saveScreen
      },
      getters: {
        getScreenData
      }
    }
  }
</script>
<style lang="less" scoped>
@font-face {
  font-family: bebas;
  src: url('/static/fonts/BEBAS.TTF') format('truetype');
}
.head{
  height: 7.62vh;
  line-height: 7.62vh;
  width: 100%;
  background: #000000;
  .headLeft{
    margin-left: 2.9%;
  }
  .headLeft img{
    position: relative;
    height: 4.76vh;
    width: 4.76vh;
    top: -0.48vh;
    border-radius: 50%;
  }
  .headLeft span{
    margin-left: 0.95vh;
    font-size: 2.57vh;
    color: #EEEEEE
  }
  .headRight{
    display: inline-block;
    position: absolute;
    right: 2.9%;
    font-size: 1.72vh;
    color: #ffffff;
    top:2vh;
    >img{
      width: 2.5vh;
      height: 2.5vh;
      border-radius: 50%;
    }
  }
}
.mainBox{
  height: 100vh;
  background: url('/static/images/gd/bg.jpg') no-repeat;
  background-position:0 7.62vh;
  background-size: 100% 92.38vh;
  width:100%;
  position: fixed;
  top: 0;
  left: 0;
  .educationHome{
    padding:4vh 3.02%;
    overflow: hidden;
    height:92.38vh;
    .left{
      float: left;
      width: 19.32%;
      height: 88.38vh;
      .left1{
        padding:0 5%;
        padding-top:0.5vh;
        height: 53.53vh;
        margin-bottom: 2vh;
        background:url('/static/images/gd/left1.png') no-repeat;
        background-size: 100% 53.53vh;
      }
      .left2{
        padding:0 5%;
        padding-top:0.5vh;
        margin-top: 1.64vh;
        height: 28.53vh;
        background:url('/static/images/gd/left2.png') no-repeat;
        background-size: 100% 28.53vh;
      }
    }
    .mid{
      float: left;
      margin-left: 1.5%;
      margin-right: 1.5%;
      width: 38.8%;
      height: 84vh;
      padding:0 2%;
      padding-top:0.5vh;
      margin-bottom: 2vh;
      background:url('/static/images/gd/mid1.png') no-repeat;
      background-size: 100% 84vh;
      .midTopItem{
        width: 24.5%;
        display: inline-block;
        text-align: center;
        color: #38A7EE;
        font-size: 1.91vh;
        >div:nth-child(2){
          margin-top: 2vh;
          >span:first-child{
            color: #d0c62e;
            font-family: bebas;
            font-size: 2vh;
          }
          >span:last-child{
            color: #38A7EE;
            font-size: 1.6vh;
          }
        }
      }
    }
    .right{
      float: left;
      width: 38.8%;
      height: 84vh;
      padding:0 2%;
      padding-top:0.5vh;
      background:url('/static/images/gd/mid1.png') no-repeat;
      background-size: 100% 84vh;
      .rightTopItem{
        width: 45%;
        float: left;
      }
      .rankList{
        width: 100%;
        display: inline-block;
        height: 44vh;
        margin-top: 0.6vh;
        text-align: center;
        font-size: 1.72vh;
        color: #38A7EE;
        padding: 0 2%;
        .active{
          color: #D03F48;
        }
        .rankListTitle{
          margin-top: 0.5vh;
          .rankListTitleItem{
            width: 50%;
            border-bottom: 1px solid #38A7EE;
            border-right: 1px solid #38A7EE;
          }
        }
        .rankTeamList{
          float: left;
          margin-top: 10px;
          width: 100%;
          .rankTeamListItem{
            float: left;
            list-style-type: none;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 1.52vh;
            text-align:center;
            border-bottom: 1px solid #38A7EE;
            border-right: 1px solid #38A7EE;
            color: #38A7EE;
          }
          .rankTeamListItem.active{color: #D03F48;}
          .rankTeamListItem.borderNone{border-right: none;}
        }
        .rankTargetList{
          width: 100%;
          margin-top: 0.5vh;
          float: left;
          .rankTarget{
            float: left;
            width: 33.3%;
          }
        }
        .rankPlayerList{
          width: 32%;
          float: left;
          height: 35vh;
          >tbody>tr>td{
            padding:0vh;
            height: 1.5vh;
            line-height: 1.5vh;
            border: 0;
            font-size: 1.2vh;
            color:#36b8e5;
          }
          >tbody>tr>td:first-child span{
            display: inline-block;
            width: 1.2vw;
            height: 1.2vw;
            text-align: center;
            line-height: 1.2vw;
            vertical-align: middle;
            border:1px solid #11408c;
          }
          >tbody>tr>td:nth-child(2) img{
            width: 1.3vw;
            height: 1.3vw;
            vertical-align: middle;
            border-radius: 50%;
          }
          >tbody>tr>td:nth-child(3) {
            text-align: left;
            white-space: nowrap;
            width: 25%;
            font-size: 1.4vh;
            padding-left: 5px;
          }
          >tbody>tr>td:nth-child(3) p{
            white-space: nowrap;
            width: 2vw;
          }
          >tbody>tr>td:last-child {
            text-align: right;
            width: 40%;
            white-space: nowrap;
          }
          >tbody>tr>td:last-child p{
            width: 3vw;
            float: right;
            white-space: nowrap;
          }
          >tbody>tr.top td:first-child span{
            border:1px solid #d0c62e;
            color: #d0c62e;
          }
          >tbody>tr.top td:last-child{
            color: #d0c62e;
          }
        }
      }
    }
    .blockTitle{
      font-size: 2.29vh;
      font-weight: bold;
      color:#36b8e5;
      height: 4vh;
      line-height: 4vh;
      display: inline-block;
      b{
        display: inline-block;
        height: 2vh;
        position: relative;
        bottom: 0.2vh;
        width:5px;
        background: #36b8e5;
        vertical-align: middle;
        margin-right:5px;
      }
    }
    .contentTitle{
      display: inline-block;
      font-size: 1.91vh;
      width: 100%;
      color: #38a7ee;
      margin-top: 1vh;
      border-bottom: 1px solid #3484d2;
      span:nth-child(1){
        float: left;
      }
      span:nth-child(3){
        font-size: 2vh;
        position: relative;
        right: 10px;
        bottom: 0.5vh;
        float: right;
        font-family: bebas;
        color: #d0c62e;
      }
      span:nth-child(2){
        float: right;
      }
    }
    .echartTitle{
      font-size: 1.43vh;
      color: #38A7EE;
    }
    .centerText{
      text-align: center;
    }
    .ageFenBuEchart{
      margin-top: 1vh;
      height: 11.05vh;
    }
    .lineImg{
      height: 11.43vh;
    }
    .lineImg0{
      height: 11.43vh;
      width: 2%;
      background:url('/static/images/gd/line1.png') no-repeat 50% 50%;
      background-size: contain;
    }
    .lineImg1{
      width: 2%;
      height: 12.38vh;
      background:url('/static/images/gd/line1.png') no-repeat 50% 50%;
      background-size: contain;
      float:left;
      margin-top:2vh;
    }
    .sexEchart{
      padding-top: 0.5vh;
      width: 50%;
      height: 9vh;
    }
    .ageEchart{
      width: 100%;
      height: 9vh;
    }
    .inlineDiv{
      >div{
        display: inline-block;
        vertical-align: middle;
      }
    }
    .personNumLeft{
      float: left;
      height: 11.3vh;
      width: 49%;
    }
    .personNumRight{
      float: right;
      height: 11.3vh;
      width: 49%;
    }
    .fenbu{
      padding: 1vh 0;
      p{
        font-size: 1.43vh;
        width: 2vw;
        white-space: nowrap;
        color: #36b8e5;
        line-height: 3vh;
        span{
          font-size:1.71vh;
          font-family: bebas;
          margin: 0 3px;
        }
      }
      p:last-child{
        color: #ee5e67;
      }
    }
    .leftBottom{
      text-align: center;
      width: 47%;
      font-size: 1.71vh;
      color: #38A7EE;
      .leftBottomEchart{
        height: 8vh;
      }
      .leftBottomNum{
        font-size: 2.1vh;
        font-family: bebas;
        color: #D0C62E;
      }
    }
    .rightTop{
      text-align: center;
      width: 32%;
      float: left;
      margin-top: 0.5vh;
      font-size: 1.33vh;
      color: #38A7EE;
      .rightTopEchart{
        height: 8vh;
      }
      .rightTopText{
        font-size: 1.14vh;
        width: 100%;
        text-align: center;
        white-space: nowrap;
        color: #38A7EE;
        >span:nth-child(1){
          float: left;
        }
        >span:nth-child(2){
          float: right;
        }
      }
      .rightTopNum0{
        position: relative;
        top: -68%;
        font-family: bebas;
      }
      .rightTopNum{
        font-size: 1.14vh;
        font-family: bebas;
        color: #38A7EE;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  
}

</style>
