<template lang="html">
  <div class="avatar-box">
    <div v-if="shape == 'circle' && src" :style="imgbg"></div>
    <template v-else>
      <img :src="src" alt="" v-if="src" :title="title" :style="imgStyles" class="avatar-img" :class="otherClass">
      <span :style="styles" class="avatar-span" :title="title" v-else>{{name}}</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    sex: {
      type: String,
      // type male 男性 female 女性
      default: 'male'
    },
    shape: {
      type: String,
      default: 'circle'
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '50'
    },
    height: {
      type: String,
      default: '50'
    }
  },
  computed: {
    styles () {
      let style = `width:${this.width}px;height:${this.height}px;line-height:${this.height}px;`
      // let arr = ['#61a0a8', '#d48265'] // '#c23531', '#2f4554', , '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
      let sexColor = {
        male: '#61a0a8',
        female: '#d48265'
      }
      if ((this.title && this.src === '') || (this.title && this.src === null)) {
        // let index = Math.floor(Math.random() * 2)
        let backgroundColor = sexColor[this.sex]
        // 暂时使用echarts内置的11种颜色颜色
        // let backgroundColor = '#' + ('00000' + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6)
        style += `background-color:${backgroundColor}`
      }
      return style
    },
    imgStyles () {
      let style = `max-width:${this.width}px;max-height:${this.height}px;line-height:${this.height}px;`
      return style
    },
    imgbg () {
      let src = this.src
      let style = `width:${this.width}px;height:${this.height}px;border-radius: 50%;background-image:url(${src});background-size: cover;background-position:center;`
      return style
    },
    otherClass () {
      return this.shape
    },
    name () {
      let str = ''
      if (this.title) {
        str = this.title.split('')[0]
      }
      return str
    }
  }
}
</script>

<style lang="css">
  .avatar-box {
    display: inline-block;
    color: #fff;
  }
  .avatar-box .circle                                                                                                                                                                         , .avatar-span{
    border-radius: 50%
  }
  .avatar-img, .avatar-span{
    display: inline-block;
    text-align: center;
    font-size: 18px;
  }
</style>
