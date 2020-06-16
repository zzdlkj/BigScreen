<template lang="html">
  <div class="item" v-el:perch>
    <ul class="legend">
      <li v-for = "n in 3" :style="{background: color[n]}"></li>
    </ul>
    <ul v-for="n in ulNum" :style=" n | leftPostin" class="bar">
      <li v-for="n in 3" :style="n | liPostin"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ulNum: 0,
      color: ['#ccc', '#bbb', '#aaa']
    }
  },
  ready () {
    let width = this.$els.perch.offsetWidth
    this.ulNum = Math.ceil(width / 100)
  },
  filters: {
    liPostin (index) {
      let parentHeight = this.$els.perch.offsetHeight
      let height = Math.round(parentHeight * Math.random() * 28 / 100)
      let color = this.color[index]
      return `height: ${height}px;background:${color};`
    },
    leftPostin (index) {
      let num = this.ulNum
      let width = this.$els.perch.offsetWidth
      let marginLeft = (width - 80 - num * 40) / (num - 1)
      let left = 40 + (40 + marginLeft) * index
      return `left:${left}px`
    }
  }
}
</script>

<style lang="css" scoped>
  .item {
    padding: 30px auto;
    width: 100%;
    height: 100%;
    border-left: 2px solid #eee;
    border-bottom: 2px solid #eee;
    position: relative;
  }
  .item .legend li {
    border-radius: 2px;
    width: 30px;
    height: 15px;
    display: inline-block;
    margin: 0 20px;
  }
  .item .legend {
    width: 280px;
    text-align: center;
  }
  .item .bar li {
    background: #666;
    height: 60px;
  }
  .item .bar{
    width: 40px;
    position: absolute;
    bottom: 0;
  }
</style>
