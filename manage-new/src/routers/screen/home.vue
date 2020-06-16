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
          <div class='blockTitle'><b></b>信息统计</div>
          <div class="contentTitle">
            <span>入选国字号球队人数</span>
            <span>人</span>
            <span>{{constData.nationalPersonNum}}</span>
          </div>
          <div class="contentTitle">
            <span>注册球员人数</span>
            <span>人</span>
            <span>{{constData.registered.all}}</span>
          </div>
          <!-- 人数下方图例 -->
          <div>
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
          <div class="contentTitle">
            <span>管辖球队</span>
            <span>支</span>
            <span>{{constData.teams.all}}</span>
          </div>
          <!-- 管辖球队下方图例 -->
          <div>
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
          <!-- 各地市分布 -->
          <div class="contentTitle">
            <span>各地市分布</span>
          </div>
          <div class="ageFenBuEchart">
            <v-bar :Echartobj="ageFenBuEcharts"></v-bar>
          </div>
        </div>
        <div class="left2">
          <!-- 数字化进程 -->
          <div class='blockTitle' style="margin-top:0.7vh"><b></b>数字化进程</div>
          <div class="inlineDiv" style="margin-top:1vh;">
            <!-- 左 -->
            <div class="leftBottom">
              <div style="width:5vh;white-space: nowrap;">已接入球队</div>
              <div><span class="leftBottomNum">{{gdData.access_arr.team_num.all}}</span><span> 支</span></div>
              <div class="leftBottomEchart">
                <v-bar :Echartobj="sexEcharts1"></v-bar>
              </div>
              <div style="font-size:1.52vh;">男女比例</div>
            </div>
            <div class="lineImg0"></div>
            <!-- 中 -->
            <div class="leftBottom">
              <div style="width:5vh;white-space: nowrap;">已建档球员</div>
              <div><span class="leftBottomNum">{{gdData.access_arr.person_num.all}}</span><span> 人</span></div>
              <div class="leftBottomEchart">
                <v-bar :Echartobj="sexEcharts2"></v-bar>
              </div>
              <div style="font-size:1.52vh;">男女比例</div>
            </div>
            <div class="lineImg0"></div>
            <!-- 右 -->
            <div class="leftBottom">
              <div style="width:5vh;white-space: nowrap;position: relative;top: -2.7vh;">各年龄层分布</div>
              <div class="leftBottomEchart">
                <v-bar :Echartobj="ageEcharts3"></v-bar>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mid">
        <div class='blockTitle'><b></b>各地市运动数据</div>
        <!-- 上半部分 -->
        <div style="width:100%;height:39.48vh">
          <!-- 地图 -->
          <div class="mapEchart" v-el:chartmap></div>
          <!-- 市区数据 -->
          <div class="cityData">
            <div style="padding-bottom:1vh" class="contentTitle">
              <span style="text-align:center;width:100%;font-size:2.29vh;">{{mapData.city_name}}</span>
            </div>
            <div class="cityDetail">
              <div>
                <div style="left:-8%;" class="cityDetailItem">
                  <img src="/static/images/gd/player.png" alt="">
                  <div class="cityDetailItemText" style="">总运动人数</div>
                  <div style="margin-top:0.7vh;">
                    <span class="cityDetailItemNum">{{mapData.person_time}}</span>
                    <span class="cityDetailItemUnit">人</span>
                  </div>
                </div>
                <div style="right:-8%;" class="cityDetailItem">
                  <img src="/static/images/gd/time.png" alt="">
                  <div class="cityDetailItemText">总运动时长</div>
                  <div style="margin-top:0.7vh;">
                    <span class="cityDetailItemNum">{{mapData.duration}}</span>
                    <span class="cityDetailItemUnit">{{mapData.durationUnit}}</span>
                  </div>
                </div>
              </div>
              <div>
                <div style="left:-8%;margin-top:4vh;" class="cityDetailItem">
                  <img src="/static/images/gd/run.png" alt="">
                  <div class="cityDetailItemText">总跑动距离</div>
                  <div style="margin-top:0.7vh;">
                    <span class="cityDetailItemNum">{{mapData.total_distance}}</span>
                    <span class="cityDetailItemUnit">{{mapData.distanceUnit}}</span>
                  </div>
                </div>
                <div style="right:-8%;margin-top:4vh;" class="cityDetailItem">
                  <img src="/static/images/gd/time.png" alt="">
                  <div class="cityDetailItemText">总中高强度时长</div>
                  <div style="margin-top:0.7vh;">
                    <span class="cityDetailItemNum">{{mapData.hr_affect_seconds}}</span>
                    <span class="cityDetailItemUnit">{{mapData.hrDurationUnit}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 下半部分 -->
        <div style="margin-top:3vh;">
          <div class="contentTitle">
            <span>各地市平均数据</span>
          </div>
          <div style="height:24.81vh;margin-top:4vh;">
            <v-bar :Echartobj="cityAvgEcharts"></v-bar>
          </div>
        </div>
      </div>
      <div class="right">
        <div class='blockTitle'><b></b>数据动态</div>
        <div style="margin-top:1vh;height:19vh">
          <div class="rightTopItem">
            <div class="contentTitle">
              <span>昨日数据</span>
            </div>
            <!-- 左 -->
            <div class="rightTop">
              <div>监控时间</div>
              <div class="rightTopEchart">
                <v-bar :Echartobj="lastData.dayEchart1"></v-bar>
                <div class="rightTopNum0">{{lastData.dayData1.all}}</div>
              </div>
              <div class="rightTopText"><span>比赛：</span><span>h</span><span class="rightTopNum">{{lastData.dayData1.match}}</span></div>
              <div class="rightTopText"><span>训练：</span><span>h</span><span class="rightTopNum">{{lastData.dayData1.train}}</span></div>
            </div>
            <div class="lineImg1"></div>
            <!-- 中 -->
            <div class="rightTop">
              <div>监控人次</div>
              <div class="rightTopEchart">
                <v-bar :Echartobj="lastData.dayEchart2"></v-bar>
                <div class="rightTopNum0">{{lastData.dayData2.all}}</div>
              </div>
              <div class="rightTopText"><span>男：</span><span>人次</span><span class="rightTopNum">{{lastData.dayData2.male}}</span></div>
              <div class="rightTopText"><span>女：</span><span>人次</span><span class="rightTopNum">{{lastData.dayData2.female}}</span></div>
            </div>
            <div class="lineImg1"></div>
            <!-- 右 -->
            <div style="width:31%" class="rightTop">
              <div>监控场次</div>
              <div class="rightTopEchart">
                <v-bar :Echartobj="lastData.dayEchart3"></v-bar>
                <div class="rightTopNum0">{{lastData.dayData3.all}}</div>
              </div>
              <div class="rightTopText"><span>比赛：</span><span>场</span><span class="rightTopNum">{{lastData.dayData3.match}}</span></div>
              <div class="rightTopText"><span>训练：</span><span>次</span><span class="rightTopNum">{{lastData.dayData3.train}}</span></div>
            </div>
          </div>
          <div style="width:10%;float:left;height:10vh;"></div>
          <div class="rightTopItem">
            <div class="contentTitle">
              <span>上月数据</span>
            </div>
            <!-- 左 -->
            <div class="rightTop">
              <div>监控时间</div>
              <div class="rightTopEchart">
                <v-bar :Echartobj="lastData.monthEchart1"></v-bar>
                <div class="rightTopNum0">{{lastData.monthData1.all}}</div>
              </div>
              <div class="rightTopText"><span>比赛：</span><span>h</span><span class="rightTopNum">{{lastData.monthData1.match}}</span></div>
              <div class="rightTopText"><span>训练：</span><span>h</span><span class="rightTopNum">{{lastData.monthData1.train}}</span></div>
            </div>
            <div class="lineImg1"></div>
            <!-- 中 -->
            <div class="rightTop">
              <div>监控人次</div>
              <div class="rightTopEchart">
                <v-bar :Echartobj="lastData.monthEchart2"></v-bar>
                <div class="rightTopNum0">{{lastData.monthData2.all}}</div>
              </div>
              <div class="rightTopText"><span>男：</span><span>人次</span><span class="rightTopNum">{{lastData.monthData2.male}}</span></div>
              <div class="rightTopText"><span>女：</span><span>人次</span><span class="rightTopNum">{{lastData.monthData2.female}}</span></div>
            </div>
            <div class="lineImg1"></div>
            <!-- 右 -->
            <div style="width:31%" class="rightTop">
              <div>监控场次</div>
              <div class="rightTopEchart">
                <v-bar :Echartobj="lastData.monthEchart3"></v-bar>
                <div class="rightTopNum0">{{lastData.monthData3.all}}</div>
              </div>
              <div class="rightTopText"><span>比赛：</span><span>场</span><span class="rightTopNum">{{lastData.monthData3.match}}</span></div>
              <div class="rightTopText"><span>训练：</span><span>次</span><span class="rightTopNum">{{lastData.monthData3.train}}</span></div>
            </div>
          </div>
        </div>
        <div style="margin-top:1vh;height:56vh">
          <!-- 重点关注球队 -->
          <div v-if="changeTag.showImport">
            <div class="contentTitle">
              <span>重点关注球队</span>
            </div>
            <div style="width:100%;height:32.57vh">
               <v-bar :Echartobj="importEcharts1"></v-bar>
            </div>
            <div style="height:16.57vh;">
              <v-bar :Echartobj="importEcharts2"></v-bar>
            </div>
            <div style="font-size:1.52vh;color:#38a7ee;width:100%;text-align:center">当月运动负荷趋势</div>
          </div>
          <!-- 球员排行 -->
          <div v-else>
            <div class="contentTitle">
              <span>球员排行</span>
            </div>
            <div class="rankList">
              <div class="rankListTitle">
                <span :class="{'active': changeTag.isMan}" style="position: relative;left: -23%">男足</span>
                <span :class="{'active': !changeTag.isMan}" style="position: relative;left: 18%">女足</span>
              </div>
              <div class="rankTeamList">
                <li v-for='(index,team) in teamList' :style="{width: 100/teamList.length + '%'}" :class="{'active': changeTag.teamPosition==index}">{{team.name}}</li>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vBar from 'src/components/vBar'
  import guangdong from '../../../static/js/guangdong.json'
  import gdJson from './test.json'
  import echarts from 'echarts'
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
          nationalPersonNum: 0
        },
        gdData: {
          access_arr: {
            person_num: {
              all: 0
            },
            team_num: {
              all: 0
            }
          }
        },
        mapData: {},
        changeTag: {
          // 重点关注和球员排行切换
          showImport: true,
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
        // 信息统计各地市分布
        ageFenBuEcharts: {},
        // 数字化进程
        sexEcharts1: {},
        sexEcharts2: {},
        ageEcharts3: {},
        // 各地市平均数据
        cityAvgEcharts: {},
        // 历史数据
        lastData: {
          dayData1: {all: 0, match: 0, train: 0},
          dayData2: {all: 0, male: 0, female: 0},
          dayData3: {all: 0, match: 0, train: 0},
          dayEchart1: {},
          dayEchart2: {},
          dayEchart3: {},
          monthData1: {all: 0, match: 0, train: 0},
          monthData2: {all: 0, male: 0, female: 0},
          monthData3: {all: 0, match: 0, train: 0},
          monthEchart1: {},
          monthEchart2: {},
          monthEchart3: {}
        },
        // 重点关注 雷达图
        importEcharts1: {},
        // 重点关注 当月运动负荷趋势
        importEcharts2: {},
        // 球员排行队伍列表
        teamList: [],
        playerList1: [],
        playerList2: [],
        playerList3: [],
        // 车牌号排序
        guangdongCity: [
          {carId: 0, name: '广州市'},
          {carId: 1, name: '深圳市'},
          {carId: 2, name: '珠海市'},
          {carId: 3, name: '汕头市'},
          {carId: 4, name: '佛山市'},
          {carId: 5, name: '韶关市'},
          {carId: 6, name: '湛江市'},
          {carId: 7, name: '肇庆市'},
          {carId: 8, name: '江门市'},
          {carId: 9, name: '茂名市'},
          {carId: 10, name: '惠州市'},
          {carId: 11, name: '梅州市'},
          {carId: 12, name: '汕尾市'},
          {carId: 13, name: '河源市'},
          {carId: 14, name: '阳江市'},
          {carId: 15, name: '清远市'},
          {carId: 16, name: '东莞市'},
          {carId: 17, name: '中山市'},
          {carId: 18, name: '潮州市'},
          {carId: 19, name: '揭阳市'},
          {carId: 20, name: '云浮市'}
        ]
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
        this.gdData = gdJson.data
        this.setData()
      },
      setData () {
        // 信息统计
        this.setConstInfo()
        // 数字化进程
        this.setLeftBottomData()
        // 给城市排序
        this.sortCity()
        // 需要轮播的数据
        this.setReload()
        // 各地市平均数据
        let height = document.documentElement.clientHeight || document.body.clientHeight
        let cityAvgData = JSON.parse(JSON.stringify(MOBILE.CITY_AVG))
        let xData = []
        let bpmData = []
        let hrData = []
        let cityList = this.gdData.children_info
        cityList.forEach(v => {
          xData.push(v.city_name)
          bpmData.push(getRound(v.bpm, 0))
          hrData.push(getRound(v.heart_rate_intensity_avg, 0))
        })
        cityAvgData.xAxis[0].data = xData
        cityAvgData.series[0].data = hrData
        cityAvgData.series[1].data = bpmData
        cityAvgData.xAxis[0].axisLabel.textStyle.fontSize = 8 * height / 1050
        this.cityAvgEcharts = cityAvgData
        // 设置右上历史数据
        this.setLastData()
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
        // 各地市分布
        let ageFenBuData = JSON.parse(JSON.stringify(MOBILE.PERSON_FENBU))
        let cityList = this.constData.cityList
        cityList.forEach(v => {
          v.carId = 0
          this.guangdongCity.forEach(k => {
            if (v.name === k.name) {
              v.carId = k.carId
            }
          })
        })
        cityList.sort(function (a, b) {
          return a.carId - b.carId
        })
        let yList1 = []
        let yList2 = []
        let xList = []
        cityList.forEach(v => {
          xList.push(v.name)
          yList1.push(v.team_num)
          yList2.push(v.person_num)
        })
        ageFenBuData.xAxis[0].data = xList
        ageFenBuData.series[1].data = yList1
        ageFenBuData.series[0].data = yList2
        this.ageFenBuEcharts = ageFenBuData
      },
      setLastData () {
        // 昨日监控时间
        let dayData1 = JSON.parse(JSON.stringify(MOBILE.LAST_DATA_FENBU))
        this.lastData.dayData1.all = getRound(this.gdData.last_day_info.sport_seconds.all / 60 / 60, 0)
        this.lastData.dayData1.match = getRound(this.gdData.last_day_info.sport_seconds.match / 60 / 60, 0)
        this.lastData.dayData1.train = getRound(this.gdData.last_day_info.sport_seconds.train / 60 / 60, 0)
        dayData1.series[0].data[0].value = this.lastData.dayData1.match
        dayData1.series[0].data[1].value = this.lastData.dayData1.train
        this.lastData.dayEchart1 = dayData1
        // 昨日监控人次
        let dayData2 = JSON.parse(JSON.stringify(MOBILE.LAST_DATA_FENBU))
        this.lastData.dayData2.all = this.gdData.last_day_info.sport_person_time.all
        this.lastData.dayData2.male = this.gdData.last_day_info.sport_person_time.male
        this.lastData.dayData2.female = this.gdData.last_day_info.sport_person_time.female
        dayData2.series[0].data[0].value = this.lastData.dayData2.male
        dayData2.series[0].data[1].value = this.lastData.dayData2.female
        this.lastData.dayEchart2 = dayData2
        // 昨日监控场次
        let dayData3 = JSON.parse(JSON.stringify(MOBILE.LAST_DATA_FENBU))
        this.lastData.dayData3.all = this.gdData.last_day_info.sport_time.all
        this.lastData.dayData3.match = this.gdData.last_day_info.sport_time.match
        this.lastData.dayData3.train = this.gdData.last_day_info.sport_time.train
        dayData3.series[0].data[0].value = this.lastData.dayData3.match
        dayData3.series[0].data[1].value = this.lastData.dayData3.train
        this.lastData.dayEchart3 = dayData3
        // 上月监控时间
        let monthData1 = JSON.parse(JSON.stringify(MOBILE.LAST_DATA_FENBU))
        this.lastData.monthData1.all = getRound(this.gdData.last_month_info.sport_seconds.all / 60 / 60, 0)
        this.lastData.monthData1.match = getRound(this.gdData.last_month_info.sport_seconds.match / 60 / 60, 0)
        this.lastData.monthData1.train = getRound(this.gdData.last_month_info.sport_seconds.train / 60 / 60, 0)
        monthData1.series[0].data[0].value = this.lastData.monthData1.match
        monthData1.series[0].data[1].value = this.lastData.monthData1.train
        this.lastData.monthEchart1 = monthData1
        // 上月监控人次
        let monthData2 = JSON.parse(JSON.stringify(MOBILE.LAST_DATA_FENBU))
        this.lastData.monthData2.all = this.gdData.last_month_info.sport_person_time.all
        this.lastData.monthData2.male = this.gdData.last_month_info.sport_person_time.male
        this.lastData.monthData2.female = this.gdData.last_month_info.sport_person_time.female
        monthData2.series[0].data[0].value = this.lastData.monthData2.male
        monthData2.series[0].data[1].value = this.lastData.monthData2.female
        this.lastData.monthEchart2 = monthData2
        // 上月监控场次
        let monthData3 = JSON.parse(JSON.stringify(MOBILE.LAST_DATA_FENBU))
        this.lastData.monthData3.all = this.gdData.last_month_info.sport_time.all
        this.lastData.monthData3.match = this.gdData.last_month_info.sport_time.match
        this.lastData.monthData3.train = this.gdData.last_month_info.sport_time.train
        monthData3.series[0].data[0].value = this.lastData.monthData3.match
        monthData3.series[0].data[1].value = this.lastData.monthData3.train
        this.lastData.monthEchart3 = monthData3
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
        // 各年龄层分布
        let ageData = JSON.parse(JSON.stringify(MOBILE.AGE_FENBU))
        let bList = this.gdData.access_arr.person_num.birthday
        let list = []
        bList.forEach(v => {
          let obj = {
            value: v.num,
            name: v.year
          }
          if (obj.value !== 0 && list.length < 10) {
            list.push(obj)
          }
        })
        // list.sort(function (a, b) {
        //   return a.value - b.value
        // })
        ageData.series[0].data = list
        let height = document.documentElement.clientHeight || document.body.clientHeight
        ageData.series[0].label.normal.fontSize = 7 * height / 1050
        this.ageEcharts3 = ageData
      },
      setReload () {
        let self = this
        self.setMap()
        self.setPlayerList()
        self.timeer = setInterval(() => {
          // if (self.timeData !== 1) {
          //   self.timeData += 1
          // }
          self.timeData += 1
          self.setMap()
          self.setPlayerList()
        }, self.timeTag)
      },
      sortCity () {
        let cityList = this.gdData.children_info
        // 城市根据车牌号排序
        cityList.forEach(v => {
          v.carId = 0
          this.guangdongCity.forEach(k => {
            if (v.city_name === k.name) {
              v.carId = k.carId
            }
          })
        })
        cityList.sort(function (a, b) {
          return a.carId - b.carId
        })
        this.gdData.children_info = cityList
      },
      setPlayerList () {
        let teamData = this.gdData.team_concern
        this.changeTag.showImport = teamData.length > this.timeData % (teamData.length * 2)
        let red = '#ee5e67'
        let gray = '#393f5c'
        let yellow = '#d0c62e'
        if (this.changeTag.showImport) {
          // 设置重点关注球队
          let index = this.timeData % (teamData.length * 2)
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
          // 当月运动负荷趋势
          let importData2 = JSON.parse(JSON.stringify(MOBILE.IMPORT_LINER))
          let timeList = teamData[index].time_list
          let xtList = []
          let stList = []
          timeList.forEach(v => {
            xtList.push(v.date.substring(5))
            stList.push(v.value)
          })
          importData2.xAxis[0].data = xtList
          importData2.series[0].data = stList
          this.importEcharts2 = importData2
        } else {
          // 设置人员列表 (区分男女)
          let manTeam = []
          let womanTeam = []
          teamData.sort(function (a, b) {
            return b.team_sex - a.team_sex
          })
          for (let i = 0; i < teamData.length; i++) {
            let item = teamData[i]
            if (item.team_sex === 2) {
              womanTeam.push(item)
            } else {
              manTeam.push(item)
            }
          }
          let index = this.timeData % (teamData.length * 2) - teamData.length
          this.changeTag.isMan = index < manTeam.length
          let tList = []
          // 所有队伍名字
          if (this.changeTag.isMan) {
            this.changeTag.teamPosition = index
            for (let i = 0; i < manTeam.length; i++) {
              tList.push(manTeam[i])
            }
          } else {
            this.changeTag.teamPosition = index - manTeam.length
            for (let i = 0; i < womanTeam.length; i++) {
              tList.push(womanTeam[i])
            }
          }
          this.teamList = tList
          // 当前轮播队伍
          let teamInfo = teamData[index]
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
            pList2.push(v)
          })
          let infoList3 = teamInfo.persons.speed_max_max
          infoList3.forEach((v, k) => {
            if (!v.avatar || v.avatar === '') {
              v.avatar = 'http://api.sportsdatas.cn/Upload/avatar/user_pic.png'
            }
            v.top = k + 1
            v.value = getRound(v.value, 1)
            pList3.push(v)
          })
          this.playerList1 = pList1
          this.playerList2 = pList2
          this.playerList3 = pList3
        }
      },
      // 设置地图数据
      setMap () {
        let cityList = this.gdData.children_info
        // 设置数据
        let cityInfo = cityList[this.timeData % cityList.length]
        let duration = getRound(cityInfo.duration / 60, 0)
        let hrDuration = getRound(cityInfo.hr_affect_seconds / 60, 0)
        let total_distance = getRound(cityInfo.total_distance, 0)
        this.mapData = {
          city_name: cityInfo.city_name,
          person_time: cityInfo.person_time,
          duration: duration < 100000 ? duration : getRound(duration / 60, 0),
          durationUnit: duration < 100000 ? 'min' : 'h',
          total_distance: total_distance < 100000 ? total_distance : getRound(total_distance / 1000, 0),
          distanceUnit: total_distance < 100000 ? 'm' : 'km',
          hr_affect_seconds: hrDuration < 100000 ? hrDuration : getRound(hrDuration / 60, 0),
          hrDurationUnit: hrDuration < 100000 ? 'min' : 'h'
        }
        let list = []
        cityList.forEach((v, k) => {
          let obj = {
            name: v.city_name,
            value: 0,
            selected: this.timeData % cityList.length === k
          }
          list.push(obj)
        })
        let myChart = echarts.init(this.$els.chartmap)
        echarts.registerMap('广东', guangdong)
        let mapData = JSON.parse(JSON.stringify(MOBILE.GUANG_DONG))
        mapData.series[0].data = list
        myChart.setOption(mapData)
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
        height: 58.53vh;
        margin-bottom: 2vh;
        background:url('/static/images/gd/left1.png') no-repeat;
        background-size: 100% 58.53vh;
      }
      .left2{
        padding:0 5%;
        padding-top:0.5vh;
        margin-top: 1.64vh;
        height: 23.53vh;
        background:url('/static/images/gd/left2.png') no-repeat;
        background-size: 100% 23.53vh;
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
      .mapEchart{
        width: 50.6%;
        margin-top: 5vh;
        float: left;
        height: 34.48vh;
      }
      .cityData{
        float: right;
        margin-right: 7%;
        margin-top: 5vh;
        width: 30.8%;
        .cityDetail{
          width: 100%;
          background:url('/static/images/gd/line2.png') no-repeat 50% 50%;
          background-size: contain;
          height: 30vh;
          .cityDetailItem{
            width: 50%;
            position: relative;
            float: left;
            text-align: center;
            margin-top: 2vh;
            >img{
              height: 4.48vh;
            }
            >div{
              color: #327AC4;
              font-size: 1.72vh;
              width: 100%;
              white-space: nowrap;
            }
            .cityDetailItemText{
              margin-top:0.5vh;
            }
            .cityDetailItemNum{
              color: #D0C62E;
              font-family: bebas;
              font-size: 2.48vh;
            }
            .cityDetailItemUnit{
              color: #D0C62E;
              font-size: 1.52vh;
            }
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
        height: 51.67vh;
        margin-top: 0.6vh;
        text-align: center;
        font-size: 1.72vh;
        color: #38A7EE;
        padding: 0 2%;
        background:url('/static/images/gd/right2.png') no-repeat;
        background-size: 100% 51.67vh;
        .active{
            color: #D03F48;
          }
        .rankListTitle{
          margin-top: 0.5vh;
        }
        .rankTeamList{
          float: left;
          margin-top: 1.4vh;
          width: 100%;
          li{
            float: left;
            width:25%;
            list-style-type: none;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 1.52vh;
            text-align:center;
            color: #38A7EE;
          }
          li.active{color: #D03F48;}
        }
        .rankTargetList{
          width: 100%;
          margin-top: 1.5vh;
          float: left;
          .rankTarget{
            float: left;
            width: 33.3%;
          }
        }
        .rankPlayerList{
          width: 32%;
          float: left;
          height: 38.5vh;
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
            width: 1.5vw;
            height: 1.5vw;
            vertical-align: middle;
            border-radius: 50%;
          }
          >tbody>tr>td:nth-child(3) {
            text-align: left;
            white-space: nowrap;
            width: 25%;
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
      width: 30%;
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
