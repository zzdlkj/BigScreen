/* eslint-disable */  //取消严格模式
const PERSON = {
  EDU_RADAR_ECHART: {
    color: ['#ee5e67', '#ee5e67', '#ee5e67', '#ee5e67', '#ee5e67', '#ee5e67'],
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: '10%',
      y: 'center',
      itemWidth: 18,
      itemHeight: 18,
      itemGap: 15,
      selected: {
        '03男子U15': false,
        '01男子U17': false,
        '99女足U20': true,
        '03女足U15': false,
        '00女足U18': false,
        '女足黄队': false
      },
      // 393f5c 灰色   ee5e67 红  38a7ee 蓝色
      data: [
        {name: '03男子U15', textStyle: {color: '#393f5c'}},
        {name: '01男子U17', textStyle: {color: '#393f5c'}},
        {name: '99女足U20', textStyle: {color: '#ee5e67'}},
        {name: '03女足U15', textStyle: {color: '#393f5c'}},
        {name: '00女足U18', textStyle: {color: '#393f5c'}},
        {name: '女足黄队', textStyle: {color: '#393f5c'}}
      ],
      inactiveColor: '#393f5c'
    },
    radar: [
      {
        indicator: [
          // 这里设置最大值    {text: '最高1分钟跑动距离', max: 5500}
          {text: '一般耐力'},
          {text: '心率强度'},
          {text: '速度能力'},
          {text: '爆发力'},
          {text: '最高1分钟\n 跑动距离'}
        ],
        center: ['35%', '55%'],
        splitNumber: 8,
        // 不显示
        axisLine: {
          lineStyle: {
            color: '#38a7ee',
            width: 0
          }
        },
        splitArea: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#38a7ee',
            width: 1
          }
        },
        nameGap: 5,
        name: {
          textStyle: {
            color: '#38a7ee'
          }
        }
      }
    ],
    series: [
      {
        name: '成绩单',
        type: 'radar',
        symbol: 'none',
        data: [
          // 这一条为标杆数据
          {
            value: [500, 100, 40, 10, 200],
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#d0c62e'
              }
            },
            lineStyle: {
              normal: {
                color: '#d0c62e'
              }
            }
          },
          {
            value: [450, 80, 30, 7, 150],
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#36b8e5'
              }
            },
            lineStyle: {
              normal: {
                color: '#36b8e5'
              }
            }
          },
          {
            value: [400, 50, 20, 6, 100],
            name: '03男子U15',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [400, 50, 20, 6, 100],
            name: '01男子U17',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [400, 50, 20, 6, 100],
            name: '99女足U20',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [400, 50, 20, 6, 100],
            name: '03女足U15',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [400, 50, 20, 6, 100],
            name: '00女足U18',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [400, 50, 20, 6, 100],
            name: '女足黄队',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          }
        ]
      }
    ]
  },
  EDU_CITY_ECHART: {
    color: ['#38a7ee', '#d26563'],
    grid: {
      left: '3%',
      right: '3%',
      top: '5%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['韶关市', '梅州市', '清远市', '河源市', '潮州市', '肇庆市', '揭阳市', '汕头市', '广州市', '惠州市'],
        axisLabel: {
          rotate: 45,
          textStyle: {
            color: 'gray'
          }
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#373c53'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          lineStyle: {
            width: 2,
            color: '#373c53'
          }
        },
        axisLabel: {
          textStyle: {
            color: 'gray'
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#373c53'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        type: 'bar',
        barWidth: 10,
        data: [103, 111, 120, 98, 45, 15, 49, 72, 95, 70]
      }
    ]
  },
  EDU_AGE_ECHART: {
    color: ['#38a7ee', '#d26563'],
    grid: {
      left: '3%',
      right: '3%',
      top: '5%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['韶关市', '梅州市', '清远市', '河源市', '潮州市', '肇庆市', '揭阳市', '汕头市', '广州市', '惠州市'],
        axisLabel: {
          textStyle: {
            color: '#38a7ee'
          }
        },
        splitLine: {
          lineStyle: {
            color: ['#e0e0e0']
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#38a7ee'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#38a7ee'
          }
        },
        splitLine: {
          lineStyle: {
            width: 2,
            color: '#373c53'
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#38a7ee'
          }
        },
        axisTick: {show: false
        }
      }
    ],
	series: [
      {
        type: 'bar',
        label: {
          normal: {
            show: true
          }
        },
        barWidth: 10,
        data: [103, 111, 120, 98, 45, 15, 49, 72, 95, 70]
      }, {
        type: 'bar',
        label: {
          normal: {
            show: true
          }
        },
        barWidth: 10,
        data: [47, 48, 60, 50, 103, 111, 120, 98, 45, 15]
		}
    ]
  },
  MATCH_HR_LOAD_TREND: {
    color:['#3398DB'],
    grid: {
      // top: 50,
      // bottom: 40,
      // left: 50,
      // right: 45,
      padding: [0, 20]
    },
    legend: {
      data: ['平均心率', '平均分钟身体负荷']
    },
    xAxis: {
      boundaryGap: true,
      axisLine: {
        lineStyle: {
          color: '#b5b5b5'
        }
      },
      axisLabel: {
        color: '#000'
      },
      //  data: ['0\'', '10\'', '20\'', '30\'', '40\'', '50\'', '60\'']
      data: []
    },
    yAxis: [
      {
        name: '指导运动次数',
        minInterval: 0, //设置成1保证坐标轴分割刻度显示成整数。
        axisLine: {
          lineStyle: {
            color: '#444'
          }
        },
        axisLabel: {
          color: '#b5b5b5'
        },
        splitLine: {
          show: false
        }
      },
      {
        name: '指导运动时长',
        axisLine: {
          lineStyle: {
            color: '#444'
          }
        },
        axisLabel: {
          color: '#b5b5b5'
        },
        splitLine: {
          show: false 
			}
      }
    ],
	tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    series: [
      {
        name: '平均心率',
        // 666
        type: 'bar',
        smooth: true,
        barWidth: '25',
        barCategoryGap: '20%',
        // data: [200, 162, 181, 224, 270, 300, 210]
        data: []
      },
      {
        name: '平均分钟身体负荷',
        type: 'line',
        yAxisIndex: 1,
        smooth: true, //平滑曲线显示
        showAllSymbol: true, //显示所有图形。
        // symbol: "circle", //标记的图形为实心圆
        symbolSize: 5, //标记的大小
        itemStyle: {
          normal: {
            color: "#88a5b6",
            lineStyle: {
              color: "#88a5b6"
            }
          }
        },
        // areaStyle:{
        //   color: "rgba(5,140,255, 0.2)"
        // },
        data: []
      }
    ]
  },
  TREND_ECHARTS: {
    legend: {
      // show: false,
      data: ['平均5min跑动距离', '有效锻炼时间占比', '最高心率'],
      textStyle: {
        color: '#444',
        fontSize: 12
      },
      tooltip: {
        show: true,
        confine: true,
        formatter: function (name) {
          return ''
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 25,
      right: 25,
      top: 40,
      bottom: 47,
      containLabel: true
    },
    color: ['#5c5c5c', '#d93831', '#fcda3e'],
    xAxis: {
      type: 'category',
      data: [
        {value: '07-26\n比赛', 'textStyle': {'color': '#444', 'fontSize': '12px'}},
        {value: '07-24\n比赛', 'textStyle': {'color': '#444', 'fontSize': '12px'}},
        {value: '07-21\n比赛', 'textStyle': {'color': '#444', 'fontSize': '12px'}},
        {value: '07-14\n运动', 'textStyle': {'color': '#111', 'fontSize': '12px'}},
        {value: '07-07\n比赛', 'textStyle': {'color': '#444', 'fontSize': '12px'}}
      ],
      axisLine: {
        // show: false,
        lineStyle: {
          color: '#4a5266'
        }
      },
      axisTick: {show: false},
      axisLabel: {
        rotate: 45,
        interval: 0,
        textStyle: {
          color: '#444',
          fontSize: '12px'
        }
      },
      triggerEvent: true
    },
    yAxis: [
      {
        // position: 'right',
        show: true,
        min: 0,
        splitLine: {
          show: false,
          lineStyle: {
            color: '#4a5266'
          }
        },
        nameTextStyle: {color: '#444'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {show: false},
        name: 'm'
      },
      {
        // position: 'left',
        min: 0,
        show: false,
        splitLine: {
          show: false
        },
        nameTextStyle: {color: '#d93831'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {
          show: false
        },

        name: '%'
      },
      {
        // position: 'left',
        min: 0,
        offset: 45,
        show: false,
        splitLine: {
          show: false,
          lineStyle: {color: '#4a5266'}
        },
        nameTextStyle: {color: '#fcda3e'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        axisLine: {
          show: true,
          lineStyle: {color: '#444'}
        },
        axisTick: {
          show: false
        },
        name: 'bpm'
      }
    ],
    barGap: '1%',
    series: [
      {
        type: 'bar',
        smooth: true,
        symbolSize: 6,
        symbol: 'circle',
        barMaxWidth: 20,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            barBorderRadius: 3
          }
        },
        data: [1373, 372, 500, 539, 1528],
        name: '平均5min跑动距离'
      },
      {
        type: 'line',
        smooth: true,
        barMaxWidth: 5,
        lineStyle: {
          normal: {width: 2}
        },
        symbolSize: 6,
        symbol: 'circle',
        yAxisIndex: 1,
        data: [63.3, 88.2, 83.3, 59.1, 64.5],
        name: '有效锻炼时间占比'
      },
      {
        type: 'line',
        smooth: true,
        symbolSize: 6,
        lineStyle: {
          normal: {width: 2}
        },
        symbol: 'circle',
        yAxisIndex: 2,
        data: [230, 221, 230, 213, 230],
        name: '最高心率'
      }
    ]
  },
  RANK_ECHARTS: {
    legend: {
      data: ['运动总距离', '运动总次数'],
      textStyle: {
        color: '#444',
        fontSize: 12
      },
      selected: {
        '运动总距离': true,
        '运动总次数': true
      },
      tooltip: {
        show: true,
        triggerOn: 'mousemove',
        confine: true,
        formatter: function (name) {
          return ''
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 25,
      right: 25,
      top: 40,
      bottom: 50,
      containLabel: true
    },
    dataZoom: [
      {
        type: 'slider',
        show: true,
        height: 20,
        bottom: 5,
        startValue: 0,
        endValue: 35,
        // backgroundColor: 'rgba(106,169,232,0.2)',
        backgroundColor: 'rgba(68,68,68,0.2)',
        dataBackground: {
          lineStyle: {
            color: 'rgba(68,68,68,0)'
          },
          areaStyle: {
            color: 'rgba(68,68,68,0)'
          }
        },
        fillerColor: 'rgba(68,68,68,0.6)',
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleStyle: {
          color: 'rgba(68,68,68,0.9)'
        }
      }
    ],
    color: ['#d93831', '#5c5c5c', '#d93831', '#fcda3e'],
    xAxis: {
      type: 'category',
      data: ['张一', '张二', '张三', '张思', '张武', '张六'],
      axisLine: {
        // show: false,
        lineStyle: {
          color: '#4a5266'
        }
      },
      axisTick: {show: false},
      axisLabel: {
        rotate: 45,
        interval: 0,
        textStyle: {
          color: '#444'
        }
      },
      triggerEvent: true
    },
    yAxis: [
      {
        // position: 'right',
        show: true,
        min: 0,
        splitLine: {
          show: false,
          lineStyle: {
            color: '#4a5266'
          }
        },
        nameTextStyle: {color: '#444'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {show: false},
        name: 'm'
      },
      {
        // position: 'left',
        min: 0,
        show: false,
        splitLine: {
          show: false
        },
        nameTextStyle: {color: '#d93831'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        axisTick: {
          show: false
        },
        name: '次'
      }
    ],
    barGap: '1%',
    series: [
      {
        // type: 'bar',
        // barMaxWidth: 20,
        type: 'line',
        smooth: true,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            barBorderRadius: 3
          }
        },
        data: [1528, 1373, 1000, 539, 500, 372],
        name: '运动总距离'
      },
      {
        // type: 'line',
        // smooth: true,
        // barMaxWidth: 5,
        type: 'bar',
        barMaxWidth: 20,
        lineStyle: {
          normal: {width: 2}
        },
        symbolSize: 6,
        symbol: 'circle',
        yAxisIndex: 1,
        data: [115, 88, 63.3, 83.3, 59.1, 64.5],
        name: '运动总次数'
      }
    ]
  },
  AGE_ECHARTS: {
    tooltip: {},
    color: ['#444', '#db3731', '#e6b80e', '#0d3483', '#6f9a2e'],
    legend: {
      show: false,
      orient: 'vertical',
      right: 5,
      top: '15%',
      // show: true,
      itemWidth: 15,
      data: ['比赛次数', '训练次数', '测评次数'],
      textStyle: {
        color: '#bfb8c5'
      }
    },
    grid: {},
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['40%', '80%'],
        // roseType: 'radius',
        clockWise: false,
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {name: '九岁及以下', value: '18'},
          {name: '10-12岁', value: '30'},
          {name: '13-15岁', value: '40'},
          {name: '16-18岁', value: '80'},
          {name: '19岁及以上', value: '50'}
        ],
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        }
      }
    ]
  },
  SEX_ECHARTS: {
    tooltip: {},
    color: ['#444', '#db3731'],
    legend: {
      show: false,
      orient: 'vertical',
      right: 5,
      top: '15%',
      // show: true,
      itemWidth: 15,
      data: ['比赛次数', '训练次数', '测评次数'],
      textStyle: {
        color: '#bfb8c5'
      }
    },
    grid: {},
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['40%', '80%'],
        // roseType: 'radius',
        clockWise: false,
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {name: '男', value: '1290'},
          {name: '女', value: '800'}
        ],
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        }
      }
    ]
  },
  TYPE_ECHARTS: {
    tooltip: {},
    color: ['#444', '#db3731'],
    legend: {
      // show: false,
      orient: 'vertical',
      right: 5,
      top: '15%',
      // show: true,
      itemWidth: 15,
      data: ['比赛', '综合'],
      textStyle: {
        color: '#444'
      }
    },
    grid: {},
    series: [
      {
        name: '总次数',
        type: 'pie',
        radius: ['40%', '80%'],
        roseType: 'radius',
        clockWise: false,
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {name: '比赛', value: '75'},
          {name: '综合', value: '25'}
        ],
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        }
      }
    ]
  },
  HR_ECHARTS: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['红队人均'],
      show: false
    },
    color: ['#444', '#db3731', '#f9c20d'],
    grid: {
      left: '3%',
      right: '3%',
      top: 10,
      bottom: 5,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6'],
        axisLabel: {
          textStyle: {
            color: '#444',
            fontWeight: 300
          },
          interval: 0
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: ['#e0e0e0']
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: ['#e0e0e0']
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        max: 100,
        // name: '时间(min)',
        nameTextStyle: {
          color: '#444',
          fontWeight: 300
        },
        axisLabel: {
          textStyle: {
            color: '#444',
            fontWeight: 300
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: ['#e0e0e0']
          }
        }
      }
    ],
    series: [
      {
        name: '红队人均',
        type: 'bar',
        barMaxWidth: '5px',
        itemStyle: {
          normal: {
            barBorderRadius: 3
          }
        },
        data: [10, 30, 10, 20, 10, 20]
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'top',
        //     formatter: function (val) {
        //       return val.data + ' (20%)'
        //     }
        //   }
        // }
      }
    ]
  },
  SPORT_ECHARTS: {
    legend: {
      data: ['红队人均'],
      show: false
    },
    color: ['#444', '#db3731', '#f9c20d'],
    grid: {
      left: '3%',
      right: '3%',
      top: 10,
      bottom: 5,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6'],
        axisLabel: {
          textStyle: {
            color: '#444',
            fontWeight: 300
          },
          interval: 0
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: ['#e0e0e0']
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: ['#e0e0e0']
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        max: 100,
        // name: '时间(min)',
        nameTextStyle: {
          color: '#444',
          fontWeight: 300
        },
        axisLabel: {
          textStyle: {
            color: '#444',
            fontWeight: 300
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: ['#e0e0e0']
          }
        }
      }
    ],
    series: [
      {
        name: '红队人均',
        type: 'line',
        smooth: true,
        symbolSize: 1,
        // lineStyle: {
        //   normal: {width: 2}
        // },
        symbol: 'circle',
        data: [10, 30, 10, 20, 10, 20]
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'top',
        //     formatter: function (val) {
        //       return val.data + ' (20%)'
        //     }
        //   }
        // }
      }
    ]
  },
  TREND_LEVEL: {
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 0,
      right: 0,
      top: 5,
      bottom: 25,
      containLabel: false
    },
    color: ['#3399cc'],
    xAxis: {
      type: 'category',
      data: [],
      axisTick: {show: false},
      axisLine: {
        lineStyle: {
          // color: '#aaa'
        }
      },
      axisLabel: {
        color: '#aaa'
      }
    },
    yAxis: [
      {
        show: false,
        min: 0,
        splitLine: {
          show: false
        },
        axisLine: {show: false},
        axisTick: {show: false},
        name: 'm'
      }
    ],
    series: [
      {
        type: 'line',
        smooth: true,
        showSymbol: false,
        // itemStyle: {normal: {areaStyle: {type: 'default'}}},
        // lineStyle: {
        //   normal: {width: 2}
        // },
        // symbolSize: 2,
        symbol: 'circle',
        data: [],
        name: '身高'
      }
    ]
  },
  MODAL_TREND_LEVEL: {
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      // left: 50,
      // right: 50,
      top: 30,
      bottom: 30,
      containLabel: false
    },
    color: ['#99dc99'],
    xAxis: {
      type: 'category',
      data: [],
      axisTick: {show: false},
      axisLine: {
        lineStyle: {
          // color: '#aaa'
        }
      },
      axisLabel: {
        color: '#aaa'
      }
    },
    yAxis: [
      {
        // position: 'right',
        // show: false,
        min: 0,
        splitLine: {
          show: false
        },
        // nameTextStyle: {color: '#444'},
        axisLabel: {
          // textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {show: false},
        name: 'm'
      }
    ],
    series: [
      {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        data: [],
        name: '身高'
      }
    ]
  },
  LITTLE_ECHARTS: {
    tooltip: {
      show: false,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
      containLabel: false
    },
    color: ['#97b552', '#49acf0'],
    xAxis: {
      show: false,
      type: 'category',
      data: ['分布']
    },
    yAxis: {
      show: false,
      min: 0,
      type: 'value'
    },
    barGap: '60%',
    series: [
      {
        name: '团队运动',
        type: 'bar',
        barWidth: 8,
        data: [78]
      },
      {
        name: '个人运动',
        type: 'bar',
        barWidth: 8,
        data: [58]
      }
    ]
  },
  DIS_FENBU: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    // color: ['#2ec7c9', '#d35833', '#5ab1ef', '#ffb980'],
    color: ['#444', '#db3731', '#e6b80e', '#6f9a2e', '#6f9a2e'],
    legend: {
      orient: 'vertical',
      right: 0,
      top: 'middle',
      align: 'left',
      itemWidth: 15,
      selectedMode: false,
      itemGap: 5,
      data: ['团队比赛', '团队综合', '个人比赛', '个人综合'],
      formatter: function (name) {
        var oa = PERSON.DIS_FENBU.series[0].data
        // var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value
        for (var i = 0; i < oa.length; i++) {
          if (name === oa[i].name) {
            return ' ' + name + '：' + oa[i].value + ' km'
          }
        }
      }
    },
    series: [
      {
        name: '跑动距离',
        type: 'pie',
        radius: '75%',
        center: ['25%', '50%'],
        data: [
          {value: 335, name: '团队比赛'},
          {value: 310, name: '团队综合'},
          {value: 234, name: '个人比赛'},
          {value: 135, name: '个人综合'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          normal: {
            label: {
              show: false,
              formatter: '{b} : {c}'
            }
          },
          labelLine: {show: true}
        }
      }
    ]
  },
  DUR_FENBU: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    // color: ['#2ec7c9', '#d35833', '#5ab1ef', '#ffb980'],
    color: ['#444', '#db3731', '#e6b80e', '#6f9a2e', '#6f9a2e'],
    legend: {
      orient: 'vertical',
      x: 'right',
      top: 'middle',
      align: 'left',
      itemWidth: 15,
      selectedMode: false,
      itemGap: 5,
      data: ['团队比赛', '团队综合', '个人比赛', '个人综合'],
      formatter: function (name) {
        var oa = PERSON.DUR_FENBU.series[0].data
        // var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value
        for (var i = 0; i < oa.length; i++) {
          if (name === oa[i].name) {
            return ' ' + name + '：' + oa[i].value + ' min'
          }
        }
      }
    },
    series: [
      {
        name: '总运动时长',
        type: 'pie',
        radius: '75%',
        center: ['25%', '50%'],
        data: [
          {value: 335, name: '团队比赛'},
          {value: 310, name: '团队综合'},
          {value: 234, name: '个人比赛'},
          {value: 135, name: '个人综合'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          normal: {
            label: {
              show: false,
              formatter: '{b} : {c}'
            }
          },
          labelLine: {show: true}
        }
      }
    ]
  },
  HR_TIME: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    // color: ['#444', '#db3731', '#e6b80e', '#6f9a2e', '#0d3483'],
    color: ['#74CB60', '#94C533', '#DEC547', '#EC9E51', '#F06044', '#CE0F3F'],
    grid: {
      bottom: 10,
      top: 10
    },
    legend: {
      orient: 'vertical',
      x: 155,
      top: 'middle',
      align: 'left',
      itemWidth: 15,
      selectedMode: false,
      itemGap: 1,
      data: ['[0, 65%)', '[66%, 71%)', '[72%, 78%)', '[79%, 85%)', '[86%, 92%)', '[93%, 100%)'],
      formatter: function (name) {
        var oa = PERSON.HR_TIME.series[0].data
        var num = 0
        oa.forEach(val => {
          num += val.value
        })
        for (var i = 0; i < oa.length; i++) {
          if (name === oa[i].name) {
            return ' ' + name + '：' + oa[i].value + ' min (' + (oa[i].value / num * 100).toFixed(1) + '%)'
          }
        }
      }
    },
    series: [
      {
        name: '心率强度-时间分布',
        type: 'pie',
        radius: ['42%', '62%'],
        center: ['20%', '50%'],
        data: [
          {value: 335, name: '[0, 65%)'},
          {value: 120, name: '[66%, 71%)'},
          {value: 335, name: '[72%, 78%)'},
          {value: 120, name: '[79%, 85%)'},
          {value: 335, name: '[86%, 92%)'},
          {value: 120, name: '[93%, 100%)'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          normal: {
            label: {
              show: false,
              formatter: '{b} : {c}'
            }
          },
          labelLine: {show: true}
        },
        hoverAnimation: false
      }
    ]
  },
  SPEED_TIME: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    // color: ['#444', '#db3731', '#e6b80e', '#6f9a2e', '#0d3483'],
    color: ['#74CB60', '#94C533', '#DEC547', '#EC9E51', '#F06044', '#CE0F3F'],
    grid: {
      bottom: 10,
      top: 10
    },
    legend: {
      orient: 'vertical',
      x: 155,
      top: 'middle',
      align: 'left',
      itemWidth: 15,
      itemGap: 1,
      selectedMode: false,
      data: ['走慢跑', '低速跑', '中速跑', '快速跑', '高速跑', '冲刺跑'],
      formatter: function (name) {
        var oa = PERSON.HR_TIME.series[0].data
        var num = 0
        oa.forEach(val => {
          num += val.value
        })
        for (var i = 0; i < oa.length; i++) {
          if (name === oa[i].name) {
            return ' ' + name + '：' + oa[i].value + ' min (' + (oa[i].value / num * 100).toFixed(1) + '%)'
          }
        }
      }
    },
    series: [
      {
        name: '速度-时间分布',
        type: 'pie',
        radius: ['42%', '62%'],
        center: ['20%', '50%'],
        data: [
          {value: 335, name: '走慢跑'},
          {value: 120, name: '低速跑'},
          {value: 335, name: '中速跑'},
          {value: 120, name: '快速跑'},
          {value: 335, name: '高速跑'},
          {value: 120, name: '冲刺跑'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          normal: {
            label: {
              show: false,
              formatter: '{b} : {c}'
            }
          },
          labelLine: {show: true}
        },
        hoverAnimation: false
      }
    ]
  },
  TIME_FENBU: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    // color: ['#2ec7c9', '#d35833', '#5ab1ef', '#ffb980'],
    color: ['#db3731', '#e6b80e', '#444', '#0d3483', '#6f9a2e'],
    legend: {
      orient: 'vertical',
      x: 160,
      top: 'middle',
      align: 'left',
      itemWidth: 15,
      selectedMode: false,
      data: ['上午', '下午', '晚上'],
      formatter: function (name) {
        var oa = PERSON.TIME_FENBU.series[0].data
        // var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value
        for (var i = 0; i < oa.length; i++) {
          if (name === oa[i].name) {
            return ' ' + name + '：' + oa[i].value + ' 场'
          }
        }
      }
    },
    series: [
      {
        name: '时间分布',
        type: 'pie',
        radius: '60%',
        center: ['20%', '50%'],
        data: [
          {value: 335, name: '上午'},
          {value: 310, name: '下午'},
          {value: 234, name: '晚上'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          normal: {
            label: {
              show: false,
              formatter: '{b} : {c}'
            }
          },
          labelLine: {show: true}
        }
      }
    ]
  },
  TONGJI: {
    tooltip: {
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    dataZoom: [
      {
        type: 'slider',
        show: true,
        height: 20,
        bottom: 5,
        left: 65,
        right: 65,
        startValue: 87,
        endValue: 100,
        xAxisIndex: [0, 1],
        backgroundColor: 'rgba(68,68,68,0.2)',
        dataBackground: {
          lineStyle: {
            color: 'rgba(68,68,68,0)'
          },
          areaStyle: {
            color: 'rgba(68,68,68,0)'
          }
        },
        fillerColor: 'rgba(68,68,68,0.6)',
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleStyle: {
          color: 'rgba(68,68,68,0.9)'
        }
      }
    ],
    grid: [
      {
        left: 50,
        right: 50,
        // top: '2%',
        height: '30%'
      },
      {
        left: 50,
        right: 50,
        top: '57%',
        height: '30%'
      }
    ],
    // color: ['#2ec7c9', '#d35833', '#5ab1ef', '#ffb980', '#b3d6b3'],
    color: ['#444', '#db3731', '#e6b80e', '#6f9a2e', '#2775a5'],
    legend: {
      data: ['团队比赛', '团队综合', '个人比赛', '个人综合', '心率负荷'],
      itemWidth: 15
    },
    xAxis: [
      {
        type: 'category',
        axisLabel: {show: false},
        // show: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
      },
      {
        gridIndex: 1,
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
      }
    ],
    yAxis: [
      {
        name: '次',
        type: 'value',
        nameTextStyle: {
          fontWeight: 'bold',
          fontSize: 14
        },
        splitLine: {show: false}
      },
      {
        gridIndex: 1,
        name: 'km',
        type: 'value',
        nameTextStyle: {
          fontWeight: 'bold',
          fontSize: 14
        },
        splitLine: {show: false}
      },
      {
        gridIndex: 1,
        name: 'trimp',
        type: 'value',
        nameTextStyle: {
          fontWeight: 'bold',
          fontSize: 14
        },
        splitLine: {show: false}
      }
    ],
    series: [
      {
        name: '团队比赛',
        type: 'bar',
        barWidth: 20,
        stack: '次数',
        hoverAnimation: false,
        data: [67, 68, 67, 68, 69, 70]
      },
      {
        name: '团队综合',
        type: 'bar',
        barWidth: 20,
        stack: '次数',
        hoverAnimation: false,
        data: [67, 68, 67, 68, 69, 70]
      },
      {
        name: '个人比赛',
        type: 'bar',
        barWidth: 20,
        stack: '次数',
        hoverAnimation: false,
        data: [67, 68, 67, 68, 69, 70]
      },
      {
        name: '个人综合',
        type: 'bar',
        barWidth: 20,
        stack: '次数',
        hoverAnimation: false,
        data: [67, 68, 67, 68, 69, 70]
      },
      {
        name: '团队比赛',
        type: 'bar',
        barWidth: 20,
        stack: '距离',
        xAxisIndex: 1,
        yAxisIndex: 1,
        hoverAnimation: false,
        data: [67, 68, 67, 68, 69, 70]
      },
      {
        name: '团队综合',
        type: 'bar',
        barWidth: 20,
        stack: '距离',
        xAxisIndex: 1,
        yAxisIndex: 1,
        hoverAnimation: false,
        data: [67, 68, 67, 68, 69, 70]
      },
      {
        name: '个人比赛',
        type: 'bar',
        barWidth: 20,
        stack: '距离',
        xAxisIndex: 1,
        yAxisIndex: 1,
        hoverAnimation: false,
        data: [67, 68, 67, 68, 69, 70]
      },
      {
        name: '个人综合',
        type: 'bar',
        barWidth: 20,
        stack: '距离',
        xAxisIndex: 1,
        yAxisIndex: 1,
        hoverAnimation: false,
        data: [67, 68, 67, 68, 69, 70]
      },
      {
        name: '心率负荷',
        type: 'line',
        xAxisIndex: 1,
        yAxisIndex: 2,
        data: [4.5, 4.2, 4.5, 4.6, 4.1, 4.5]
      }
    ]
  },
  TEAM_FILE: {
    DIS_DISTR: {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      // color: ['#2ec7c9', '#d35833', '#5ab1ef', '#ffb980'],
      color: ['#444', '#db3731', '#e6b80e', '#6f9a2e', '#6f9a2e'],
      legend: {
        orient: 'vertical',
        x: 'right',
        top: 'middle',
        align: 'left',
        itemWidth: 15,
        selectedMode: false,
        data: ['团队比赛', '团队综合'],
        formatter: function (name) {
          var oa = PERSON.DIS_FENBU.series[0].data
          // var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value
          for (var i = 0; i < oa.length; i++) {
            if (name === oa[i].name) {
              return ' ' + name + '：' + oa[i].value + ' km'
            }
          }
        }
      },
      series: [
        {
          name: '跑动距离',
          type: 'pie',
          radius: '75%',
          center: ['25%', '50%'],
          data: [
            {value: 335, name: '团队比赛'},
            {value: 310, name: '团队综合'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            normal: {
              label: {
                show: false,
                formatter: '{b} : {c}'
              }
            },
            labelLine: {show: true}
          }
        }
      ]
    },
    DUR_DISTR: {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      // color: ['#2ec7c9', '#d35833', '#5ab1ef', '#ffb980'],
      color: ['#444', '#db3731', '#e6b80e', '#6f9a2e', '#6f9a2e'],
      legend: {
        orient: 'vertical',
        x: 'right',
        top: 'middle',
        align: 'left',
        itemWidth: 15,
        selectedMode: false,
        data: ['团队比赛', '团队综合'],
        formatter: function (name) {
          var oa = PERSON.DUR_FENBU.series[0].data
          // var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value
          for (var i = 0; i < oa.length; i++) {
            if (name === oa[i].name) {
              return ' ' + name + '：' + oa[i].value + ' min'
            }
          }
        }
      },
      series: [
        {
          name: '总运动时长',
          type: 'pie',
          radius: '75%',
          center: ['25%', '50%'],
          data: [
            {value: 335, name: '团队比赛'},
            {value: 310, name: '团队综合'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            normal: {
              label: {
                show: false,
                formatter: '{b} : {c}'
              }
            },
            labelLine: {show: true}
          }
        }
      ]
    },
    TONGJI: {
      tooltip: {
        trigger: 'axis',
        confine: true,
        axisPointer: {
          type: 'shadow'
        }
      },
      dataZoom: [
        {
          type: 'slider',
          show: true,
          height: 20,
          bottom: 5,
          left: 65,
          right: 65,
          startValue: 0,
          endValue: 100,
          xAxisIndex: [0, 1],
          backgroundColor: 'rgba(68,68,68,0.2)',
          dataBackground: {
            lineStyle: {
              color: 'rgba(68,68,68,0)'
            },
            areaStyle: {
              color: 'rgba(68,68,68,0)'
            }
          },
          fillerColor: 'rgba(68,68,68,0.6)',
          handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleStyle: {
            color: 'rgba(68,68,68,0.9)'
          }
        }
      ],
      grid: [
        {
          left: 50,
          right: 50,
          // top: '2%',
          height: '30%'
        },
        {
          left: 50,
          right: 50,
          top: '57%',
          height: '30%'
        }
      ],
      color: ['#444', '#db3731', '#e6b80e', '#6f9a2e', '#2775a5'],
      legend: {
        data: ['团队比赛', '团队综合', '心率负荷'],
        itemWidth: 15
      },
      xAxis: [
        {
          type: 'category',
          // show: false,
          axisLabel: {show: false},
          data: ['1月', '2月', '3月', '4月', '5月', '6月']
        },
        {
          gridIndex: 1,
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月']
        }
      ],
      yAxis: [
        {
          name: '次',
          type: 'value',
          nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 14
          },
          splitLine: {show: false}
        },
        {
          gridIndex: 1,
          name: 'km',
          type: 'value',
          nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 14
          },
          splitLine: {show: false}
        },
        {
          gridIndex: 1,
          name: 'trimp',
          type: 'value',
          nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 14
          },
          splitLine: {show: false}
        }
      ],
      series: [
        {
          name: '团队比赛',
          type: 'bar',
          barWidth: 20,
          stack: '次数',
          hoverAnimation: false,
          data: [67, 68, 67, 68, 69, 70]
        },
        {
          name: '团队综合',
          type: 'bar',
          barWidth: 20,
          stack: '次数',
          hoverAnimation: false,
          data: [67, 68, 67, 68, 69, 70]
        },
        {
          name: '团队比赛',
          type: 'bar',
          barWidth: 20,
          stack: '距离',
          xAxisIndex: 1,
          yAxisIndex: 1,
          hoverAnimation: false,
          data: [67, 68, 67, 68, 69, 70]
        },
        {
          name: '团队综合',
          type: 'bar',
          barWidth: 20,
          stack: '距离',
          xAxisIndex: 1,
          yAxisIndex: 1,
          hoverAnimation: false,
          data: [67, 68, 67, 68, 69, 70]
        },
        {
          name: '心率负荷',
          type: 'line',
          xAxisIndex: 1,
          yAxisIndex: 2,
          data: [4.5, 4.2, 4.5, 4.6, 4.1, 4.5]
        }
      ]
    }
  },
  // 新页面功能
  TIMES_PIE: {
    tooltip: {},
    color: ['#4080bf', '#61be52', '#f2c933'],
    legend: {
      show: false,
      orient: 'vertical',
      right: 5,
      top: '15%',
      // show: true,
      itemWidth: 15,
      data: [],
      textStyle: {
        color: '#bfb8c5'
      }
    },
    grid: {},
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['60%', '80%'],
        // roseType: 'radius',
        clockWise: false,
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          // {name: '足球比赛', value: '16'},
          // {name: '足球训练', value: '14'},
          // {name: '体育教学', value: '40'}
        ],
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        }
      }
    ]
  },
  DURATION_RANK: {
    legend: {
      // show: false,
      data: ['总运动时长', '人均运动时长', '人均单场运动时长'],
      textStyle: {
        color: '#444',
        fontSize: 12
      },
      tooltip: {
        show: true,
        confine: true,
        formatter: function (name) {
          return ''
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 25,
      right: 25,
      top: 40,
      bottom: 47,
      containLabel: true
    },
    dataZoom: [
      {
        type: 'slider',
        show: false,
        height: 20,
        bottom: 5,
        startValue: 0,
        endValue: 24,
        // backgroundColor: 'rgba(106,169,232,0.2)',
        backgroundColor: 'rgba(68,68,68,0.2)',
        dataBackground: {
          lineStyle: {
            color: 'rgba(68,68,68,0)'
          },
          areaStyle: {
            color: 'rgba(68,68,68,0)'
          }
        },
        fillerColor: 'rgba(68,68,68,0.6)',
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleStyle: {
          color: 'rgba(68,68,68,0.9)'
        }
      }
    ],
    color: ['#4a4c71', '#dc3f39', '#e7a61a'],
    xAxis: {
      type: 'category',
      data: [],
      // data: ['市一中', '市二中', '市三中', '市四中', '市五中', '市六中'],
      axisLine: {
        // show: false,
        lineStyle: {
          color: '#4a5266'
        }
      },
      axisTick: {show: false},
      axisLabel: {
        rotate: 45,
        interval: 0,
        textStyle: {
          color: '#444',
          fontSize: '12px'
        }
      },
      triggerEvent: true
    },
    yAxis: [
      {
        // position: 'right',
        show: true,
        min: 0,
        splitLine: {
          show: false,
          lineStyle: {
            color: '#4a5266'
          }
        },
        nameTextStyle: {color: '#444'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {show: false},
        name: '小时'
      },
      {
        // position: 'left',
        min: 0,
        show: true,
        splitLine: {
          show: false
        },
        nameTextStyle: {color: '#e7a61a'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {
          show: false
        },
        name: '分钟'
      }
    ],
    barGap: '1%',
    series: [
      {
        type: 'bar',
        smooth: true,
        symbolSize: 6,
        symbol: 'circle',
        barMaxWidth: 20,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            barBorderRadius: 3
          }
        },
        data: [],
        // data: [373, 372, 500, 539, 428, 200],
        name: '总运动时长'
      },
      {
        type: 'line',
        smooth: true,
        barMaxWidth: 5,
        lineStyle: {
          normal: {width: 2}
        },
        symbolSize: 6,
        symbol: 'circle',
        data: [],
        // data: [1633, 1882, 1833, 1591, 1645, 800],
        name: '人均运动时长'
      },
      {
        type: 'line',
        smooth: true,
        symbolSize: 6,
        lineStyle: {
          normal: {width: 2}
        },
        symbol: 'circle',
        yAxisIndex: 1,
        data: [],
        // data: [30, 21, 10, 13, 23, 8],
        name: '人均单场运动时长'
      }
    ]
  },
  TIMES_RANK: {
    legend: {
      // show: false,
      data: ['总运动次数', '运动人次', '人均运动场次'],
      textStyle: {
        color: '#444',
        fontSize: 12
      },
      tooltip: {
        show: true,
        confine: true,
        formatter: function (name) {
          return ''
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 25,
      right: 25,
      top: 40,
      bottom: 47,
      containLabel: true
    },
    dataZoom: [
      {
        type: 'slider',
        show: false,
        height: 20,
        bottom: 5,
        startValue: 0,
        endValue: 24,
        // backgroundColor: 'rgba(106,169,232,0.2)',
        backgroundColor: 'rgba(68,68,68,0.2)',
        dataBackground: {
          lineStyle: {
            color: 'rgba(68,68,68,0)'
          },
          areaStyle: {
            color: 'rgba(68,68,68,0)'
          }
        },
        fillerColor: 'rgba(68,68,68,0.6)',
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleStyle: {
          color: 'rgba(68,68,68,0.9)'
        }
      }
    ],
    color: ['#4a4c71', '#dc3f39', '#e7a61a'],
    xAxis: {
      type: 'category',
      data: [],
      // data: ['市一中', '市二中', '市三中', '市四中', '市五中', '市六中'],
      axisLine: {
        // show: false,
        lineStyle: {
          color: '#4a5266'
        }
      },
      axisTick: {show: false},
      axisLabel: {
        rotate: 45,
        interval: 0,
        textStyle: {
          color: '#444',
          fontSize: '12px'
        }
      },
      triggerEvent: true
    },
    yAxis: [
      {
        // position: 'right',
        show: true,
        min: 0,
        splitLine: {
          show: false,
          lineStyle: {
            color: '#4a5266'
          }
        },
        nameTextStyle: {color: '#444'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {show: false},
        name: '次数'
      },
      {
        // position: 'left',
        min: 0,
        show: true,
        splitLine: {
          show: false
        },
        nameTextStyle: {color: '#d93831'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {
          show: false
        },
        name: '人次'
      }
    ],
    barGap: '1%',
    series: [
      {
        type: 'bar',
        smooth: true,
        symbolSize: 6,
        symbol: 'circle',
        barMaxWidth: 20,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            barBorderRadius: 3
          }
        },
        data: [],
        // data: [373, 372, 500, 539, 428, 200],
        name: '总运动次数'
      },
      {
        type: 'line',
        smooth: true,
        barMaxWidth: 5,
        lineStyle: {
          normal: {width: 2}
        },
        symbolSize: 6,
        symbol: 'circle',
        yAxisIndex: 1,
        data: [],
        // data: [1633, 1882, 1833, 1591, 1645, 800],
        name: '运动人次'
      },
      {
        type: 'line',
        smooth: true,
        symbolSize: 6,
        lineStyle: {
          normal: {width: 2}
        },
        symbol: 'circle',
        data: [],
        // data: [30, 21, 10, 13, 23, 8],
        name: '人均运动场次'
      }
    ]
  },
  DURATION_TREND: {
    legend: {
      // show: false,
      data: ['总运动时长', '人均运动时长', '人均单场运动时长'],
      textStyle: {
        color: '#444',
        fontSize: 12
      },
      tooltip: {
        show: true,
        confine: true,
        formatter: function (name) {
          return ''
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 25,
      right: 25,
      top: 40,
      bottom: 47,
      containLabel: true
    },
    color: ['#4a4c71', '#dc3f39', '#e7a61a'],
    xAxis: {
      type: 'category',
      data: [],
      // data: ['11月', '12月', '2018年1月', '2月', '3月', '4月'],
      axisLine: {
        // show: false,
        lineStyle: {
          color: '#4a5266'
        }
      },
      axisTick: {show: false},
      axisLabel: {
        rotate: 45,
        interval: 0,
        textStyle: {
          color: '#444',
          fontSize: '12px'
        }
      },
      triggerEvent: true
    },
    yAxis: [
      {
        // position: 'right',
        show: true,
        min: 0,
        splitLine: {
          show: false,
          lineStyle: {
            color: '#4a5266'
          }
        },
        nameTextStyle: {color: '#444'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {show: false},
        name: '小时'
      },
      {
        // position: 'left',
        min: 0,
        show: true,
        splitLine: {
          show: false
        },
        nameTextStyle: {color: '#e7a61a'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {
          show: false
        },
        name: '分钟'
      }
    ],
    barGap: '1%',
    series: [
      {
        type: 'bar',
        smooth: true,
        symbolSize: 6,
        symbol: 'circle',
        barMaxWidth: 20,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            barBorderRadius: 3
          }
        },
        data: [],
        // data: [373, 372, 500, 539, 428, 200],
        name: '总运动时长'
      },
      {
        type: 'line',
        smooth: true,
        barMaxWidth: 5,
        lineStyle: {
          normal: {width: 2}
        },
        symbolSize: 6,
        symbol: 'circle',
        data: [],
        // data: [1633, 1882, 1833, 1591, 1645, 800],
        name: '人均运动时长'
      },
      {
        type: 'line',
        smooth: true,
        symbolSize: 6,
        lineStyle: {
          normal: {width: 2}
        },
        symbol: 'circle',
        yAxisIndex: 1,
        data: [],
        // data: [30, 21, 10, 13, 23, 8],
        name: '人均单场运动时长'
      }
    ]
  },
  TIMES_TREND: {
    legend: {
      // show: false,
      data: ['总运动次数', '运动人次', '人均运动场次'],
      textStyle: {
        color: '#444',
        fontSize: 12
      },
      tooltip: {
        show: true,
        confine: true,
        formatter: function (name) {
          return ''
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 25,
      right: 25,
      top: 40,
      bottom: 47,
      containLabel: true
    },
    color: ['#4a4c71', '#dc3f39', '#e7a61a'],
    xAxis: {
      type: 'category',
      data: ['11月', '12月', '2018年1月', '2月', '3月', '4月'],
      axisLine: {
        // show: false,
        lineStyle: {
          color: '#4a5266'
        }
      },
      axisTick: {show: false},
      axisLabel: {
        rotate: 45,
        interval: 0,
        textStyle: {
          color: '#444',
          fontSize: '12px'
        }
      },
      triggerEvent: true
    },
    yAxis: [
      {
        // position: 'right',
        show: true,
        min: 0,
        splitLine: {
          show: false,
          lineStyle: {
            color: '#4a5266'
          }
        },
        nameTextStyle: {color: '#444'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {show: false},
        name: '次数'
      },
      {
        // position: 'left',
        min: 0,
        show: true,
        splitLine: {
          show: false
        },
        nameTextStyle: {color: '#d93831'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {
          show: false
        },
        name: '人次'
      }
    ],
    barGap: '1%',
    series: [
      {
        type: 'bar',
        smooth: true,
        symbolSize: 6,
        symbol: 'circle',
        barMaxWidth: 20,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            barBorderRadius: 3
          }
        },
        data: [373, 372, 500, 539, 428, 200],
        name: '总运动次数'
      },
      {
        type: 'line',
        smooth: true,
        barMaxWidth: 5,
        lineStyle: {
          normal: {width: 2}
        },
        symbolSize: 6,
        symbol: 'circle',
        yAxisIndex: 1,
        data: [1633, 1882, 1833, 1591, 1645, 800],
        name: '运动人次'
      },
      {
        type: 'line',
        smooth: true,
        symbolSize: 6,
        lineStyle: {
          normal: {width: 2}
        },
        symbol: 'circle',
        data: [30, 21, 10, 13, 23, 8],
        name: '人均运动场次'
      }
    ]
  },
  FINISH_PIE: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      data: ['达标', '未达标'],
      itemWidth: 15
    },
    color: ['#4080bf', '#f2c933'],
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '65%',
        center: ['28%', '50%'],
        data: [
          {value: 335, name: '达标'},
          {value: 310, name: '未达标'}
        ],
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  },
  INTENSITY_RANK: {
    legend: {
      // show: false,
      data: ['场均平均心率'],
      textStyle: {
        color: '#444',
        fontSize: 12
      },
      tooltip: {
        show: true,
        confine: true,
        formatter: function (name) {
          return ''
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 25,
      right: 25,
      top: 40,
      bottom: 47,
      containLabel: true
    },
    dataZoom: [
      {
        type: 'slider',
        show: false,
        height: 20,
        bottom: 5,
        startValue: 0,
        endValue: 24,
        // backgroundColor: 'rgba(106,169,232,0.2)',
        backgroundColor: 'rgba(68,68,68,0.2)',
        dataBackground: {
          lineStyle: {
            color: 'rgba(68,68,68,0)'
          },
          areaStyle: {
            color: 'rgba(68,68,68,0)'
          }
        },
        fillerColor: 'rgba(68,68,68,0.6)',
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleStyle: {
          color: 'rgba(68,68,68,0.9)'
        }
      }
    ],
    color: ['#4a4c71', '#dc3f39', '#e7a61a'],
    xAxis: {
      type: 'category',
      data: [],
      // data: ['市一中', '市二中', '市三中', '市四中', '市五中', '市六中'],
      axisLine: {
        // show: false,
        lineStyle: {
          color: '#4a5266'
        }
      },
      axisTick: {show: false},
      axisLabel: {
        rotate: 45,
        interval: 0,
        textStyle: {
          color: '#444',
          fontSize: '12px'
        }
      },
      triggerEvent: true
    },
    yAxis: [
      {
        // position: 'right',
        show: true,
        min: 0,
        max: 250,
        splitLine: {
          show: false,
          lineStyle: {
            color: '#4a5266'
          }
        },
        nameTextStyle: {color: '#444'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {show: false},
        name: 'bpm'
      }
      // {
      //   // position: 'left',
      //   min: 0,
      //   max: 100,
      //   show: true,
      //   splitLine: {
      //     show: false
      //   },
      //   nameTextStyle: {color: '#d93831'},
      //   axisLabel: {
      //     textStyle: {color: '#444'}
      //   },
      //   // axisLine: {show: false},
      //   axisTick: {
      //     show: false
      //   },
      //   name: '达标率'
      // }
    ],
    barGap: '1%',
    series: [
      {
        type: 'bar',
        smooth: true,
        symbolSize: 6,
        symbol: 'circle',
        barMaxWidth: 20,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            barBorderRadius: 3
          }
        },
        data: [],
        // data: [80, 60, 90, 75, 85, 65],
        name: '场均平均心率'
      }
      // {
      //   type: 'line',
      //   smooth: true,
      //   barMaxWidth: 5,
      //   lineStyle: {
      //     normal: {width: 2}
      //   },
      //   symbolSize: 6,
      //   symbol: 'circle',
      //   yAxisIndex: 1,
      //   data: [90, 85, 89, 95, 70, 75],
      //   name: '人均达标率'
      // }
    ]
  },
  INTENSITY_TREND: {
    legend: {
      // show: false,
      data: ['场均平均心率'],
      textStyle: {
        color: '#444',
        fontSize: 12
      },
      tooltip: {
        show: true,
        confine: true,
        formatter: function (name) {
          return ''
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 25,
      right: 25,
      top: 40,
      bottom: 47,
      containLabel: true
    },
    color: ['#4a4c71', '#dc3f39', '#e7a61a'],
    xAxis: {
      type: 'category',
      data: [],
      // data: ['11月', '12月', '2018年1月', '2月', '3月', '4月'],
      axisLine: {
        // show: false,
        lineStyle: {
          color: '#4a5266'
        }
      },
      axisTick: {show: false},
      axisLabel: {
        rotate: 45,
        interval: 0,
        textStyle: {
          color: '#444',
          fontSize: '12px'
        }
      },
      triggerEvent: true
    },
    yAxis: [
      {
        // position: 'right',
        show: true,
        min: 0,
        max: 250,
        splitLine: {
          show: false,
          lineStyle: {
            color: '#4a5266'
          }
        },
        nameTextStyle: {color: '#444'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {show: false},
        name: 'bpm'
      }
      // {
      //   // position: 'left',
      //   min: 0,
      //   max: 100,
      //   show: true,
      //   splitLine: {
      //     show: false
      //   },
      //   nameTextStyle: {color: '#d93831'},
      //   axisLabel: {
      //     textStyle: {color: '#444'}
      //   },
      //   // axisLine: {show: false},
      //   axisTick: {
      //     show: false
      //   },
      //   name: '达标率'
      // }
    ],
    barGap: '1%',
    series: [
      {
        type: 'bar',
        smooth: true,
        symbolSize: 6,
        symbol: 'circle',
        barMaxWidth: 20,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            barBorderRadius: 3
          }
        },
        data: [],
        // data: [80, 60, 90, 75, 85, 65],
        name: '场均平均心率'
      }
      // {
      //   type: 'line',
      //   smooth: true,
      //   barMaxWidth: 5,
      //   lineStyle: {
      //     normal: {width: 2}
      //   },
      //   symbolSize: 6,
      //   symbol: 'circle',
      //   yAxisIndex: 1,
      //   data: [90, 85, 89, 95, 70, 75],
      //   name: '人均达标率'
      // }
    ]
  },
  DENSITY_RANK: {
    legend: {
      // show: false,
      data: ['人均有效运动密度'],
      textStyle: {
        color: '#444',
        fontSize: 12
      },
      tooltip: {
        show: true,
        confine: true,
        formatter: function (name) {
          return ''
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 25,
      right: 25,
      top: 40,
      bottom: 47,
      containLabel: true
    },
    dataZoom: [
      {
        type: 'slider',
        show: false,
        height: 20,
        bottom: 5,
        startValue: 0,
        endValue: 24,
        // backgroundColor: 'rgba(106,169,232,0.2)',
        backgroundColor: 'rgba(68,68,68,0.2)',
        dataBackground: {
          lineStyle: {
            color: 'rgba(68,68,68,0)'
          },
          areaStyle: {
            color: 'rgba(68,68,68,0)'
          }
        },
        fillerColor: 'rgba(68,68,68,0.6)',
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleStyle: {
          color: 'rgba(68,68,68,0.9)'
        }
      }
    ],
    color: ['#4a4c71', '#dc3f39', '#e7a61a'],
    xAxis: {
      type: 'category',
      data: [],
      // data: ['市一中', '市二中', '市三中', '市四中', '市五中', '市六中'],
      axisLine: {
        // show: false,
        lineStyle: {
          color: '#4a5266'
        }
      },
      axisTick: {show: false},
      axisLabel: {
        rotate: 45,
        interval: 0,
        textStyle: {
          color: '#444',
          fontSize: '12px'
        }
      },
      triggerEvent: true
    },
    yAxis: [
      {
        // position: 'right',
        show: true,
        min: 0,
        max: 100,
        splitLine: {
          show: false,
          lineStyle: {
            color: '#4a5266'
          }
        },
        nameTextStyle: {color: '#444'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {show: false},
        name: '%'
      }
    ],
    barGap: '1%',
    series: [
      {
        type: 'bar',
        smooth: true,
        symbolSize: 6,
        symbol: 'circle',
        barMaxWidth: 20,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            barBorderRadius: 3
          }
        },
        data: [],
        // data: [80, 60, 90, 75, 85, 65],
        name: '人均有效运动密度'
      }
      // {
      //   type: 'line',
      //   smooth: true,
      //   barMaxWidth: 5,
      //   lineStyle: {
      //     normal: {width: 2}
      //   },
      //   symbolSize: 6,
      //   symbol: 'circle',
      //   data: [90, 85, 89, 95, 70, 75],
      //   name: '人均运动密度'
      // }
    ]
  },
  DENSITY_TREND: {
    legend: {
      // show: false,
      data: ['人均有效运动密度'],
      textStyle: {
        color: '#444',
        fontSize: 12
      },
      tooltip: {
        show: true,
        confine: true,
        formatter: function (name) {
          return ''
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 25,
      right: 25,
      top: 40,
      bottom: 47,
      containLabel: true
    },
    color: ['#4a4c71', '#dc3f39', '#e7a61a'],
    xAxis: {
      type: 'category',
      data: [],
      // data: ['11月', '12月', '2018年1月', '2月', '3月', '4月'],
      axisLine: {
        // show: false,
        lineStyle: {
          color: '#4a5266'
        }
      },
      axisTick: {show: false},
      axisLabel: {
        rotate: 45,
        interval: 0,
        textStyle: {
          color: '#444',
          fontSize: '12px'
        }
      },
      triggerEvent: true
    },
    yAxis: [
      {
        // position: 'right',
        show: true,
        min: 0,
        max: 100,
        splitLine: {
          show: false,
          lineStyle: {
            color: '#4a5266'
          }
        },
        nameTextStyle: {color: '#444'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {show: false},
        name: '%'
      }
    ],
    barGap: '1%',
    series: [
      {
        type: 'bar',
        smooth: true,
        symbolSize: 6,
        symbol: 'circle',
        barMaxWidth: 20,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            barBorderRadius: 3
          }
        },
        data: [],
        // data: [80, 60, 90, 75, 85, 65],
        name: '人均有效运动密度'
      }
      // {
      //   type: 'line',
      //   smooth: true,
      //   barMaxWidth: 5,
      //   lineStyle: {
      //     normal: {width: 2}
      //   },
      //   symbolSize: 6,
      //   symbol: 'circle',
      //   data: [90, 85, 89, 95, 70, 75],
      //   name: '人均运动负荷'
      // }
    ]
  },
  LOAD_RANK: {
    legend: {
      // show: false,
      data: ['人均运动负荷'],
      textStyle: {
        color: '#444',
        fontSize: 12
      },
      tooltip: {
        show: true,
        confine: true,
        formatter: function (name) {
          return ''
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 25,
      right: 25,
      top: 40,
      bottom: 47,
      containLabel: true
    },
    dataZoom: [
      {
        type: 'slider',
        show: false,
        height: 20,
        bottom: 5,
        startValue: 0,
        endValue: 24,
        // backgroundColor: 'rgba(106,169,232,0.2)',
        backgroundColor: 'rgba(68,68,68,0.2)',
        dataBackground: {
          lineStyle: {
            color: 'rgba(68,68,68,0)'
          },
          areaStyle: {
            color: 'rgba(68,68,68,0)'
          }
        },
        fillerColor: 'rgba(68,68,68,0.6)',
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleStyle: {
          color: 'rgba(68,68,68,0.9)'
        }
      }
    ],
    color: ['#4a4c71', '#dc3f39', '#e7a61a'],
    xAxis: {
      type: 'category',
      data: [],
      // data: ['市一中', '市二中', '市三中', '市四中', '市五中', '市六中'],
      axisLine: {
        // show: false,
        lineStyle: {
          color: '#4a5266'
        }
      },
      axisTick: {show: false},
      axisLabel: {
        rotate: 45,
        interval: 0,
        textStyle: {
          color: '#444',
          fontSize: '12px'
        }
      },
      triggerEvent: true
    },
    yAxis: [
      {
        // position: 'right',
        show: true,
        min: 0,
        splitLine: {
          show: false,
          lineStyle: {
            color: '#4a5266'
          }
        },
        nameTextStyle: {color: '#444'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {show: false},
        name: '负荷'
      }
    ],
    barGap: '1%',
    series: [
      {
        type: 'bar',
        smooth: true,
        symbolSize: 6,
        symbol: 'circle',
        barMaxWidth: 20,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            barBorderRadius: 3
          }
        },
        data: [],
        // data: [80, 60, 90, 75, 85, 65],
        name: '人均运动负荷'
      }
      // {
      //   type: 'line',
      //   smooth: true,
      //   barMaxWidth: 5,
      //   lineStyle: {
      //     normal: {width: 2}
      //   },
      //   symbolSize: 6,
      //   symbol: 'circle',
      //   data: [90, 85, 89, 95, 70, 75],
      //   name: '人均运动负荷'
      // }
    ]
  },
  LOAD_TREND: {
    legend: {
      // show: false,
      data: ['人均运动负荷'],
      textStyle: {
        color: '#444',
        fontSize: 12
      },
      tooltip: {
        show: true,
        confine: true,
        formatter: function (name) {
          return ''
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      confine: true,
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 25,
      right: 25,
      top: 40,
      bottom: 47,
      containLabel: true
    },
    color: ['#4a4c71', '#dc3f39', '#e7a61a'],
    xAxis: {
      type: 'category',
      data: [],
      // data: ['11月', '12月', '2018年1月', '2月', '3月', '4月'],
      axisLine: {
        // show: false,
        lineStyle: {
          color: '#4a5266'
        }
      },
      axisTick: {show: false},
      axisLabel: {
        rotate: 45,
        interval: 0,
        textStyle: {
          color: '#444',
          fontSize: '12px'
        }
      },
      triggerEvent: true
    },
    yAxis: [
      {
        // position: 'right',
        show: true,
        min: 0,
        // max: 100,
        splitLine: {
          show: false,
          lineStyle: {
            color: '#4a5266'
          }
        },
        nameTextStyle: {color: '#444'},
        axisLabel: {
          textStyle: {color: '#444'}
        },
        // axisLine: {show: false},
        axisTick: {show: false},
        name: '负荷'
      }
    ],
    barGap: '1%',
    series: [
      {
        type: 'bar',
        smooth: true,
        symbolSize: 6,
        symbol: 'circle',
        barMaxWidth: 20,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            barBorderRadius: 3
          }
        },
        data: [],
        // data: [80, 60, 90, 75, 85, 65],
        name: '人均运动负荷'
      }
      // {
      //   type: 'line',
      //   smooth: true,
      //   barMaxWidth: 5,
      //   lineStyle: {
      //     normal: {width: 2}
      //   },
      //   symbolSize: 6,
      //   symbol: 'circle',
      //   data: [90, 85, 89, 95, 70, 75],
      //   name: '人均运动负荷'
      // }
    ]
  },
  SEX_FENBU: {
    tooltip: {
      show: false
    },
    color: ['#36b8e5', '#ee5e67'],
    legend: {
      show: false,
      orient: 'vertical',
      right: 5,
      top: '15%',
      // show: true,
      itemWidth: 15,
      data: ['性别分布'],
      textStyle: {
        color: '#bfb8c5'
      }
    },
    grid: {},
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '45%'],
        // roseType: 'radius',
        clockWise: false,
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {name: '男', value: '1290'},
          {name: '女', value: '800'}
        ],
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        }
      }
    ]
  },
  SEX_FENBU0: {
    color: ['#36b8e5', '#ee5e67'],
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '45%'],
        // roseType: 'radius',
        clockWise: false,
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: '60',
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  colorStops: [
                    {offset: 0, color: '#2b5689'},
                    {offset: 0.5, color: '#3e85e9'},
                    {offset: 1, color: '#2b5689'}
                  ]
                }
              }
            }
          },
          {
            value: '50',
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  colorStops: [
                    {offset: 0, color: '#dd525c'},
                    {offset: 0.5, color: '#d0454f'},
                    {offset: 1, color: '#dd525c'}
                  ]
                }
              }
            }
          }
        ],
        itemStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: ''
              }]
            }
          }
        }
      }
    ]
  },
  SEX_FENBU1: {
    color: ['#36b8e5', '#ee5e67'],
    series: [
      {
        name: 'aa',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '45%'],
        // roseType: 'radius',
        clockWise: false,
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            name: '60%',
            value: '60',
            label: {
              normal: {
                show: true,
                position: 'inside',
                color: '#d0c62e'
              }
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  colorStops: [
                    {offset: 0, color: '#2b5689'},
                    {offset: 0.5, color: '#3e85e9'},
                    {offset: 1, color: '#2b5689'}
                  ]
                }
              }
            }
          },
          {
            name: '40%',
            value: '40',
            label: {
              normal: {
                show: true,
                position: 'inside',
                color: '#d0c62e'
              }
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  colorStops: [
                    {offset: 0, color: '#dd525c'},
                    {offset: 0.5, color: '#d0454f'},
                    {offset: 1, color: '#dd525c'}
                  ]
                }
              }
            }
          }
        ]
      }
    ]
  },
  AGE_FENBU: {
    color: ['#490a0a', '#600d0d', '#751717', '#871f1f', '#a32424', '#c14242', '#d35959', '#dd7676', '#ea9292', '#f9a7a7'],
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '70%',
        center: ['50%', '50%'],
        data: [
          {value: 335, name: '0-12'},
          {value: 310, name: '12-15'},
          {value: 274, name: '15-18'},
          {value: 235, name: '18-22'},
          {value: 400, name: '>22'}
        ],
        // roseType: 'radius',
        label: {
          normal: {
            position: 'outside',
            textStyle: {
              color: '#38A7EE'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: '#0098CF'
            },
            show: true,
            length: 5,
            length2: 5
          }
        }
      }
    ]
  },
  PERSON_FENBU: {
    color: ['#d26563', '#38a7ee'],
    grid: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLabel: {
          rotate: 270,
          textStyle: {
            color: '#38a7ee',
            fontSize: 8
          }
        },
        splitLine: {
          lineStyle: {
            color: ['#e0e0e0']
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '人数　 　 ',
        nameGap: 5,
        nameLocation: 'start',
        nameTextStyle: {
          color: '#38a7ee',
          fontSize: 8
        },
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#38a7ee',
            fontSize: 8
          }
        },
        splitLine: {
          lineStyle: {
            color: '#142354'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      {
        name: '　 　 球队数',
        nameLocation: 'start',
        nameGap: 5,
        nameTextStyle: {
          color: '#d26563',
          fontSize: 8
        },
        axisLabel: {
          textStyle: {
            color: '#d26563',
            fontSize: 8
          }
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        type: 'line',
        showSymbol: false,
        cursor: '',
        data: [103, 111, 120, 98, 45, 15, 49, 72, 95, 70, 55, 62]
      }, {
        type: 'bar',
        name: '中高强度运动时间',
        barWidth: 5,
        yAxisIndex: 1,
        data: [47, 48, 60, 50, 103, 111, 120, 98, 45, 15, 49, 50]
      }
    ]
  },
  GUANG_DONG: {
    series: [
      {
        type: 'map',
        name: '广东',
        map: '广东',
        itemStyle: {
          normal: {
            borderColor: '#080f41',
            areaColor: '#3587d6'
          },
          emphasis: {
            label: {show: false},
            areaColor: '#70b8fd'
          }
        },
        label: {
          // normal: {show: true, formatter: '{b}{c}', fontSize: 8}
          normal: {show: false}
        },
        left: '0%',
        right: '0%',
        data: [
          {name: '韶关市', value: 500},
          {name: '梅州市', value: 500},
          {name: '清远市', value: 500},
          {name: '河源市', value: 500},
          {name: '潮州市', value: 500},
          {name: '揭阳市', value: 500},
          {name: '肇庆市', value: 500},
          {name: '广州市', value: 500, selected: true},
          {name: '惠州市', value: 500},
          {name: '佛山市', value: 500},
          {name: '云浮市', value: 500},
          {name: '东莞市', value: 500},
          {name: '汕尾市', value: 500},
          {name: '汕头市', value: 500},
          {name: '中山市', value: 500},
          {name: '深圳市', value: 500},
          {name: '江门市', value: 500},
          {name: '阳江市', value: 500},
          {name: '珠海市', value: 500},
          {name: '茂名市', value: 500},
          {name: '湛江市', value: 500}
        ]
      }
    ]
  },
  ZHENG_ZHOU: {
    series: [
      {
        type: 'map',
        name: '郑州',
        map: '郑州',
        itemStyle: {
          normal: {
            borderColor: '#080f41',
            areaColor: '#3587d6'
          },
          emphasis: {
            label: {show: false},
            areaColor: '#70b8fd'
          }
        },
        label: {
          // normal: {show: true, formatter: '{b}{c}', fontSize: 8}
          normal: {show: false}
        },
        left: '0%',
        right: '0%',
        data: [
          {name: '二七区', value: 500},
          {name: '中原区', value: 500},
          {name: '上街区', value: 500},
          {name: '管城回族区', value: 500},
          {name: '惠济区', value: 500},
          {name: '金水区', value: 500},
          {name: '中牟县', value: 500},
          {name: '荥阳市', value: 500, selected: true},
          {name: '新密市', value: 500},
          {name: '巩义市', value: 500},
          {name: '新郑市', value: 500},
          {name: '登封市', value: 500}
        ]
      }
    ]
  },
  CITY_AVG: {
    color: ['#d26563', '#38a7ee'],
    legend: {
      orient: 'vertical',
      right: '1%',
      bottom: '13%',
      itemWidth: 18,
      itemHeight: 10,
      data: [
        {
          name: '负荷',
          icon: 'rect',
          textStyle: {
            fontSize: 13,
            color: '#38a7ee'
          }
        },
        {
          name: '强度',
          icon: 'rect',
          textStyle: {
            fontSize: 13,
            color: '#d26563'
          }
        }
      ]
    },
    grid: {
      left: '3%',
      right: '10%',
      top: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['韶关市', '梅州市', '清远市', '河源市', '潮州市', '肇庆市', '揭阳市', '汕头市', '广州市', '惠州市', '佛山市', '云浮市', '东莞市', '汕尾市', '中山市', '深圳市', '江门市', '阳江市', '珠海市', '茂名市', '湛江市'],
        axisLabel: {
          rotate: 45,
          textStyle: {
            color: '#38a7ee',
            fontSize: 8
          }
        },
        splitLine: {
          lineStyle: {
            color: ['#e0e0e0']
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#38a7ee'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#38a7ee',
            fontSize: 8
          }
        },
        splitLine: {
          lineStyle: {
            width: 2,
            color: '#373c53'
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#38a7ee'
          }
        },
        axisTick: {
          show: false
        }
      },
      {
        axisLabel: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#38a7ee'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '强度',
        type: 'line',
        showSymbol: false,
        cursor: '',
        data: [103, 111, 120, 98, 45, 15, 49, 72, 95, 70, 55, 62, 103, 111, 120, 98, 45, 15, 49, 72, 95]
      }, {
        name: '负荷',
        type: 'bar',
        barWidth: 6,
        yAxisIndex: 1,
        data: [47, 48, 60, 50, 103, 111, 120, 98, 45, 15, 49, 50, 60, 50, 103, 111, 120, 98, 45, 15, 49]
      }
    ]
  },
  LAST_DATA_FENBU: {
    color: ['#d0c62e', '#d0454f'],
    series: [
      {
        type: 'pie',
        radius: ['60%', '80%'],
        center: ['50%', '45%'],
        // roseType: 'radius',
        clockWise: false,
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: '60',
            label: {
              normal: {
                show: false
              }
            }
          },
          {
            value: '40',
            label: {
              normal: {
                show: false
              }
            }
          }
        ]
      }
    ]
  },
  MATCH_ANGLE: {
    color: ['#ee5e67', '#ee5e67', '#ee5e67', '#ee5e67', '#ee5e67', '#ee5e67'],
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: '10%',
      y: 'center',
      itemWidth: 18,
      itemHeight: 18,
      itemGap: 15,
      textStyle: {
        fontSize: 16
      },
      selected: {
        '03男子U15': false,
        '01男子U17': false,
        '99女足U20': true,
        '03女足U15': false,
        '00女足U18': false,
        '女足黄队': false
      },
      // 393f5c 灰色   ee5e67 红  38a7ee 蓝色
      data: [
        {name: '03男子U15', textStyle: {fontSize: 14, color: '#393f5c'}},
        {name: '01男子U17', textStyle: {fontSize: 14, color: '#393f5c'}},
        {name: '99女足U20', textStyle: {fontSize: 14, color: '#ee5e67'}},
        {name: '03女足U15', textStyle: {fontSize: 14, color: '#393f5c'}},
        {name: '00女足U18', textStyle: {fontSize: 14, color: '#393f5c'}},
        {name: '女足黄队', textStyle: {fontSize: 14, color: '#393f5c'}}
      ],
      inactiveColor: '#393f5c'
    },
    radar: [
      {
        indicator: [
          // 这里设置最大值    {text: '最高1分钟跑动距离', max: 5500}
          {text: '平均5分钟\n跑动距离', max: 666.67},
          {text: '心率强度', max: 120},
          {text: '最高代谢功率', max: 53.33},
          {text: '最高速度', max: 13.33},
          {text: '最高1分钟\n 跑动距离', max: 266.67}
        ],
        center: ['35%', '55%'],
        splitNumber: 8,
        // 不显示
        axisLine: {
          lineStyle: {
            color: '#38a7ee',
            width: 0
          }
        },
        splitArea: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#38a7ee',
            width: 1
          }
        },
        nameGap: 5,
        name: {
          textStyle: {
            fontSize: 14,
            color: '#38a7ee'
          }
        }
      }
    ],
    series: [
      {
        name: '成绩单',
        type: 'radar',
        symbol: 'none',
        data: [
          // 这一条为标杆数据
          {
            value: [88441, 836, 4616, 2572, 3764],
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#d0c62e'
              }
            },
            lineStyle: {
              normal: {
                color: '#d0c62e'
              }
            }
          },
          {
            value: [88441, 836, 4616, 2572, 3764],
            name: '03男子U15',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [107517, 956, 5109, 0, 4436],
            name: '01男子U17',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [93367, 368, 3002, 3136, 2890],
            name: '99女足U20',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [84801, 222, 2281, 2660, 3800],
            name: '03女足U15',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [91250, 365, 3299, 2769, 3627],
            name: '00女足U18',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [92312, 419, 3521, 2930, 3688],
            name: '女足黄队',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          }
        ]
      }
    ]
  },
  IMPORT_ANGLE: {
    color: ['#ee5e67', '#ee5e67', '#ee5e67', '#ee5e67', '#ee5e67', '#ee5e67'],
    legend: {
      orient: 'vertical',
      right: 5,
      y: 'center',
      itemWidth: 18,
      itemHeight: 18,
      itemGap: 15,
      textStyle: {
        fontSize: 16
      },
      selected: {
        '03男子U15': false,
        '01男子U17': false,
        '99女足U20': true,
        '03女足U15': false,
        '00女足U18': false,
        '女足黄队': false
      },
      // 393f5c 灰色   ee5e67 红  38a7ee 蓝色
      data: [
        {name: '03男子U15', textStyle: {fontSize: 14, color: '#393f5c'}},
        {name: '01男子U17', textStyle: {fontSize: 14, color: '#393f5c'}},
        {name: '99女足U20', textStyle: {fontSize: 14, color: '#ee5e67'}},
        {name: '03女足U15', textStyle: {fontSize: 14, color: '#393f5c'}},
        {name: '00女足U18', textStyle: {fontSize: 14, color: '#393f5c'}},
        {name: '女足黄队', textStyle: {fontSize: 14, color: '#393f5c'}}
      ],
      inactiveColor: '#393f5c'
    },
    radar: [
      {
        indicator: [
          // 这里设置最大值    {text: '最高1分钟跑动距离', max: 5500}
          {text: '平均5分钟\n跑动距离'},
          {text: '场均心率负荷'},
          {text: '最高代谢功率'},
          {text: '最高速度'},
          {text: '最高1分钟\n 跑动距离'}
        ],
        center: ['35%', '50%'],
        splitNumber: 8,
        // 不显示
        axisLine: {
          lineStyle: {
            color: '#38a7ee',
            width: 0
          }
        },
        splitArea: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#38a7ee',
            width: 1
          }
        },
        nameGap: 5,
        name: {
          textStyle: {
            fontSize: 14,
            color: '#38a7ee'
          }
        }
      }
    ],
    series: [
      {
        name: '成绩单',
        type: 'radar',
        symbol: 'none',
        data: [
          // 这一条为标杆数据
          {
            value: [88441, 836, 4616, 2572, 3764],
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#d0c62e'
              }
            },
            lineStyle: {
              normal: {
                color: '#d0c62e'
              }
            }
          },
          {
            value: [88441, 836, 4616, 2572, 3764],
            name: '03男子U15',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [107517, 956, 5109, 0, 4436],
            name: '01男子U17',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [93367, 368, 3002, 3136, 2890],
            name: '99女足U20',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [84801, 222, 2281, 2660, 3800],
            name: '03女足U15',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [91250, 365, 3299, 2769, 3627],
            name: '00女足U18',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [92312, 419, 3521, 2930, 3688],
            name: '女足黄队',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#ee5e67'
              }
            }
          }
        ]
      }
    ]
  },
  IMPORT_LINER: {
    color: ['#d26563'],
    grid: {
      left: '5%',
      right: '5%',
      top: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['10-15', '10-16', '10-20'],
        axisLabel: {
          rotate: 45,
          textStyle: {
            color: '#373c53',
            fontSize: 8
          }
        },
        splitLine: {
          lineStyle: {
            color: ['#e0e0e0']
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: true,
          length: 2
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          show: true,
          color: '#373c53',
          fontSize: 8
        },
        splitLine: {
          lineStyle: {
            width: 1,
            color: '#373c53'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        type: 'line',
        showSymbol: false,
        cursor: '',
        data: [103, 111, 120]
      }
    ]
  },
  MATCH_TEAM_RANK: {
    color: ['#d26563', '#d26563', '#d26563', '#d26563'],
    legend: {
      orient: 'vertical',
      right: '0.1%',
      bottom: '10%',
      itemWidth: 18,
      inactiveColor: '#373c53',
      itemHeight: 10,
      data: [
        {
          name: '总跑动距离',
          icon: 'rect',
          textStyle: {
            fontSize: 13,
            color: '#d26563'
          }
        },
        {
          name: '总高强度跑',
          icon: 'rect',
          textStyle: {
            fontSize: 13,
            color: '#d26563'
          }
        },
        {
          name: '总冲刺跑',
          icon: 'rect',
          textStyle: {
            fontSize: 13,
            color: '#d26563'
          }
        },
        {
          name: '心率负荷',
          icon: 'rect',
          textStyle: {
            fontSize: 13,
            color: '#d26563'
          }
        }
      ]
    },
    grid: {
      left: '3%',
      right: '10%',
      top: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['10-15', '10-16', '10-20'],
        axisLabel: {
          textStyle: {
            color: '#38a7ee',
            fontSize: 8
          }
        },
        splitLine: {
          lineStyle: {
            color: ['#e0e0e0']
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: true,
          length: 2
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          show: true,
          color: '#373c53',
          fontSize: 8
        },
        splitLine: {
          lineStyle: {
            width: 1,
            color: '#373c53'
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '总跑动距离',
        type: 'line',
        showSymbol: false,
        cursor: '',
        data: []
      },
      {
        name: '总高强度跑',
        type: 'line',
        showSymbol: false,
        cursor: '',
        data: []
      },
      {
        name: '总冲刺跑',
        type: 'line',
        showSymbol: false,
        cursor: '',
        data: []
      },
      {
        name: '心率负荷',
        type: 'line',
        showSymbol: false,
        cursor: '',
        data: []
      }
    ]
  },
  RADAR_ECHARTS: {
    tooltip: {
      trigger: 'item'
      // formatter: "{b}: {c}度 ({d}%)"
    },
    splitArea: {
      areaStyle: {
        opacity: 0
      }
    },
    color: ['#ee5e67', '#d0c62e', '#9171eb', '#62c87f', '#fc863f', '#f26cb6'],
    legend: {
      orient: 'vertical',
      right: 20,
      y: 'center',
      itemWidth: 18,
      itemHeight: 18,
      itemGap: 20,
      textStyle: {
        fontSize: 16,
        padding: [0, 0, 0, 10]
      },
      selected: {
        '03男子U15': true,
        '01男子U17': true,
        '99女足U20': true,
        '03女足U15': true,
        '00女足U18': false,
        '女足黄队': false
      },
      data: [
        {name: '03男子U15', textStyle: {fontSize: 16, color: '#ee5e67'}},
        {name: '01男子U17', textStyle: {fontSize: 16, color: '#d0c62e'}},
        {name: '99女足U20', textStyle: {fontSize: 16, color: '#9171eb'}},
        {name: '03女足U15', textStyle: {fontSize: 16, color: '#62c87f'}},
        {name: '00女足U18', textStyle: {fontSize: 16, color: '#fc863f'}},
        {name: '女足黄队', textStyle: {fontSize: 16, color: '#f26cb6'}}
      ],
      inactiveColor: '#393e5d'
      // data: ['03U15男子', '01U17男子', '99女足U20', '03女足U13', '00女足U18', '女足黄队']
    },
    radar: [
      {
        indicator: [
          {text: '场均跑 \n动总距离\n(104665m)', max: 104665},
          {text: '场均冲 \n刺跑距离\n(2025m)', max: 2025},
          {text: '场均高强\n度跑距离\n(7528m)', max: 7528},
          {text: '场均心 \n率负荷\n(3500)', max: 3500},
          {text: '场均身 \n体负荷\n(5500)', max: 5500}
        ],
        center: ['40%', '50%'],
        axisLine: {
          lineStyle: {
            color: '#276199',
            width: 2
          }
        },
        splitLine: {
          lineStyle: {
            color: '#276199',
            width: 2
          }
        },
        name: {
          textStyle: {
            fontSize: 14,
            color: '#36b8e5'
          }
        }
      }
    ],
    series: [
      {
        name: '成绩单',
        type: 'radar',
        data: [
          {
            value: [88441, 836, 4616, 2572, 3764],
            name: '03男子U15',
            areaStyle: {
              normal: {
                opacity: 0.5,
                color: '#ee5e67'
              }
            }
          },
          {
            value: [107517, 956, 5109, 0, 4436],
            name: '01男子U17',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#d0c62e'
              }
            }
          },
          {
            value: [93367, 368, 3002, 3136, 2890],
            name: '99女足U20',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#9171eb'
              }
            }
          },
          {
            value: [84801, 222, 2281, 2660, 3800],
            name: '03女足U15',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#62c87f'
              }
            }
          },
          {
            value: [91250, 365, 3299, 2769, 3627],
            name: '00女足U18',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#fc863f'
              }
            }
          },
          {
            value: [92312, 419, 3521, 2930, 3688],
            name: '女足黄队',
            areaStyle: {
              normal: {
                opacity: 0.3,
                color: '#f26cb6'
              }
            }
          }
        ]
      }
    ]
  },
  // 教师管理
  TEACHER_FENBU: {
    tooltip: {},
    color: ['#5d9cec', '#62c87f', '#f15755', '#7053b6', '#fc863f'],
    legend: {
      // show: false,
      orient: 'vertical',
      right: 10,
      y: 'center',
      // show: true,
      itemWidth: 15,
      icon: 'circle',
      data: ['体育课 76次 18%', '足球课 56次 28%', '大课间 40次 34%', '中长跑 20次 20%', '安静心率 3次 6%'],
      textStyle: {
        color: '#444'
      }
    },
    grid: {},
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['35%', '60%'],
        center: ['25%', '50%'],
        // roseType: 'radius',
        clockWise: false,
        avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {name: '体育课 76次 18%', value: '76'},
          {name: '足球课 56次 28%', value: '56'},
          {name: '大课间 40次 34%', value: '40'},
          {name: '中长跑 20次 20%', value: '20'},
          {name: '安静心率 3次 6%', value: '3'}
        ],
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        }
      }
    ]
  },
  COACH_ADMSIN: {
    tooltip: {},
    color: ['#5d9cec', '#62c87f', '#f15755', '#7053b6', '#fc863f'],
    legend: {
      orient: 'vertical',
      top: 'middle',
      icon: 'circle',
      right: 50,
      y: 'center',
      data: ['男队教练‭ ‭ ‭ ‭ 76‭ ‭ ‭ ‭ 18%', '女队教练‭ ‭ ‭ ‭ 56‭ ‭ ‭ ‭ 28%']
    },
    series: [
      {
        name: '部门使用情况',
        type: 'pie',
        radius: '85%',
        center: ['20%', '50%'],
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        lableLine: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        data: [
          {name: '男队教练‭ ‭ ‭ ‭ 76‭ ‭ ‭ ‭ 18%', value: '76'},
          {name: '女队教练‭ ‭ ‭ ‭ 56‭ ‭ ‭ ‭ 28%', value: '56'}
        ]
        // itemStyle: {
        //     emphasis: {
        //         shadowBlur: 10,
        //         shadowOffsetX: 0,
        //         shadowColor: 'rgba(0, 0, 0, 0.5)'
        //     }
        // }
      }
    ]
  },
  TEACHER_TIME: {
    tooltip: {},
    color: ['#5d9cec', '#62c87f', '#f15755', '#7053b6', '#fc863f'],
    legend: {
      type: 'scroll',
      // show: false,
      orient: 'vertical',
      right: 10,
      y: 'center',
      icon: 'circle',
      data: ['一年级一班 18%', '一年级二班 19%', '一年级三班 12%', '一年级四班 30%', '一年级五班 21%'],
      textStyle: {
        color: '#444'
      }
    },
    grid: {},
    series: [
      {
        name: '上课次数',
        type: 'pie',
        radius: '60%',
        center: ['25%', '50%'],
        // roseType: 'radius',
        // clockWise: false,
        // avoidLabelOverlap: false,
        // labelLine: {
        //   normal: {
        //     show: false
        //   }
        // },
        data: [
          {name: '一年级一班 18%', value: '18'},
          {name: '一年级二班 19%', value: '19'},
          {name: '一年级三班 12%', value: '12'},
          {name: '一年级四班 30%', value: '30'},
          {name: '一年级五班 21%', value: '21'}
        ],
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        }
      }
    ]
  },
  DATA_COMPARISON: {
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'    // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['幼儿园', '小学','初中','高中']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    color: ['#6179b0', '#5f9def', '#45c2f8', '#84d8db'],
    yAxis: {
      type: 'value',
      axisTick: {show: false},
      name: '运动次数'
    },
    xAxis: {
      type: 'category',
      data: ['周一','周二','周三','周四','周五','周六','周日'],
      axisTick: {show: false},
      axisLabel: {
        show: true,
        interval: 0,
        formatter: function(params) {
          var newParamsName = "" // 最终拼接成的字符串
          var paramsNameNumber = params.length // 实际标签的个数
          var provideNumber = 7 // 每行能显示的字的个数
          var rowNumber = Math.ceil(paramsNameNumber / provideNumber) // 换行的话，需要显示几行，向上取整
          /**
           * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
           */
          // 条件等同于rowNumber>1
          if (paramsNameNumber > provideNumber) {
            /** 循环每一行,p表示行 */
            for (var p = 0; p < rowNumber; p++) {
              var tempStr = "" // 表示每一次截取的字符串
              var start = p * provideNumber // 开始截取的位置
              var end = start + provideNumber // 结束截取的位置
              // 此处特殊处理最后一行的索引值
              if (p == rowNumber - 1) {
                  // 最后一次不换行
                  tempStr = params.substring(start, paramsNameNumber)
              } else {
                  // 每一次拼接字符串并换行
                  tempStr = params.substring(start, end) + "\n"
              }
              newParamsName += tempStr; // 最终拼成的字符串
            }
          } else {
            // 将旧标签的值赋给新标签
            newParamsName = params
          }
          //将最终的字符串返回
          return newParamsName
        },
        textStyle: {
          lineHeight: 12,
          padding: [0, 2, 2, 2],
          height: 50,
          fontSize: 10,
          top: -6
        },
        rich: {
          Sunny: {
            height: 50,
            width: 60,
            padding: [0, 5, 0, 5],
            align: 'center',
          },
        },
        color: '#687284'
      }
    },
   dataZoom: [
    {
      start: 0,
      end: 62,
      type: 'slider',
      show: true,
      height: 20,
      bottom: 5,
      startValue: 0,
      endValue: 35,
      backgroundColor: 'rgba(68,68,68,0.2)',
      dataBackground: {
        lineStyle: {
          color: 'rgba(68,68,68,0)'
        },
        areaStyle: {
          color: 'rgba(68,68,68,0)'
        }
        },
        backgroundColor: 'rgba(106,169,232,0.2)',
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleStyle: {
          color: 'rgba(68,68,68,0.9)'
        }
      }
    ],
    series: [
      {
        name: '幼儿园',
        type: 'line',
        stack: '总量',
        smooth: true,
        barGap:'-100%',
        barCategoryGap: '50%',
        barMaxWidth: 20,
        itemStyle: {
          normal: {
            barBorderRadius: 0
          }
        },
        label: {
            normal: {
                // show: true,
                position: 'insideRight'
            }
        },
        data: [0, 302, 301, 334, 390, 330, 320, 320, 250]
      },
      {
        name: '小学',
        type: 'line',
        stack: '总量',
        smooth: true,
        barGap:'20%',
        barCategoryGap: '10%',
        barMaxWidth: 20,
        label: {
          normal: {
            // show: true,
            position: 'insideRight'
          }
        },
        data: [120, 132, 101, 134, 90, 230, 210, 320, 250]
      },
      {
        name: '初中',
        type: 'line',
        stack: '总量',
        smooth: true,
        barGap:'20%',
        // barCategoryGap: '10%',
        barMaxWidth: 20,
        label: {
          normal: {
            // show: true,
            position: 'insideRight'
          }
        },
        data: [220, 182, 191, 234, 290, 330, 310, 320, 250]
      },
      {
        name: '高中',
        type: 'line',
        stack: '总量',
        smooth: true,
        barGap:'20%',
        // barCategoryGap: '10%',
        barMaxWidth: 20,
        label: {
          normal: {
            // show: true,
            position: 'insideRight'
          }
        },
        data: [150, 212, 201, 154, 190, 330, 410, 320, 250]
      },
      {
        name: '搜索引擎',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            // show: true,
            position: 'insideRight'
          }
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
      }
    ]
  },
  POINT_MATCHS: {
    color: ['#38a7ee'],
    grid: {
      left: '3%',
      right: '3%',
      top: '20%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['0', '1', '2', '3', '4', '5', '6', '7'],
        axisLabel: {
          textStyle: {
            color: 'gray'
          }
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#373c53'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: 'gray'
          }
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#373c53'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '强度',
        type: 'line',
        symbol: 'circle',
        label: {
          normal: {
            color: 'gray',
            show: true,
            position: 'top'
          }
        },
        data: [103, 111, 120, 98, 45, 15, 49, 72]
      }
    ]
  },
  TEAM_RANK: {
    color: ['#d26563', '#38a7ee'],
    legend: {
      orient: 'vertical',
      right: '1%',
      bottom: '13%',
      itemWidth: 18,
      itemHeight: 10,
      data: [
        {
          name: '负荷',
          icon: 'rect',
          textStyle: {
            fontSize: 13,
            color: '#38a7ee'
          }
        },
        {
          name: '强度',
          icon: 'rect',
          textStyle: {
            fontSize: 13,
            color: '#d26563'
          }
        }
      ]
    },
    grid: {
      left: '3%',
      right: '5%',
      top: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['韶关市', '梅州市', '清远市', '河源市', '潮州市', '肇庆市', '揭阳市', '汕头市', '广州市', '惠州市', '佛山市', '云浮市', '东莞市', '汕尾市', '中山市', '深圳市', '江门市', '阳江市', '珠海市', '茂名市', '湛江市'],
        axisLabel: {
          textStyle: {
            color: '#373c53'
          }
        },
        splitLine: {
          lineStyle: {
            color: ['#e0e0e0']
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#38a7ee'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#373c53'
          }
        },
        splitLine: {
          lineStyle: {
            width: 2,
            color: '#373c53'
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#38a7ee'
          }
        },
        axisTick: {
          show: false
        }
      },
      {
        axisLabel: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#38a7ee'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '强度',
        type: 'line',
        showSymbol: false,
        cursor: '',
        data: [103, 111, 120, 98, 45, 15, 49, 72, 95, 70, 55, 62, 103, 111, 120, 98, 45, 15, 49, 72, 95]
      }, {
        name: '负荷',
        type: 'bar',
        barWidth: 6,
        yAxisIndex: 1,
        data: [47, 48, 60, 50, 103, 111, 120, 98, 45, 15, 49, 50, 60, 50, 103, 111, 120, 98, 45, 15, 49]
      }
    ]
  }
}
export default PERSON
