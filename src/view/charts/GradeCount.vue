<template>
  <div>
    <el-button
      type="primary"
      :plain="this.selectedScale!=='A'"
      @click="buttonChange('A')"
    >A</el-button>
    <el-button
      type="primary"
      :plain="this.selectedScale!=='B'"
      @click="buttonChange('B')"
    >B</el-button>
    <el-button
      type="primary"
      :plain="this.selectedScale!=='C'"
      @click="buttonChange('C')"
    >C</el-button>
    <el-button
      type="primary"
      :plain="this.selectedScale!=='ALL'"
      @click="buttonChange('ALL')"
      style="margin-bottom: 20px;"
    >总体</el-button>
    <div style="width:600px;height:400px;">
      <div
        id="courseNumOfDifferentCredits"
        style="width:100%;height:278px;float:left;"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart: '',
      opinion: ['2学分', '3学分', '4学分', '5学分'],
      opinionData: [
        { value: 1, name: '1学分', itemStyle: '#FF6384' },
        { value: 9, name: '2学分', itemStyle: '#36A2EB' },
        { value: 5, name: '3学分', itemStyle: '#FFCE56' },
        { value: 3, name: '4学分', itemStyle: '#4BC0C0' },
        { value: 2, name: '5学分', itemStyle: '#E84393' },
      ],
      selectedScale: 'A', //当前查看的范围
      titleText: 'A学院-课程学分分布情况'
    }
  },
  mounted: function () {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // console.log("开始画饼图")
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById('courseNumOfDifferentCredits'))
      // 绘制图表
      this.chart.setOption({
        title: {
          text: this.titleText, // 主标题
          subtext: '', // 副标题
          x: 'left' // x轴方向对齐方式
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          bottom: 'bottom',
          data: this.opinion
        },
        series: [
          {
            name: '课程数量',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            data: this.opinionData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              color: function (params) {
                // 自定义颜色
                var colorList = ['#FF6384', '#1ab394','#36A2EB','#FFCE56','#4BC0C0','#E84393']
                return colorList[params.dataIndex]
              }
            }
          }
        ]
      })
    },
    buttonChange(scale) {
      switch (scale) {
        case 'A': this.selectedScale = 'A'; this.titleText = 'A学院-课程学分分布情况'; break;
        case 'B': this.selectedScale = 'B'; this.titleText = 'B学院-课程学分分布情况'; break;
        case 'C': this.selectedScale = 'C'; this.titleText = 'C学院-课程学分分布情况'; break;
        case 'ALL': this.selectedScale = 'ALL'; this.titleText = '所有学院-课程学分分布情况'
      }
      this.drawLine();
    },

  }
}
</script>
<style>
</style>