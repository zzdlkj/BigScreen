# 新平台前台接口

> 以下接口所带参数access_token 为接口API请求限制的token，正式站接口无需携带此参数，本机测评时必须公共接口请看最后面，页面上涉及的下拉列表框，都在公共接口里查阅

## 公共接口

### 比赛/训练/专项 所属赛制类型接口（PAD、前端公用）

> `url`: common/sports_formats

传递的参数

## 团队成长记录

> 地址： growth/teams_details

### 团队基本信息/队员/团队平均数据


|字段|默认值|描述|
|----|-----|----|
|type|team_base|接口类型|
|team_id|--|队伍的id|

```
growth/teams_details?type=team_base&team_id=41
```

### 测评

传递参数列表

|字段|默认值|描述|
|----|-----|----|
|team_id|--|队伍id|
|type|special_test|接口类型|
|year| --|搜索的年份|
|month|--|传递此参数显示为每天|
|type_id|0 跑动距离 1 高强度跑距离占比 2 平均心率|返回的类型|

``` html
  growth/teams_details?type=special_test&year=2016&team_id=41&type_id=0
```

### 训练

|字段|默认值|描述|
|----|-----|----|
|team_id|--|队伍id|
|type|train|接口类型|
|year| --|搜索的年份|
|month|--|传递此参数显示为每天|
|type_id|0 跑动距离 1 高速跑占比 2 冲刺跑距离占比 3 平均心率|返回的类型|

```
growth/teams_details?type=train&team_id=919&type_id=0&year=2016&month=10
```

### 比赛指数 - 基础(朱喆)

|字段|默认值|描述|
|----|-----|----|
|teamId|--|队伍id|
|type|match_info|接口类型|

```
growth/team_matchs?type=match_info&teamId=145
```

### 比赛指数 - 进阶(朱喆)

|字段|默认值|描述|
|----|-----|----|
|teamId|--|队伍id|
|type|match_detail|接口类型|
|year|--|年份|
|month|--|月份，可以省略|
|typeId|--|--|
|formation|--|赛制|

```
growth/team_matchs?type=match_detail&teamId=145&year=2016&month=04&typeId=1&formation=11
```

## 个人成长记录
