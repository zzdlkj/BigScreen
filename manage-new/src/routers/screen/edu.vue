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
        <div class="left1">
          <div class='blockTitle'><b></b>信息统计</div>
          <div style="margin-top: 3.6vh;" class="contentTitle">
            <span>支教学校总数</span>
            <span>个</span>
            <span>{{constData.school_num}}</span>
          </div>
          <div style="margin-top: 3.6vh;" class="contentTitle">
            <span>精英指导员总数</span>
            <span>人</span>
            <span>{{constData.coach_num}}</span>
          </div>
          <div style="margin-top: 3.6vh;" class="contentTitle">
            <span>建立学生档案</span>
            <span>人</span>
            <span>{{accessData.person_num.all}}</span>
          </div>
          <div style="overflow:auto;margin-top:2vh;">
            <!-- 左部分 -->
            <div class="personNumLeft">
              <!-- 上方图文 -->
              <div class="inlineDiv">
                <div class="sexEchart">
                  <v-bar :Echartobj="sexEcharts"></v-bar>
                </div>
                <div class='fenbu'>
                  <p>男 <span>{{accessData.person_num.male}}</span> 人</p>
                  <p>女 <span>{{accessData.person_num.female}}</span> 人</p>
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
        </div>
        <div class="left2">
          <div class='blockTitle'><b></b>信息统计</div>
          <div style="margin-top: 4.5vh;" class="contentTitle">
            <span>累计运动次数</span>
            <span>次</span>
            <span>{{accessData.school_info.event_time}}</span>
          </div>
          <div style="margin-top: 4.5vh;" class="contentTitle">
            <span>累计采集人次</span>
            <span>人次</span>
            <span>{{accessData.school_info.person_time}}</span>
          </div>
          <div style="margin-top: 4.5vh;" class="contentTitle">
            <span>累计运动时长</span>
            <span>h</span>
            <span>{{accessData.school_info.hour}}</span>
          </div>
          <!-- <div style="margin-top: 3.6vh;" class="contentTitle">
            <span>累计运动干预</span>
            <span>次</span>
            <span>0</span>
          </div> -->
        </div>
      </div>
      <!-- 中间 -->
      <div class="mid">
        <div class='blockTitle'><b></b>数据概览</div>
        <div class="contentTitle">
          <span>运动时段分布图</span>
        </div>
        <div class="timeEchart">
          <v-bar :Echartobj="timeEcharts"></v-bar>
        </div>
        <div class="contentTitle">
          <span>各年龄段数据</span>
        </div>
        <div class="tagTitle">
          <div :class="{'redText':timeData%3==0}">运动总次数</div>
          <div :class="{'redText':timeData%3==1}">运动强度</div>
          <div :class="{'redText':timeData%3==2}">运动总时长</div>
        </div>
        <div class="timeEchart">
          <v-bar :Echartobj="eduAgeEcharts"></v-bar>
        </div>
        <div class="contentTitle">
          <span>各地市数据</span>
        </div>
        <div class="tagTitle" style="text-align:start;">
          <span :class="{'redText':timeData%9<3}">周</span>
          <span>/</span>
          <span :class="{'redText':timeData%9>=3&&timeData%9<6}">月</span>
          <span>/</span>
          <span :class="{'redText':timeData%9>=6}">总</span>
        </div>
        <div class="tagTitle">
          <div :class="{'redText':timeData%3==0}">运动总次数</div>
          <div :class="{'redText':timeData%3==1}">运动强度</div>
          <div :class="{'redText':timeData%3==2}">运动总时长</div>
        </div>
        <div class="timeEchart">
          <v-bar :Echartobj="eduCityEcharts"></v-bar>
        </div>
      </div>
      <!-- 右边 -->
      <div class="right">
        <div class='blockTitle'><b></b>数据动态</div>
        <div class="contentTitle">
          <span>学生运动能力分布</span>
        </div>
        <div class="tagTitle">
          <span>--</span>
          <span>男</span>
          <span class="redText">--</span>
          <span class="redText">女</span>
        </div>
        <div style="height:25vh;">
          <v-bar :Echartobj="eduRadarEcharts"></v-bar>
        </div>
        <div>
          <div v-if="showPlayer">
            <table class="rankTagTitle">
              <tbody>
                <tr>
                  <td :class="{'redText':timeData%7==0}">一般耐力</td>
                  <td :class="{'redText':timeData%7==1}">速度耐力</td>
                  <td :class="{'redText':timeData%7==2}">爆发力</td>
                  <td :class="{'redText':timeData%7==3}">速度能力</td>
                </tr>
              </tbody>
            </table>
            <div class="tagTitle">
              <div style="width:50%;">男</div>
              <div style="width:50%;">女</div>
            </div>
            <div class="playerArea">
              <table class="playerList" :style="{height:maleHeight}">
                <tbody style="vertical-align: baseline;">
                  <tr style="width:100%;" v-for='(index,person) in maleList' :class="{'top':person.top<4}">
                    <td style="width:15%;"><span>{{person.top}}</span></td>
                    <td style="width:20%;"><p>{{person.name}}</p></td>
                    <td style="width:30%;"><p>{{person.value}}{{person.unit}}</p></td>
                    <td style="width:35%;"><p>{{person.org_name}}</p></td>
                  </tr>
                </tbody>
              </table>
              <div class="lineImg1"></div>
              <table class="playerList" :style="{height:femaleHeight}">
                <tbody style="vertical-align: baseline;">
                  <tr style="width:100%;" v-for='(index,person) in femaleList' :class="{'top':person.top<4}">
                    <td style="width:15%;"><span>{{person.top}}</span></td>
                    <td style="width:20%;"><p>{{person.name}}</p></td>
                    <td style="width:30%;"><p>{{person.value}}{{person.unit}}</p></td>
                    <td style="width:35%;"><p>{{person.org_name}}</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div v-else>
            <div class="contentTitle">
              <span>教练支教</span>
            </div>
            <table class="rankTagTitle" style="margin-top:0vh;">
              <tbody>
                <tr>
                  <td style="width:33.3%" :class="{'redText':timeData%7==4}">运动次数</td>
                  <td style="width:33.3%" :class="{'redText':timeData%7==5}">运动时长</td>
                  <td style="width:33.3%" :class="{'redText':timeData%7==6}">平均运动强度</td>
                </tr>
              </tbody>
            </table>
            <table class="playerList" style="width:100%;margin-top:1vh;height:34vh;" :style="{height:coachHeight}">
              <tbody style="vertical-align: baseline;">
                <tr style="width:100%;" v-for='(index,coach) in coachList' :class="{'top':coach.top<4}">
                  <td style="width:15%;"><span>{{coach.top}}</span></td>
                  <td style="width:20%;"><p>{{coach.name}}</p></td>
                  <td style="width:30%;"><p>{{coach.value}}{{coach.unit}}</p></td>
                  <td style="width:35%;"><p>支教学校数量{{coach.org_num}}个</p></td>
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
        height: 0,
        showPlayer: true,
        configName: '',
        allData: {},
        constData: {
          school_num: 0,
          coach_num: 0
        },
        accessData: {
          person_num: {
            all: 0,
            male: 0,
            female: 0
          },
          school_info: {
            event_time: 0,
            person_time: 0,
            hour: 0,
            duration: 0
          }
        },
        sexEcharts: {},
        ageEcharts: {},
        timeEcharts: {},
        eduAgeEcharts: {},
        eduCityEcharts: {},
        eduRadarEcharts: {},
        maleHeight: '0px',
        femaleHeight: '0px',
        coachHeight: '0px',
        maleList: [],
        femaleList: [],
        coachList: [],
        timeData: 0,
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
        self.timeData = 0
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
        // let url = 'get_zj_tv_info?config_id=1'
        let url = 'get_zj_tv_info?config_id=' + this.configId
        this.$http.get(url).then(res => {
          if (res.data.code === 200) {
            self.allData = res.data.data
            self.configName = self.allData.name
            self.timeTag = self.allData.refresh_seconds * 1000
            self.setData()
          }
        })
      },
      setData () {
        let self = this
        self.setConstData()
        self.setAccessData()
        // 轮播数据
        self.setChangeData()
        self.timeer = setInterval(() => {
          self.timeData += 1
          self.setChangeData()
        }, self.timeTag)
      },
      setChangeData () {
        // 年龄段柱状图
        let eduAgeData = JSON.parse(JSON.stringify(MOBILE.EDU_AGE_ECHART))
        let sexAgeData = this.allData.sex_age_info
        let xData = []
        let maleData = []
        let femaleData = []
        sexAgeData.forEach(v => {
          xData.push(v.age)
          let maleD = v.sex['1']
          let femaleD = v.sex['2']
          if (this.timeData % 3 === 0) {
            maleData.push(maleD && maleD.time ? maleD.time : 0)
            femaleData.push(femaleD && femaleD.time ? femaleD.time : 0)
          } else if (this.timeData % 3 === 1) {
            maleData.push(maleD && maleD.heart_rate_intensity_avg ? getRound(maleD.heart_rate_intensity_avg, 0) : 0)
            femaleData.push(femaleD && femaleD.heart_rate_intensity_avg ? getRound(femaleD.heart_rate_intensity_avg, 0) : 0)
          } else if (this.timeData % 3 === 2) {
            maleData.push(maleD && maleD.total_seconds ? getRound(maleD.total_seconds / 60, 0) : 0)
            femaleData.push(femaleD && femaleD.total_seconds ? getRound(femaleD.total_seconds / 60, 0) : 0)
          }
        })
        eduAgeData.xAxis[0].data = xData
        eduAgeData.series[0].data = maleData
        eduAgeData.series[1].data = femaleData
        this.eduAgeEcharts = eduAgeData
        // 地市数据
        let eduCityData = JSON.parse(JSON.stringify(MOBILE.EDU_CITY_ECHART))
        let cityData = {}
        let index = this.timeData % 9
        if (index < 3) {
          cityData = this.allData.children_info.week
        } else if (index >= 3 && index < 6) {
          cityData = this.allData.children_info.month
        } else if (index >= 6) {
          cityData = this.allData.children_info.all
        }
        let xData1 = []
        let sData1 = []
        cityData.forEach(v => {
          xData1.push(v.city_name)
          if (index % 3 === 0) {
            sData1.push(v.event_time)
          } else if (index % 3 === 1) {
            sData1.push(getRound(v.heart_rate_intensity_avg, 0))
          } else if (index % 3 === 2) {
            sData1.push(getRound(v.duration / 60, 0))
          }
        })
        for (let i = sData1.length - 1; i >= 0; i--) {
          if (sData1[i] === 0) {
            sData1.splice(i, 1)
            xData1.splice(i, 1)
          }
        }
        eduCityData.xAxis[0].data = xData1
        eduCityData.series[0].data = sData1
        this.eduCityEcharts = eduCityData
        // 雷达图
        let eduRadar = JSON.parse(JSON.stringify(MOBILE.EDU_RADAR_ECHART))
        let red = '#ee5e67'
        let gray = '#393f5c'
        let yellow = '#d0c62e'
        let blue = '#36b8e5'
        let colors = []
        let selected = {}
        let lData = []
        let tData = []
        let teamTag = this.timeData % sexAgeData.length
        for (let i = 0; i < sexAgeData.length; i++) {
          if (i === 0) {
            // 标杆值
            colors.push(red)
            colors.push(red)
            colors.push(red)
          }
          colors.push(red)
          let item = sexAgeData[i]
          selected[item.age] = teamTag === i
          let obj1 = {
            name: item.age,
            textStyle: {
              color: teamTag === i ? red : gray
            }
          }
          lData.push(obj1)
        }
        // 标杆值
        let obj2 = {
          value: [500, 90, 10, 40, 200],
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
        let male = sexAgeData[teamTag].sex['1']
        let value = []
        if (male) {
          value = [
            male.totaldistance_5min ? male.totaldistance_5min : 0,
            male.heart_rate_intensity_avg ? male.heart_rate_intensity_avg : 0,
            male.speed_max ? male.speed_max : 0,
            male.burst_ability ? male.burst_ability : 0,
            male.distance_max1 ? male.distance_max1 : 0
          ]
        }
        let obj3 = {
          value: value,
          areaStyle: {
            normal: {
              opacity: 0.3,
              color: blue
            }
          },
          lineStyle: {
            normal: {
              color: blue
            }
          }
        }
        let female = sexAgeData[teamTag].sex['2']
        let value1 = []
        if (female) {
          value1 = [
            female.totaldistance_5min ? female.totaldistance_5min : 0,
            female.heart_rate_intensity_avg ? female.heart_rate_intensity_avg : 0,
            female.speed_max ? female.speed_max : 0,
            female.burst_ability ? female.burst_ability : 0,
            female.distance_max1 ? female.distance_max1 : 0
          ]
        }
        let obj4 = {
          value: value1,
          areaStyle: {
            normal: {
              opacity: 0.3,
              color: red
            }
          },
          lineStyle: {
            normal: {
              color: red
            }
          }
        }
        tData.push(obj2)
        tData.push(obj3)
        tData.push(obj4)
        sexAgeData.forEach(v => {
          let obj5 = {
            name: v.age
          }
          tData.push(obj5)
        })
        eduRadar.color = colors
        eduRadar.legend.selected = selected
        eduRadar.legend.data = lData
        eduRadar.legend.scrollDataIndex = teamTag
        eduRadar.series[0].data = tData
        this.eduRadarEcharts = eduRadar
        // 判断显示学员还是教练
        this.showPlayer = this.timeData % 7 < 4
        if (this.showPlayer) {
          // 学员列表
          let pList = this.allData.person_top_list
          let maleList = []
          let femaleList = []
          let unit = ''
          if (this.timeData % 7 === 0) {
            maleList = pList['1'].totaldistance_5min
            femaleList = pList['2'].totaldistance_5min
            unit = 'm'
          } else if (this.timeData % 7 === 1) {
            maleList = pList['1'].distance_max1
            femaleList = pList['2'].distance_max1
            unit = 'm'
          } else if (this.timeData % 7 === 2) {
            maleList = pList['1'].burst_ability
            femaleList = pList['2'].burst_ability
            unit = 'W/kg'
          } else if (this.timeData % 7 === 3) {
            maleList = pList['1'].speed_max
            femaleList = pList['2'].speed_max
            unit = 'm/s'
          }
          for (let i = 0; i < maleList.length; i++) {
            let item = maleList[i]
            item.top = i + 1
            item.unit = unit
            if (unit === 'm/s' || unit === 'W/kg') {
              item.value = getRound(item.value, 1)
            } else {
              item.value = getRound(item.value, 0)
            }
          }
          for (let i = 0; i < femaleList.length; i++) {
            let item = femaleList[i]
            item.top = i + 1
            item.unit = unit
            if (unit === 'm/s' || unit === 'W/kg') {
              item.value = getRound(item.value, 1)
            } else {
              item.value = getRound(item.value, 0)
            }
          }
          this.maleHeight = this.height * 0.035 * maleList.length + 'px'
          this.femaleHeight = this.height * 0.035 * femaleList.length + 'px'
          this.maleList = maleList
          this.femaleList = femaleList
        } else {
          // 教练列表
          let cList = this.allData.coach_top_list
          let coachList = []
          let unit = ''
          if (this.timeData % 7 === 4) {
            unit = '次'
            coachList = cList.event_time
          } else if (this.timeData % 7 === 5) {
            unit = 'min'
            coachList = cList.duration_time
          } else if (this.timeData % 7 === 6) {
            unit = '%'
            coachList = cList.heart_rate_intensity_avg
          }
          if (coachList) {
            for (let i = 0; i < coachList.length; i++) {
              let item = coachList[i]
              item.top = i + 1
              item.unit = unit
              if (unit === '%') {
                item.value = getRound(item.value, 1)
              } else if (unit === 'min') {
                item.value = getRound(item.value / 60, 0)
              }
            }
          }
          this.coachHeight = this.height * 0.035 * coachList.length + 'px'
          this.coachList = coachList
        }
      },
      setAccessData () {
        this.accessData = this.allData.access_arr
        // 男女比列
        let sexData = JSON.parse(JSON.stringify(MOBILE.SEX_FENBU0))
        sexData.series[0].data[0].value = this.accessData.person_num.male
        sexData.series[0].data[1].value = this.accessData.person_num.female
        this.sexEcharts = sexData
        // 年龄层分布
        let ageData = JSON.parse(JSON.stringify(MOBILE.AGE_FENBU))
        let ageList = this.accessData.person_num.birthday
        let aList = []
        ageList.forEach(k => {
          let obj = {
            value: k.num,
            name: k.year
          }
          if (obj.value !== 0) {
            aList.push(obj)
          }
        })
        ageData.series[0].data = aList
        this.ageEcharts = ageData
        // 累计时长转换
        let second = this.accessData.school_info.duration
        this.accessData.school_info.hour = getRound(second / 3600, 1)
        // 时间段echart
        let pointMatch = JSON.parse(JSON.stringify(MOBILE.POINT_MATCHS))
        pointMatch.grid.top = '15%'
        pointMatch.grid.right = '10%'
        pointMatch.xAxis[0].name = '运动时间'
        pointMatch.xAxis[0].nameGap = 3
        pointMatch.yAxis[0].name = '运动次数'
        pointMatch.yAxis[0].nameGap = 8
        let timeList = this.accessData.time_line
        let xData = []
        let sData = []
        timeList.forEach(k => {
          xData.push(k.hour)
          sData.push(k.value)
        })
        pointMatch.xAxis[0].data = xData
        pointMatch.series[0].data = sData
        this.timeEcharts = pointMatch
      },
      setConstData () {
        this.constData = this.allData.const_info
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
    padding:4.38vh 2.89vw;
    overflow: hidden;
    height:92.38vh;
    .left{
      float: left;
      width: 18.15vw;
      height: 83.62vh;
      .left1{
        padding:0 5%;
        padding-top:0.5vh;
        height: 43.62vh;
        margin-bottom: 3.64vh;
        background:url('/static/images/gd/left1.png') no-repeat;
        background-size: 100% 43.62vh;
        .personNumLeft{
          float: left;
          height: 11.3vh;
          width: 49%;
          .inlineDiv{
            >div{
              display: inline-block;
              vertical-align: middle;
            }
            .sexEchart{
              padding-top: 0.5vh;
              width: 50%;
              height: 9vh;
            }
            .fenbu{
              padding: 1vh 0;
              p{
                font-size: 1.43vh;
                width: 2vw;
                white-space: nowrap;
                color: #38a7ee;
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
          }
        }
        .personNumRight{
          float: right;
          height: 11.3vh;
          width: 49%;
          .ageEchart{
            width: 100%;
            height: 9vh;
          }
        }
      }
      .left2{
        padding:0 5%;
        padding-top:0.5vh;
        height: 36.36vh;
        background:url('/static/images/gd/left1.png') no-repeat;
        background-size: 100% 36.36vh;
      }
    }
    .mid{
      float: left;
      margin-left: 1.33vw;
      margin-right: 1.33vw;
      width: 37.51vw;
      height: 84vh;
      padding:0 2%;
      padding-top:0.5vh;
      margin-bottom: 2vh;
      background:url('/static/images/gd/mid1.png') no-repeat;
      background-size: 100% 84vh;
      .timeEchart{
        height: 18vh;
      }
    }
    .right{
      float: left;
      width: 35.51vw;
      height: 84vh;
      padding:0 2vw;
      padding-top:0.5vh;
      background:url('/static/images/gd/mid1.png') no-repeat;
      background-size: 100% 84vh;
      .rankTagTitle{
        width: 100%;
        text-align: center;
        margin-top: 2vh;
        height: 3vh;
        font-size: 1.6vh;
        color: #38a7ee;
        >tbody>tr>td{
          width: 25%;
          border: 1px solid #38a7ee;
        }
      }
      .playerArea{
        width: 100%;
        overflow: auto;
        height: 35vh;
        .lineImg1{
          width: 10%;
          height: 35vh;
          background:url('/static/images/gd/line1.png') no-repeat 50% 50%;
          background-size: 1px 35vh;
          float:left;
        }
      }
      .playerList{
        width: 45%;
        table-layout: fixed;
        float: left;
        height: 35vh;
        >tbody>tr>td{
          padding:0vh;
          height: 1.5vh;
          line-height: 1.5vh;
          border: 0;
          font-size: 1.44vh;
          color:#38a7ee;
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
          overflow: hidden;
          white-space: nowrap;
        }
        >tbody>tr>td:last-child {
          text-align: right;
        }
        >tbody>tr>td:last-child p{
          white-space: nowrap;
          overflow: hidden;
        }
        >tbody>tr.top td:first-child span{
          border:1px solid #d0c62e;
          color: #d0c62e;
        }
        >tbody>tr.top td:nth-child(3){
          color: #d0c62e;
        }
      }
    }
    .noBorder{
      border: none
    }
    .tagTitle{
      width: 100%;
      overflow: auto;
      text-align: center;
      color: #38a7ee;
      font-size: 1.5vh;
      margin: 0.5vh 0;
      >div{
        float: left;
        width: 33.33%;
      }
    }
    .redText{
      color: #d26563;
    }
    .echartTitle{
      font-size: 1.43vh;
      color: #38A7EE;
    }
    .lineImg{
      height: 11.43vh;
    }
    .centerText{
      text-align: center;
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
