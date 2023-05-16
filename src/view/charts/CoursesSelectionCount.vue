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
    <h2>最受欢迎的课程：<span class="mostPopular">{{ this.mostPopularCourse }}</span>，人数：<span class="mostPopular">{{ this.mostPopularCourseCount }}</span></h2>
    <div
      class="echart"
      id="mychart"
      :style="myChartStyle"
    ></div>
  </div>

</template>

<script>
import * as echarts from "echarts";
import { AGetCoursesSelectionCount, BGetCoursesSelectionCount, CGetCoursesSelectionCount, ALLGetCoursesSelectionCount } from '@/network/courses';

export default {
  data() {
    return {
      xData: [], //横坐标
      yData: [], //数据
      myChartStyle: { float: "left", width: "800px", height: "500px" }, //图表样式
      selectedScale: 'A', //当前查看的范围
      titleText: 'A学院-课程人数分布情况',
      mostPopularCourse: '', //最受欢迎课程
      mostPopularCourseCount: '', //最受欢迎课程的选课人数
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
            fontSize: '16'
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
      this.xData = []
      this.yData = []
      switch (scale) {
        case 'A': this.selectedScale = 'A';
          this.titleText = 'A学院-课程人数分布情况';
          this.getCoursesSelectionCount_A();
          break;
        case 'B': this.selectedScale = 'B';
          this.titleText = 'B学院-课程人数分布情况';
          this.getCoursesSelectionCount_B();
          break;
        case 'C': this.selectedScale = 'C';
          this.titleText = 'C学院-课程人数分布情况';
          this.getCoursesSelectionCount_C();
          break;
        case 'ALL': this.selectedScale = 'ALL';
          this.titleText = '所有学院-课程人数分布情况';
          this.getCoursesSelectionCount_ALL();

      }
    },
    /**
     * 获得课程选课人数分布
     */
    getCoursesSelectionCount_A() {
      AGetCoursesSelectionCount().then(res => {
        this.setData(res);
      })
    },
    getCoursesSelectionCount_B() {
      BGetCoursesSelectionCount().then(res => {
        this.setData(res);
      })
    },
    getCoursesSelectionCount_C() {
      CGetCoursesSelectionCount().then(res => {
        console.log(res);
        this.setData(res);
      })
    },
    getCoursesSelectionCount_ALL() {
      ALLGetCoursesSelectionCount().then(res => {
        this.setData(res);
      })
    },
    setData(res) {
      this.courseParse(res);
      this.initEcharts();
    },
    /**
     * 以:为分隔符解析字符串（如："操作系统:42"），得到课程名称和人数, list最后一项为最受欢迎的课程
     */
    courseParse(list) {
      for (let i = 0; i < list.length - 1; ++i) {
        let item = list[i].split(':');
        this.xData.push(item[0]);
        this.yData.push(item[1]);
      }
      let mostPopularItem = list[list.length - 1].split(":");
      this.mostPopularCourse = mostPopularItem[0];
      this.mostPopularCourseCount = mostPopularItem[1];
    }
  }
};
</script>
<style>
.mostPopular {
  color: #FFA500;
}
</style>