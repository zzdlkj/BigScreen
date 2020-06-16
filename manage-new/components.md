## 项目组件

> 暂时有面包屑组件（Breadcrumb）、echarts组件（Modal）、表格组件（vTable）、对比框组件（vLeft），通用头部组件（vHead）

### PrintAndLink组件

> 用来进行打印的模块选择及页面快速跳转

需要传入数组，数组包含一个 标题 及 id

|名称|类型|描述|默认值|
|---|----|----|-----|
|titles|Array|{name: '个人基础信息', link: '#header'}|--|

这里处理dom的部分 可以直接用`mixin`引入

栗子

``` html

  <Print-And-Link :titles = "linkList"></Print-And-Link>

  <script>
  import minxin from 'src/minxin/getLinkInfo'
    export default {
      minxins: [mixin]
    }
  </script>
```

### MatchEventLine组件

> canvas

需要传入一个数组，数组中包含类型及其他信息

根据类型会，调用不同的方法进行绘制

参数列表

|名称|类型|描述|默认值|
|----|----|---|-----|
|eventdata|Array|事件的信息|--|
|matchtime|Number|比赛时长|90|
|width|Number，String|宽度|1200|

类型

- 进球事件

|字段|类型|描述|默认值|
|----|---|----|-----|
|name|String|进球人|--|
|type|String|进球的类型|'ball'|
|time|Number|发生的时间|--|
|team|String|红队(red)、蓝队(blue)|--|


 - 更换人员事件


 |字段|类型|描述|默认值|
 |----|---|----|-----|
 |name|Array|第一项为下场的人员，第二项为上场的人员|--|
 |type|String|类型|'change'|
 |time|Number|发生的时间|--|
 |team|String|红队(red)、蓝队(blue)|--|


 - 红黄牌事件


 |字段|类型|描述|默认值|
 |----|---|----|-----|
 |name|String|被罚人员|--|
 |type|String|类型|'card'|
 |time|Number|发生的时间|--|
 |team|String|红队(red)、蓝队(blue)|--|
 |color|String|颜色，红牌为red，黄牌为yellow|--|

 数据结构栗子

 ``` html
 <Match-Event-Line :eventdata = "matchEventData" :matchtime="matchTime" width="1180"></Match-Event-Line>

 <script type="text/javascript">
   matchTime = 90
   matchEventData = [
     {
     name: '刘心梦',
     time: 2,
     team: 'blue',
     type: 'ball'
   },
   {
     name: ['张莉萌', '李立波'],
     time: 20,
     team: 'blue',
     type: 'change'
   },
   {
     name: '张晓丽',
     time: 60,
     team: 'red',
     color: 'red',
     type: 'card'
   },
 ]
 </script>

 ```

### FootMap组件

> 暂时实现了轨迹、热区、阵型，其他的暂未实现

根据传入的宽高大小 决定实例化不同的类

当宽大与高会调用横向布局

高大于宽会调用纵向布局

------------------------------

参数列表

|名称|类型|描述|默认值|
|----|---|----|-----|
|width|String, Number|canvas的宽度|300|
|height|String, Number|canvas的高度|200|
|type|String|绘制的类型: 轨迹(routes)、热区(hotArea)、阵型(formation)|formation|
|mapconfig|Object|默认配置，及数据信息, 变化后触发绘制的回掉函数|--|

栗子：

轨迹, 热区

``` javascript

<Foot-Map type="routes" :mapconfig="mapConfig" :width="200" :height="400"></Foot-Map>

<Foot-Map type="hotArea" :mapconfig="mapConfig" :width="300" :height="200"></Foot-Map>

// script
 mapConfig:{"mapConfig":{"fangxiang":"","autoMap":0,latRightBottom:39.905323,latRightTop:39.904987,lonLeftBottom:116.411362,lonRightTop:116.410889,latLeftBottom:39.905441,lonRightBottom:116.410721,latLeftTop:39.905022,lonLeftTop:116.411400},"data":[[39.905357,116.411178,0],[39.905353,116.41117,0]]

```

阵型


``` javascript

  <Foot-Map type="formation" :mapconfig="formationConfig" :width="300" :height="200"></Foot-Map>

formationConfig: {mapConfig: {"latLeftBottom":22,"latLeftTop":24,"latRightBottom":22,"latRightTop":24,"lonLeftBottom":111,"lonLeftTop":111,"lonRightBottom":113,"lonRightTop":113}, data: {"appType":3,"cmap":{"1":"#ff0000","2":"#0000ff"},"teams":[{"num":1,"formation":"4,2,3,1"},{"num":2,"formation":"5,3,2"}],"isDebug":false,"match":{"beginTime":1428398749,"endTime":1428398756,"matchId":0},"players":[{"name":"郭远龙","num":1,"teamNum":2,"uid":1,"row":1,"col":2},{"name":"杨豪12","num":3,"teamNum":1,"uid":3,"row":1,"col":1},{"name":"时海清","num":2,"teamNum":1,"uid":2,"row":2,"col":1},{"name":"孙赞峰","num":5,"teamNum":2,"uid":5,"row":2,"col":2}],"runType":""}}
```

### 面包屑组件

需要传递的参数为

`config:Array`

数组中对象暂定为 name:'链接的名字' path：'链接的地址'
```
  <breadcrumb v-bind:config="navList"></breadcrumb>

  navList:[{name: '机构类型', path: '/index/Orgtypes'}, {name: '俱乐部', path: ''}, {name: 'AC米兰', path: ''}]

  页面显示为 机构类型/俱乐部/AC米兰

```

### 表格组件

需要传递的参数为

`apiurl` 请求地址

