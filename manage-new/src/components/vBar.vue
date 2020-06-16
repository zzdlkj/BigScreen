<template>
  <div v-el:chart :style="defaultStyle">
    <div style="width:94%;margin:0 3%;height:100%; padding: 3% 0;">
      <Perch-Image></Perch-Image>
    </div>
  </div>
  <div v-if="dataSum==0&&!viewloading&&showload&&!isset" :style="{lineHeight: lineHeight + 'px'}" class="nullData">{{msg}}</div>
  <div v-if="dataSum==0&&!viewloading&&showload&&isset" class="nullSet">
    <slot name='nodata'>
      <span class='txts'>此时间段无相关数据</span>
    </slot>
  </div>
</template>
<style scoped>
.nullData{
  text-align: center;
  position: relative;
  top: -100%;
  width:100%;
  height: 100%;
  /*line-height: 100%;*/
  /*color: #bfb5cf;*/
  /*background-color: rgba(85, 94, 117, 0.5);*/
  background-color: rgba(204, 204, 204, 0.5);
  color:#444;
}
.nullSet{
  text-align: center;
  position: relative;
  top: -100%;
  width:100%;
  height: 100%;
  /*line-height: 310px;*/
  background-color: rgba(204, 204, 204, 0.5);
  color:#444;
}
.nullSet .txts{
  position: relative;
  top:48%;
  /*margin-top: 150px;*/
  /*display: inline-block;*/
}
</style>
<script>
import Rx from 'rxjs/Rx'
import echarts from 'echarts'
import PerchImage from 'components/PerchImage'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/chart/pie'
export default {
  components: {
    PerchImage
  },
  data: function () {
    return {
      isReady: false,
      showload: true,
      dataSum: 0,
      screenSize: '',
      boxWidth: '',
      resizeEvent: null,
      lineHeight: '300px'
    }
  },
  props: {
    Echartobj: Object,
    width: {
      type: [Number, String],
      default: ''
    },
    height: {
      type: [Number, String],
      default: ''
    },
    callback: {
      type: Function,
      default: () => {}
    },
    piecallback: {
      type: Function,
      default: () => {}
    },
    echarts_click: {
      type: Function,
      default: () => {}
    },
    middledatasum: '',
    viewloading: '',
    isset: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    defaultStyle () {
      var str
      if (this.width === '') {
        str = 'width:' + 100 + '%;'
      } else {
        str = 'width:' + this.width + 'px;'
      }
      if (this.height === '') {
        str += 'height:' + 100 + '%;'
      } else {
        str += 'height:' + this.height + 'px;'
      }
      return str
    },
    msg () {
      let str = this.isReady ? '无相关数据' : ''
      return str
    }
  },
  watch: {
    Echartobj: {
      deep: true,
      handler (obj) {
        if (obj) {
          this.initChart(obj)
        }
      }
    },
    boxWidth () {
      this.myChart.resize()
    }
  },
  ready () {
    let self = this
    // 需要在ready的时候初始化echarts 之前是在initChart内 会导致页面内存增长
    // 事件也不能在initchart函数内增加 否则会导致触发多次事件
    this.myChart = echarts.init(this.$els.chart)
    if (JSON.stringify(this.Echartobj) !== '{}') {
      this.initChart(this.Echartobj)
    }
    this.myChart.on('legendselectchanged', function (params) {
      self.callback(params)
      self.$dispatch('legendselectfunction', [params, this.myChart])
      return false
    })
    this.myChart.on('click', function (params) {
      self.echarts_click(params)
    })
    this.lineHeight = this.$els.chart.offsetHeight
//    window.onresize = function () {
//      self.boxWidth = self.$els.chart.offsetWidth
//      console.log(self.boxWidth)
//    }
    // Rxjs 降低一下触发的程度
    this.resizeEvent = Rx.Observable.fromEvent(window, 'resize')
    .debounceTime(300)
    .filter(() => {
      return this.$els.chart
    })
    .subscribe(e => {
      self.boxWidth = self.$els.chart.offsetWidth
    })
  },
  subscriptions () {
    return {
      windowWidth: this.$fromDOMEvent(window, 'resize')
        .debounceTime(300)
        .map(e => {
          console.log(e)
        })
    }
  },
  methods: {
    test () {
      this.showload = false
      console.log(this.showload)
      if (this.myChart) {
        this.myChart.showLoading({
          text: this.$t('components.vBar.load'),
          maskColor: 'rgba(204, 204, 204, 0.5)'
          // color: '#db3731',
          // textColor: '#db3731'
        })
      }
    },
    resize () {
      this.myChart.resize()
    },
    select (value) {
      this.myChart.dispatchAction({
        type: 'legendToggleSelect',
        name: value
      })
    },
    initChart (option) {
      this.isReady = true
      if (this.myChart) {
        this.myChart.hideLoading()
      }
      this.myChart.clear()
      this.myChart.setOption(option)
      let series = option.series
      let sum = 0
      series.forEach(function (val) {
        let datas = val.data
        if (datas instanceof Array) {
          sum += datas.length
        } else if (datas instanceof Object) {
          datas.data.forEach(v => {
            sum += parseFloat(v)
          })
        }
      })
      this.dataSum = sum
      this.showload = true
      // 尝试删除echartobj 释放内存 这里如果清空之后就会出现 下次更新的问题
     // console.info('清除Echarts-Object')
     // this.Echartobj = null
    }
  },
  events: {
    initEcharts () {
      let obj = this.Echartobj
      if (obj) {
        this.initChart(obj)
      }
    },
    showLoading () {
      this.test()
    }
  },
  beforeDestroy () {
    // 销毁实例
    this.Echartobj = null
    this.myChart && this.myChart.dispose()
    // 解除Rx对窗口变化的检测
    this.resizeEvent.unsubscribe()
    this.resizeEvent = null
  }
}
</script>
