<template>
  <div>
    <div>
    <el-select
        v-model="selectedInstitute"
        placeholder="请选择查看院系"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input
      v-model="cno"
        placeholder="请输入课程编号" style="width:200px;"></el-input>
      <el-button
        type="primary"
        @click="query"
        class="queryButton"
      >查询</el-button>
    </div>
    <div style="width:600px;height:400px;">
      <div
        id="instituteCount"
        style="width:100%;height:278px;float:left;"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: 'A',
          label: 'A学院'
        },
        {
          value: 'B',
          label: 'B学院'
        },
        {
          value: 'C',
          label: 'C学院'
        },
        {
          value: 'ABC',
          label: '所有学院'
        },
      ],
      selectedInstitute: '',
      cno:'',
      chart: '',
      opinion: ['A学院', 'B学院', 'C学院'],
      opinionData: [
        { value: 1, name: 'A学院', itemStyle: '#FF6384' },
        { value: 9, name: 'B学院', itemStyle: '#36A2EB' },
        { value: 5, name: 'C学院', itemStyle: '#FFCE56' },
      ],
      titleText: '选课学生院系分布情况'
    }
  },
  mounted: function () {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // console.log("开始画饼图")
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById('instituteCount'))
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
            name: '选课人数',
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
    query(){

    },
  }
}
</script>
<style>
</style>