`columns` 表格字段

`control` 操作区域，点击操作区域的内容，比如详情，会触发`childData`事件,有三个参数:(index, id, name), index是索引, id 是改行的id, name 是点击的名字，例如'详情或者删除'

```
<v-table
  v-bind:columns="gridColumns"
  v-bind:apiurl="api"
  v-bind:control="handelOption"
>
var gridColumns = [{name: 'ID', field: 'id'}, {name: '英文名称', field: 'code'}, {name: '扩展', field: 'extra'}, {name: '创建时间', field: 'created_at'}, {name: '更新时间', field: 'updated_at'}]

var api = "http://www.baidu.com"

var handelOption = ['详情','删除']

```
### 模态框组件

可以传递`slot`片段，有header、body、footer三个片段

`showmodal`:控制显示状态 为布尔类型

`modaltype`: 控制大小，默认为中等，有`large、small`大小两个配置
```
<modal v-bind:showmodal.sync="addModel" modaltype="large">
  <h2 slot="header">替换头部</h2>
  <div slot="body">
    替换内容
  </div>
</modal>
```

### 省市县 三级联动组件

`npm install vue-region-picker china-area-data --save`

使用方法

```
import Vue from 'vue'
import RegionPicker from 'vue-region-picker'
import REGION_DATA from 'china-area-data'

Vue.use(RegionPicker, {
  region: REGION_DATA,
  vueVersion: 1 // or 2, default 1
})

```
[组件demo](http://qingwei-li.github.io/vue-region-picker/)

### 日期组件

```
<input type="text" @click="showCalendar" v-model="value" placeholder="请输入日期">
<calendar :show.sync="show" :value.sync="value" :x="x" :y="y" :begin="begin" :end="end" :range="range"></calendar>

```

###导航组件(vNav)
 >用来实现选择切换，当前选择出现绿色下边框
 ---------------------------------------------
 需要传递的参数为
 menu_list：Array
 数组中对象暂定为 name:'选项名称' valur：'选项value值'
 pamars：string  标识参数

 示例：
<v-nav v-bind:menu_list='menuList' v-bind:parmars='match'></v-nav>
menuList: [{name:'平均心率', value: 'heart'}, {name: '平均负荷', value: 'load'}, {name: '跑动距离', value: 'distance'}]

页面显示

  平均心率   平均负荷  跑动距离
 ——————————

````

 ###面板样式组件(vPanel)
 >用来呈现固定样式的面板结构，不需要传递参数
 ----------------------------------------------------
 示例：
 <v-panel>
	<h4 slot='header' class="panel-heading">比赛数据概览</h4>
	<div class='panel-body' slot='panel-body'></div>
 </v-panel>

 ```

 ###input单选组件(vRadio)
 >引用美化过的input单选插件，实现多项单选

 需要传递参数
 radio_list：Array 选项组
  数组中对象暂定为 name:'选项名称' valur：'选项value值'
 data_value：String, Number
  当前选择选项的value

 示例：
 <v-radio :radio_list="radioList" :data_value.sync="dataValue"></v-radio>
 radioList: [{name: '不限', value: ''}, {name: '小学', value: 1}, {name: '初中', value: 2}, {name: '高中', value: 3}]
 dataValue: 1

 ```

 ###按钮组(vBtn)
 >用来实现按钮选择切换，当前选择按钮背景为绿色

 需要传递参数
 btn_list: Array
 数组中对象暂定为 name:'选项名称' value：'选项value值'
 pamars：string  标识参数

 示例：
 <v-btn v-bind:btn_list='btnList' v-bind:pamars='match'></v-btn>
 btnList: [{name: '小学', value: 1}, {name: '初中', value: 2}, {name: '高中', value: 3}]

```
###联赛级联(LeagueMatch)
>用于对队伍或个人筛选
组件绑定参数 value，参数类型不限

示例：
<League-Match :value.sync="structure_value"></League-Match>

```
###右侧对比栏组件(vAside)
>用于对查询到的数据或个人进行勾选跳转到对比页面

需要传递参数
path: string  对比详情页的地址
compare: 该对比组件是否显示

示例：
<v-aside :path="compare_path" :compare="compare"></v-aside>

```
###面包屑组件(vBread)
>

需要传递参数
bread_list: Array 面包屑列表
  数组中对象暂定为 text:'选项名称' path：'选项跳转地址'
bread_active: String 当前页面内容

示例：
<v-bread :bread_list="bread_list" :bread_active="base_list.team_name"></v-bread>

```
###下拉框(vDropdown)
>bootstrap下拉框，用于下拉选择

需要传递参数
text: String 初始状态选择项名称
items: Array 选择项列表
  数组中对象暂定为 name:'选项名称' value：'选项value'
value: String || Number 被选项 value

示例：
<v-dropdown :text="view_sex_text" :items="sex_item" :value.sync="view_sex_value" :pamars="viewData"></v-dropdown>

```
###信息条组件(infoBar)
>样式组件 |名称|内容|

需要传递参数
list: Array
  数组中对象暂定为 name:'名称', num：'具体值'

示例: <info-bar :list.sync="train_info1"></info-bar>

```
###带筛选的下拉菜单(VueSelect)
>当选项不较多，可以输入关键字搜索选择

需要传递的参数
|名称|类型|描述|默认值|
|----|---|----|-----|
|width|String, Number|canvas的宽度|
|list|Array|选项内容|
|value|String, Number|被选择项的value|

示例:
<Vue-Select :list="nation_items" :width='200' :value.sync="valueBox.nationality" placemsg="请选择国籍" v-ref:nation></Vue-Select>
