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
    <div
      class="echart"
      id="mychart"
      :style="myChartStyle"
    ></div>
  </div>

</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      xData: ["数据集成", "Linux程序设计", "软件系统设计", "软件工程与计算Ⅰ", "软件工程与计算Ⅱ", "操作系统", "数据结构"], //横坐标
      yData: [23, 24, 18, 25, 27, 28, 25], //数据
      myChartStyle: { float: "left", width: "800px", height: "500px" }, //图表样式
      selectedScale: 'A', //当前查看的范围
      titleText: 'A学院-课程人数分布情况'
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      // 基本柱状图
      const option = {
        title: {
          text: this.titleText, // 主标题
          subtext: '', // 副标题
          x: 'left' // x轴方向对齐方式
        },
        xAxis: {
          data: this.xData,
          axisLabel: {
            // 旋转角度
            showMaxLabel: true,
            interval: 0,
            rotate: 35,
            fontSize:'16'
          },
        },

        grid: { // 控制图的大小，调整下面这些值就可以，
          x: 40,
          x2: 200, //调粗细
          y2: 150,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
        },
        yAxis: {},
        series: [
          {
            name: '数量',
            type: "bar", //形状为柱状图
            data: this.yData,
            itemStyle: {
              normal: {
                color: function () { return "#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16); }
              },
            }
          }
        ],
        tooltip: { // 鼠标悬浮提示框显示 X和Y 轴数据
          trigger: 'axis',
          backgroundColor: 'rgba(32, 33, 36,.7)',
          borderColor: 'rgba(32, 33, 36,0.20)',
          borderWidth: 1,
          textStyle: { // 文字提示样式
            color: '#fff',
            fontSize: '16'
          },
          axisPointer: {
            type: 'none'
          }
        },
      };
      const myChart = echarts.init(document.getElementById("mychart"));
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    buttonChange(scale) {
      switch (scale) {
        case 'A': this.selectedScale = 'A'; this.titleText = 'A学院-课程人数分布情况'; break;
        case 'B': this.selectedScale = 'B'; this.titleText = 'B学院-课程人数分布情况'; break;
        case 'C': this.selectedScale = 'C'; this.titleText = 'C学院-课程人数分布情况'; break;
        case 'ALL': this.selectedScale = 'ALL'; this.titleText = '所有学院-课程人数分布情况'
      }
      this.initEcharts();
    },
  }
};
</script>
<style>
</style>