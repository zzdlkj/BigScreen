<template>
  <div class='mainBox'>
    <div class="head">
      <div class="headLeft">
        <img :src="logo" alt="">
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
          <div class='blockTitle'><b></b>数据概览</div>
          <div style="margin-top:3.5vh;" class="contentTitle">
            <span>举办赛事数量</span>
            <span>届</span>
            <span>{{constData.match_num}}</span>
          </div>
          <div style="margin-top:3.5vh;" class="contentTitle">
            <span>比赛场次</span>
            <span>场</span>
            <span>{{constData.event_num}}</span>
          </div>
        </div>
        <div class="left2">
          <div class='blockTitle'><b></b>数据概览</div>
          <div style="margin-top:2.5vh;" class="contentTitle">
            <span>已接入智慧赛事</span>
            <span>届</span>
            <span>{{accessData.match_num}}</span>
          </div>
          <div class="matchTotal">
            <div style="width:100%;">
              <div class="matchTotalItem">
                <div>{{accessData.team_num}}</div>
                <div>累计采集队伍</div>
              </div>
              <div class="matchTotalItem">
                <div>{{accessData.event_time}}</div>
                <div>比赛场次采集</div>
              </div>
            </div>
            <div style="width:100%;">
              <div class="matchTotalItem">
                <div>{{accessData.person_times}}</div>
                <div>采集球员人次</div>
              </div>
              <div class="matchTotalItem">
                <div>{{accessData.person_num}}</div>
                <div>建立球员档案</div>
              </div>
            </div>
          </div>
          <div class="matchGroupName">
            <div>少年组</div>
            <div>青年组</div>
            <div>成年组</div>
          </div>
          <div style="height:16.5vh">
            <div class="leftBottom">
              <div class="leftBottomEchart">
                <v-bar :Echartobj="totalData.juvenileEchart"></v-bar>
              </div>
              <div style="padding: 0 8%;">
                <table class="echartNum">
                  <tbody style="vertical-align: baseline;">
                    <tr style="width:100%;">
                      <td style="width:15%;"><b class="echartNumTag"></b></td>
                      <td style="width:15%;">男</td>
                      <td style="width:55%;">{{accessData.person_age_arr.juvenile['1']}}</td>
                      <td style="width:15%;">人</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style="padding: 0 8%;">
                <table class="echartNum1">
                  <tbody style="vertical-align: baseline;">
                    <tr style="width:100%;">
                      <td style="width:15%;"><b class="echartNumTag1"></b></td>
                      <td style="width:15%;">女</td>
                      <td style="width:55%;">{{accessData.person_age_arr.juvenile['2']}}</td>
                      <td style="width:15%;">人</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="leftBottom">
              <div class="leftBottomEchart">
                <v-bar :Echartobj="totalData.youthEchart"></v-bar>
              </div>
              <div style="padding: 0 8%;">
                <table class="echartNum">
                  <tbody style="vertical-align: baseline;">
                    <tr style="width:100%;">
                      <td style="width:15%;"><b class="echartNumTag"></b></td>
                      <td style="width:15%;">男</td>
                      <td style="width:55%;">{{accessData.person_age_arr.youth['1']}}</td>
                      <td style="width:15%;">人</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style="padding: 0 8%;">
                <table class="echartNum1">
                  <tbody style="vertical-align: baseline;">
                    <tr style="width:100%;">
                      <td style="width:15%;"><b class="echartNumTag1"></b></td>
                      <td style="width:15%;">女</td>
                      <td style="width:55%;">{{accessData.person_age_arr.youth['2']}}</td>
                      <td style="width:15%;">人</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="leftBottom" style="background:none;">
              <div class="leftBottomEchart">
                <v-bar :Echartobj="totalData.adultEchart"></v-bar>
              </div>
              <div style="padding: 0 8%;">
                <table class="echartNum">
                  <tbody style="vertical-align: baseline;">
                    <tr style="width:100%;">
                      <td style="width:15%;"><b class="echartNumTag"></b></td>
                      <td style="width:15%;">男</td>
                      <td style="width:55%;">{{accessData.person_age_arr.adult['1']}}</td>
                      <td style="width:15%;">人</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style="padding: 0 8%;">
                <table class="echartNum1">
                  <tbody style="vertical-align: baseline;">
                    <tr style="width:100%;">
                      <td style="width:15%;"><b class="echartNumTag1"></b></td>
                      <td style="width:15%;">女</td>
                      <td style="width:55%;">{{accessData.person_age_arr.adult['2']}}</td>
                      <td style="width:15%;">人</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右边内容 -->
      <div class="rightContent">
        <div class='blockTitle' style="width:100%;"><b></b>重点赛事</div>
        <div class="matchInfo">
          <div style="margin-top:2.5vh;" class="contentTitle">
            <span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 22em;">{{matchData.all.name}}数据概况</span>
          </div>
          <div style="width:100%;overflow: auto;">
            <div class="matchInfoItem">
              <div>{{matchData.all.team_num}}</div>
              <div>采集队伍</div>
            </div>
            <div class="matchInfoItem line">
              <div>{{matchData.all.person_num}}</div>
              <div>采集人数</div>
            </div>
            <div class="matchInfoItem">
              <div>{{matchData.all.event_time}}</div>
              <div>采集比赛场次</div>
            </div>
            <div class="matchInfoItem">
              <div>{{matchData.all.person_times}}</div>
              <div>采集人次</div>
            </div>
          </div>
          <div style="margin-top:2.5vh;" class="contentTitle">
            <span>进球场次分布</span>
          </div>
          <div>
            <div class="timeInfo">
              <div class="timeEchart">
                <v-bar :Echartobj="matchData.timeEcharts"></v-bar>
              </div>
              <div style="float:left;width:20%;height:100%;">
                <div class="pointItem">
                  <div>{{matchData.all.score}}</div>
                  <div>总进球数</div>
                </div>
                <div class="pointItem">
                  <div>{{matchData.all.score_avg}}</div>
                  <div>场均进球数</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右上方 -->
        <div class="rightRight">
          <!-- 人员排行 -->
          <div v-if="showPlayers">
            <div style="margin-top:2.5vh;" class="contentTitle">
              <span>{{teamData.name}}球员排行榜</span>
            </div>
            <div class="rankTargetList">
              <div class="rankTarget">总跑动距离</div>
              <div class="rankTarget">总高强度跑</div>
              <div class="rankTarget">最高速度</div>
            </div>
            <!-- 人员列表 -->
            <div class="playerList">
              <table class="playerList1">
                <tbody style="vertical-align: baseline;">
                  <tr style="width:100%;" v-for='(index,person) in playerList0' :class="{'top':person.top<4}">
                    <td style="width:15%;"><span>{{person.top}}</span></td>
                    <td style="width:20%;"><p>{{person.name}}</p></td>
                    <td style="width:35%;"><p>{{person.sName}}</p></td>
                    <td style="width:30%;"><p>{{person.value}}{{person.unit}}</p></td>
                  </tr>
                </tbody>
              </table>
              <div class="lineImg1"></div>
              <table class="playerList1">
                <tbody style="vertical-align: baseline;">
                  <tr style="width:100%;" v-for='(index,person) in playerList1' :class="{'top':person.top<4}">
                    <td style="width:15%;"><span>{{person.top}}</span></td>
                    <td style="width:20%;"><p>{{person.name}}</p></td>
                    <td style="width:35%;"><p>{{person.sName}}</p></td>
                    <td style="width:30%;"><p>{{person.value}}{{person.unit}}</p></td>
                  </tr>
                </tbody>
              </table>
              <div class="lineImg1"></div>
              <table class="playerList1">
                <tbody style="vertical-align: baseline;">
                  <tr style="width:100%;" v-for='(index,person) in playerList2' :class="{'top':person.top<4}">
                    <td style="width:15%;"><span>{{person.top}}</span></td>
                    <td style="width:20%;"><p>{{person.name}}</p></td>
                    <td style="width:35%;"><p>{{person.sName}}</p></td>
                    <td style="width:30%;"><p>{{person.value}}m/s</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- 雷达图 -->
          <div v-else>
            <div style="margin-top:2.5vh;" class="contentTitle">
              <span>赛事数据概况</span>
            </div>
            <div style="width:100%;height:34vh;margin-top:2vh">
               <v-bar :Echartobj="matchData.teamRadar"></v-bar>
            </div>
          </div>
        </div>
        <!-- 底部队伍排行 -->
        <div style="margin-top:2vh;" class="contentTitle">
          <span>{{teamData.name}}队伍排行</span>
        </div>
        <div style="width:100%;height:22.48vh;margin-top:3vh">
          <v-bar :Echartobj="teamRank"></v-bar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vBar from 'src/components/vBar'
  import MOBILE from 'src/config/mobile'
  import {getRound} from 'src/plus/common'
  import matchJson from './test1.json'
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
        height: 0,
        configName: '',
        showPlayers: false,
        allData: {},
        accessData: {
          person_age_arr: {
            juvenile: {
              '1': 0,
              '2': 0
            },
            youth: {
              '1': 0,
              '2': 0
            },
            adult: {
              '1': 0,
              '2': 0
            }
          }
        },
        constData: {
          person: 0,
          match: 0
        },
        totalData: {
          juvenileEchart: {},
          youthEchart: {},
          adultEchart: {}
        },
        matchList: [],
        teamData: {},
        matchData: {
          all: {
            name: '',
            team_num: 0,
            person_num: 0,
            event_time: 0,
            person_times: 0,
            score: 0,
            score_avg: 0
          },
          timeEcharts: {},
          teamRadar: {}
        },
        teamRank: {},
        playerList0: [],
        playerList1: [],
        playerList2: [],
        // 定时器
        targetTag: 0,
        teamTag: 0,
        matchTag: 0,
        timeer: '',
        timeer2: '',
        // 每30秒切换一次数据
        timeTag: 5 * 1000,
        // 每6小时请求一次接口
        timeTag2: 1000 * 60 * 60 * 6
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
      // 获取这个大屏的数据
      self.getData()
      self.timeer2 = setInterval(() => {
        clearInterval(self.timeer)
        self.teamTag = 0
        self.matchTag = 0
        self.targetTag = 0
        self.getData()
      }, self.timeTag2)
    },
    methods: {
      jumpSetting () {
        window.open('http://newadmin.sportsdatas.cn/admin/login.html')
      },
      getData () {
        this.height = document.documentElement.clientHeight || document.body.clientHeight
        let self = this
        self.allData = matchJson.data
        self.timeTag = self.allData.refresh_seconds * 1000
        self.configName = self.allData.name
        self.setData()
      },
      setData () {
        this.constData = this.allData.const_info
        this.accessData = this.allData.access_arr
        // 数据概览
        let fontSize = 6 * this.height / 525
        // 少年
        let sexData1 = JSON.parse(JSON.stringify(MOBILE.SEX_FENBU1))
        // let data = {
        //   name: 100000 + '场',
        //   label: {
        //     normal: {
        //       show: true,
        //       fontSize: fontSize,
        //       position: 'center',
        //       color: '#38a7ee'
        //     }
        //   }
        // }
        // sexData1.series[0].data.push(data)
        let man1 = this.accessData.person_age_arr.juvenile['1']
        let woman1 = this.accessData.person_age_arr.juvenile['2']
        sexData1.series[0].data[0].value = man1
        sexData1.series[0].data[0].label.normal.fontSize = fontSize
        let manPer1 = man1 === woman1 ? 50 : getRound(man1 * 100 / (man1 + woman1), 0)
        sexData1.series[0].data[0].name = manPer1 + '%'
        sexData1.series[0].data[1].value = woman1
        sexData1.series[0].data[1].label.normal.fontSize = fontSize
        sexData1.series[0].data[1].name = (100 - manPer1) + '%'
        this.totalData.juvenileEchart = sexData1
        // 青年
        let sexData2 = JSON.parse(JSON.stringify(MOBILE.SEX_FENBU1))
        let man2 = this.accessData.person_age_arr.youth['1']
        let woman2 = this.accessData.person_age_arr.youth['2']
        sexData2.series[0].data[0].value = man2
        sexData2.series[0].data[0].label.normal.fontSize = fontSize
        let manPer2 = man2 === woman2 ? 50 : getRound(man2 / (man2 + woman2) * 100, 0)
        sexData2.series[0].data[0].name = manPer2 + '%'
        sexData2.series[0].data[1].value = woman2
        sexData2.series[0].data[1].label.normal.fontSize = fontSize
        sexData2.series[0].data[1].name = (100 - manPer2) + '%'
        this.totalData.youthEchart = sexData2
        // 成年
        let sexData3 = JSON.parse(JSON.stringify(MOBILE.SEX_FENBU1))
        let man3 = this.accessData.person_age_arr.adult['1']
        let woman3 = this.accessData.person_age_arr.adult['2']
        sexData3.series[0].data[0].value = man3
        sexData3.series[0].data[0].label.normal.fontSize = fontSize
        let manPer3 = man3 === woman3 ? 50 : getRound(man3 / (man3 + woman3) * 100, 0)
        sexData3.series[0].data[0].name = manPer3 + '%'
        sexData3.series[0].data[1].value = woman3
        sexData3.series[0].data[1].label.normal.fontSize = fontSize
        sexData3.series[0].data[1].name = (100 - manPer3) + '%'
        this.totalData.adultEchart = sexData3
        // 赛事概况
        this.matchList = this.allData.match_list
        this.setMatchData()
        let self = this
        self.timeer = setInterval(() => {
          if (self.targetTag === 3) {
            self.targetTag = 0
            self.nextTeam()
          } else {
            self.targetTag += 1
          }
          self.showPlayers = self.targetTag % 2 === 1
          self.setMatchData()
        }, self.timeTag)
      },
      // 赛事概况
      setMatchData () {
        // 当前赛事
        this.matchData = this.matchList[this.matchTag % this.matchList.length]
        this.matchData.all.score_avg = getRound(this.matchData.all.score_avg, 1)
        // 队伍列表
        let teamList = this.matchData.match_info
        // 当前队伍
        this.teamData = teamList[this.teamTag % teamList.length]
        // 进球场次分布
        let pointMatch = JSON.parse(JSON.stringify(MOBILE.POINT_MATCHS))
        let goalList = this.matchData.all.goal_arr
        let pointS = []
        goalList.forEach(k => {
          pointS.push(k.num)
        })
        pointMatch.series[0].data = pointS
        this.matchData.timeEcharts = pointMatch
        // 雷达图
        this.setRadar()
        // 队伍排行
        this.setTeamRank()
        // 人员排行
        this.setPlayerInfo()
      },
      setRadar () {
        let teamRadar = JSON.parse(JSON.stringify(MOBILE.MATCH_ANGLE))
        let red = '#ee5e67'
        let gray = '#393f5c'
        let yellow = '#d0c62e'
        let colors = []
        let selected = {}
        let lData = []
        let tData = []
        for (let i = 0; i < this.matchData.match_info.length; i++) {
          if (i === 0) {
            colors.push(red)
          }
          colors.push(red)
          let item = this.matchData.match_info[i]
          selected[item.name] = this.teamTag === i
          // legend颜色设置
          let obj1 = {
            name: item.name,
            textStyle: {
              fontSize: 15 * this.height / 1050,
              color: this.teamTag === i ? red : gray
            }
          }
          lData.push(obj1)
          // 标杆值
          let obj2 = {
            value: [500, 90, 40, 10, 200],
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
          let all = item.info.all
          let obj3 = {
            value: [all.totalDistance5Min, all.loadAvg, all.maxPmet, all.speedMax, all.distanceMax1],
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
        teamRadar.color = colors
        teamRadar.legend.selected = selected
        teamRadar.legend.data = lData
        teamRadar.legend.scrollDataIndex = this.teamTag
        teamRadar.series[0].data = tData
        this.matchData.teamRadar = teamRadar
      },
      // 队伍排行
      setTeamRank () {
        let teamRank = JSON.parse(JSON.stringify(MOBILE.MATCH_TEAM_RANK))
        let selected = {
          '总跑动距离': this.targetTag === 0,
          '总高强度跑': this.targetTag === 1,
          '总冲刺跑': this.targetTag === 2,
          '心率负荷': this.targetTag === 3
        }
        teamRank.legend.selected = selected
        let team = this.teamData.info.team
        let xData = []
        let sData0 = []
        let sData1 = []
        let sData2 = []
        let sData3 = []
        let list0 = []
        let list1 = []
        let list2 = []
        let list3 = []
        if (this.targetTag === 0) {
          list0 = team.totalDistance
          list0.forEach(k => {
            if (k.name.length > 4) {
              let index = k.name.length / 2
              let name = k.name.slice(0, index) + '\n' + k.name.slice(index)
              xData.push(name)
            } else {
              xData.push(k.name)
            }
            sData0.push(getRound(k.value, 0))
          })
        } else if (this.targetTag === 1) {
          list1 = team.speed56Distance
          list1.forEach(k => {
            if (k.name.length > 4) {
              let index = k.name.length / 2
              let name = k.name.slice(0, index) + '\n' + k.name.slice(index)
              xData.push(name)
            } else {
              xData.push(k.name)
            }
            sData1.push(getRound(k.value, 0))
          })
        } else if (this.targetTag === 2) {
          list2 = team.distance6
          list2.forEach(k => {
            if (k.name.length > 4) {
              let index = k.name.length / 2
              let name = k.name.slice(0, index) + '\n' + k.name.slice(index)
              xData.push(name)
            } else {
              xData.push(k.name)
            }
            sData2.push(getRound(k.value, 0))
          })
        } else if (this.targetTag === 3) {
          list3 = team.trimp
          list3.forEach(k => {
            if (k.name.length > 4) {
              let index = k.name.length / 2
              let name = k.name.slice(0, index) + '\n' + k.name.slice(index)
              xData.push(name)
            } else {
              xData.push(k.name)
            }
            sData3.push(getRound(k.value, 0))
          })
        }
        teamRank.xAxis[0].axisLabel.textStyle.fontSize = 7 * this.height / 525
        // teamRank.xAxis[0].axisLabel.rotate = 45
        teamRank.xAxis[0].data = xData
        teamRank.yAxis[0].axisLabel.fontSize = 7 * this.height / 525
        teamRank.series[0].data = sData0
        teamRank.series[1].data = sData1
        teamRank.series[2].data = sData2
        teamRank.series[3].data = sData3
        this.teamRank = teamRank
      },
      setPlayerInfo () {
        let person = this.teamData.info.person
        // 跑动距离
        let tDistance = person.totalDistance
        this.playerList0 = []
        tDistance.forEach((k, index) => {
          let value = k.value >= 10000 ? getRound(k.value / 1000, 1) : getRound(k.value, 0)
          let obj = {
            top: index + 1,
            name: k.name,
            sName: k.team_name,
            value: value,
            unit: k.value >= 10000 ? 'km' : 'm'
          }
          this.playerList0.push(obj)
        })
        // 高强度跑
        this.playerList1 = []
        let high = person.speed56Distance
        high.forEach((k, index) => {
          let value = k.value >= 10000 ? getRound(k.value / 1000, 1) : getRound(k.value, 0)
          let obj = {
            top: index + 1,
            name: k.name,
            sName: k.team_name,
            value: value,
            unit: k.value >= 10000 ? 'km' : 'm'
          }
          this.playerList1.push(obj)
        })
        // 最高速度
        this.playerList2 = []
        let speed = person.speedMax
        speed.forEach((k, index) => {
          let obj = {
            top: index + 1,
            name: k.name,
            sName: k.team_name,
            value: getRound(k.value, 1)
          }
          this.playerList2.push(obj)
        })
      },
      // 切换团队
      nextTeam () {
        if (this.matchData.match_info) {
          if (this.teamTag === this.matchData.match_info.length - 1) {
            this.teamTag = 0
            this.nextMatch()
          } else {
            this.teamTag += 1
          }
        }
      },
      // 切换赛事
      nextMatch () {
        if (this.matchList) {
          if (this.matchTag === this.matchList.length - 1) {
            this.matchTag = 0
          } else {
            this.matchTag += 1
          }
        }
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

.mainBox{
  height: 100vh;
  background: url('/static/images/gd/bg.jpg') no-repeat;
  background-position:0 7.62vh;
  background-size: 100% 92.38vh;
  width:100%;
  position: fixed;
  top: 0;
  left: 0;
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
  .educationHome{
    padding:4.38vh 2.89%;
    overflow: hidden;
    height:92.38vh;
    .left{
      float: left;
      width: 19.32%;
      height: 83.62vh;
      .left1{
        padding:0 5%;
        padding-top:0.5vh;
        height: 23.62vh;
        margin-bottom: 2vh;
        background:url('/static/images/gd/left2.png') no-repeat;
        background-size: 100% 23.62vh;
      }
      .left2{
        padding:0 5%;
        padding-top:0.5vh;
        margin-top: 1.64vh;
        height: 58.48vh;
        background:url('/static/images/gd/left1.png') no-repeat;
        background-size: 100% 58.48vh;
        .matchTotal{
          margin: 2.19vh 0;
          height: 20vh;
          background:url('/static/images/gd/line2.png') no-repeat;
          background-position-x: 50%;
          background-size: 20vh 20vh;
          .matchTotalItem{
            height: 10vh;
            width: 50%;
            padding-top: 1.5vh;
            text-align: center;
            float: left;
            color: #d0c62e;
            font-family: bebas;
            font-size: 2.48vh;
            >div:last-child{
              color: #38a7ee;
              font-size: 1.52vh;
              margin-top: 0.1vh;
            }
          }
        }
        .matchGroupName{
          width: 100%;
          overflow: auto;
          >div{
            color: #38a7ee;
            float: left;
            font-size: 1.71vh;
            text-align: center;
            width: 33.33%;
          }
        }
        .leftBottom{
          width: 33.33%;
          background:url('/static/images/gd/line1.png') no-repeat;
          background-size: 1px 15.24vh;
          background-position: right;
          float: left;
          text-align: center;
          height: 15.24vh;
        }
        .leftBottomEchart{
          margin-top: 1vh;
          height: 9vh;
        }
        .echartNum{
          color: #38a7ee;
          font-size: 1.43vh;
          width: 100%;
          .echartNumTag{
            height: 0.95vh;
            width:0.95vh;
            float: left;
            background: #36b8e5;
          }
          td:nth-child(3){
            font-size: 1.71vh;
            font-family: bebas;
          }
        }
        .echartNum1{
          color: #EE5E67;
          font-size: 1.43vh;
          width: 100%;
          .echartNumTag1{
            height: 0.95vh;
            width:0.95vh;
            float: left;
            background: #EE5E67;
          }
          td:nth-child(3){
            font-size: 1.71vh;
            font-family: bebas;
          }
        }
      }
    }
    .rightContent{
      float: left;
      width: 79.2%;
      margin-left: 1.45%;
      overflow: auto;
      height: 83.62vh;
      padding:0 2.7%;
      padding-top:1vh;
      background:url('/static/images/gd/mid1.png') no-repeat;
      background-size: 100% 83.62vh;
      .line{
        background:url('/static/images/gd/line1.png') no-repeat;
        background-size: 1px 9.52vh;
        background-position: right;
      }
      .matchInfo{
        width: 38.63%;
        float: left;
        .matchInfoItem{
          width: 25%;
          height: 9.52vh;
          padding-top: 1.5vh;
          margin-bottom: 2vh;
          text-align: center;
          float: left;
          color: #d0c62e;
          font-family: bebas;
          font-size: 2.48vh;
          >div:last-child{
            color: #38a7ee;
            font-size: 1.52vh;
            margin-top: 0.1vh;
          }
        }
        .timeInfo{
          height: 18.76vh;
          width: 100%;
          overflow: auto;
          .timeEchart{
            float: left;
            height: 18.76vh;
            width: 80%;
          }
          .pointItem{
            text-align: center;
            color: #d0c62e;
            font-family: bebas;
            margin-top: 2.2vh;
            font-size: 2.48vh;
            >div:last-child{
              color: #38a7ee;
              font-size: 1.52vh;
              margin-top: 0.1vh;
            }
          }
        }
      }
      .rightRight{
        float: right;
        width: 57.11%;
        height: 42vh;
        .rankTargetList{
          width: 100%;
          margin-top: 1.5vh;
          float: left;
          .rankTarget{
            float: left;
            width: 33.33%;
            color: #327ac4;
            font-size: 1.33vh;
            text-align: center;
          }
        }
        .playerList{
          width: 100%;
          float: left;
          margin-top: 1vh;
          height: 31vh;
          padding: 0 5px;
          .playerList1{
            width: 30%;
            table-layout: fixed;
            float: left;
            height: 31vh;
            >tbody>tr>td{
              padding:0vh;
              height: 1.5vh;
              line-height: 1.5vh;
              border: 0;
              font-size: 1.14vh;
              color:#36b8e5;
            }
            >tbody>tr>td:first-child span{
              display: inline-block;
              width: 1vw;
              height: 1vw;
              text-align: center;
              line-height: 1vw;
              vertical-align: middle;
              border:1px solid #11408c;
            }
            >tbody>tr>td:nth-child(2) {
              text-align: left;
              white-space: nowrap;
            }
            >tbody>tr>td:nth-child(2) p{
              white-space: nowrap;
            }
            >tbody>tr>td:nth-child(3) {
              text-align: left;
              white-space: nowrap;
              padding-left: 5px;
            }
            >tbody>tr>td:nth-child(3) p{
              width: 3.8vw;
              overflow: hidden;
              white-space: nowrap;
            }
            >tbody>tr>td:last-child {
              text-align: right;
            }
            >tbody>tr>td:last-child p{
              white-space: nowrap;
              width: 3.3vw;
              overflow: hidden;
            }
            >tbody>tr.top td:first-child span{
              border:1px solid #d0c62e;
              color: #d0c62e;
            }
            >tbody>tr.top td:last-child{
              color: #d0c62e;
            }
          }
          .lineImg1{
            width: 5%;
            height: 31vh;
            background:url('/static/images/gd/line1.png') no-repeat 50% 50%;
            background-size: 1px 31vh;
            float:left;
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
  }
}

@media screen and (min-width: 1200px) {

}

</style>
