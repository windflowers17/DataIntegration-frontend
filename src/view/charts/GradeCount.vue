<template>
  <div>
    <div style="width:600px;height:400px;">
      <div
        id="gradeCount"
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
      opinion: ['60分以下', '60-90分', '90分以上'],
      opinionData: [
        { value: 1, name: '60分以下', itemStyle: '#FF6384' },
        { value: 9, name: '60-90分', itemStyle: '#36A2EB' },
        { value: 5, name: '90分以上', itemStyle: '#FFCE56' },
      ],
      titleText: '课程成绩分布情况'
    }
  },
  mounted: function () {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // console.log("开始画饼图")
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById('gradeCount'))
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
            name: '学生数量',
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

  }
}
</script>
<style>
</style>