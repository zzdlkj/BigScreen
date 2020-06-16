import {SAVE_USER_INFO, SAVE_TOKEN, LOGIN_OUT, SAVE_VIEWS} from '../types'
import {setThisViews} from 'src/plus/common'
//  创建一个对象保持初始状态
const state = {
  login: {},
  token: '',
  views: {
    student: {
      // 学生视图
      show: false,
      child: {
        stu_info: {
          // 个人信息
          show: false
        },
        stu_run_times: {
          // 运动次数
          show: false
        },
        stu_run_load: {
          // 运动负荷
          show: false
        },
        stu_data_rank: {
          // 数据排行
          show: false
        },
        stu_level_skill: {
          // 机能水平状态
          show: false
        },
        stu_skill_development: {
          // 机能发展记录
          show: false
        },
        stu_detail: {
          // 个人详情
          show: false
        },
        stu_run_control_times: {
          // 运动监控次数
          show: false
        },
        stu_run_data_record: {
          // 运动累积数据
          show: false
        },
        stu_data_report: {
          // 数据报告
          show: false
        }
      }
    },
    team: {
      // 队伍
      show: false,
      child: {
        team_home: {
          // 队伍主页
          show: false,
          child: {
            team_run_times: {
              // 运动次数
              show: false
            },
            team_run_load: {
              // 运动负荷
              show: false
            },
            team_data_rank: {
              // 数据排行
              show: false
            },
            team_level_skill: {
              // 机能水平状态
              show: false
            },
            team_person_info: {
              // 队伍人员信息
              show: false
            }
          }
        },
        team_function_advance: {
          // 机能发展记录
          show: false,
          child: {
            team_run_control_times: {
              // 运动监控次数
              show: false
            },
            team_run_sum_date: {
              // 运动累积数据
              show: false
            },
            team_run_data_record: {
              // 运动数据记录
              show: false
            },
            team_data_report: {
              // 数据记录
              show: false
            }
          }
        },
        team_rank: {
          // 队伍排行
          show: false
        }
      }
    },
    org: {
      // 机构视图
      show: false,
      child: {
        org_home: {
          // 机构主页
          show: false,
          child: {
            org_run_times: {
              // 运动次数
              show: false
            },
            org_run_load: {
              // 运动负荷
              show: false
            },
            org_data_rank: {
              // 数据排行
              show: false
            },
            org_contrast: {
              // 同级别对比
              show: false
            },
            org_run_control_contrast: {
              // 运动监控次数
              show: false
            },
            org_level_data_contrast: {
              // 机能数据对比
              show: false
            },
            org_subs_list: {
              // 子机构列表
              show: false
            },
            org_team_list: {
              // 队伍列表
              show: false
            },
            org_class_list: {
              // 班级列表
              show: false
            }
          }
        },
        org_function_advance: {
          // 机能发展记录
          show: false,
          child: {
            org_run_control_times: {
              // 运动监控记录
              show: false
            },
            org_run_sum_date: {
              // 运动累计数据
              show: false
            },
            org_run_data_record: {
              show: false
              // 运动数据记录
            },
            org_data_report: {
              // 运动数据记录
              show: false
            }
          }
        },
        org_rank: {
          // o排行榜
          show: false
        }
      }
    },
    coach: {
      // 教练视图
      show: false
    }
  }
}
let login = JSON.parse(window.localStorage.userInfo || '{}')
for (let k in login) {
  state[k] = login[k]
}

const mutations = {
  [SAVE_TOKEN] (state, str) {
    state.token = str
  },
  [SAVE_USER_INFO] (state, data) {
    state.login = data
    window.localStorage.userInfo = JSON.stringify(state)
  },
  [LOGIN_OUT] (state) {
    state.login = {}
    state.token = ''
  },
  [SAVE_VIEWS] (state, str) {
    // 保存视图权限
    let arr = (str || '').split(',')
    let setAllFalse = function (obj) {
      obj.show = false
      if (obj.child) {
        for (let key in obj.child) {
          setAllFalse(obj.child[key])
        }
      }
    }
    for (let key in state.views) {
      setAllFalse(state.views[key])
    }
    // 筛选出视图权限
    arr.forEach(k => setThisViews(k, state.views))
    let setTeamFalse = function (obj) {
      obj.show = true
      if (obj.child) {
        for (let key in obj.child) {
          setTeamFalse(obj.child[key])
        }
      }
    }
    setTeamFalse(state.views.team)
    window.localStorage.userInfo = JSON.stringify(state)
  }
}

export default {
  state,
  mutations
}
