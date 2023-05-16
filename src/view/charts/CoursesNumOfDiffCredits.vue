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
        style="width:100%;height:400px;float:left;"
      ></div>
    </div>
  </div>
</template>

<script>
import { AGetCoursesNumOfDiffCredits, BGetCoursesNumOfDiffCredits, CGetCoursesNumOfDiffCredits, ALLGetCoursesNumOfDiffCredits } from '@/network/courses'
export default {
  data() {
    return {
      chart: '',
      opinion: ['3学分', '4学分', '5学分'],
      opinionData: [],
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
          formatter: '{a} <br/>{b} : {c} ({d}%)',
          fontSize: 16,
        },
        legend: {
          orient: 'vertical',
          bottom: 'bottom',
          data: this.opinion,
          textStyle: {
            fontSize: 16,
          }
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
              normal: {
                label: {
                  textStyle: {
                    fontSize: 16
                  }
                },
                color: function (params) {
                  // 自定义颜色
                  var colorList = ['#36A2EB', '#FFCE56', '#FF6384', '#E84393']
                  return colorList[params.dataIndex]
                }
              },
            }
          }
        ]
      })
    },
    buttonChange(scale) {
      this.opinionData = [];
      switch (scale) {
        case 'A': this.selectedScale = 'A';
          this.titleText = 'A学院-课程学分分布情况';
          this.getCoursesNumOfDiffCredits_A();
          break;
        case 'B': this.selectedScale = 'B';
          this.titleText = 'B学院-课程学分分布情况';
          this.getCoursesNumOfDiffCredits_B();
          break;
        case 'C': this.selectedScale = 'C';
          this.titleText = 'C学院-课程学分分布情况';
          this.getCoursesNumOfDiffCredits_C();
          break;
        case 'ALL': this.selectedScale = 'ALL';
          this.titleText = '所有学院-课程学分分布情况'
          this.getCoursesNumOfDiffCredits_ALL();
      }
    },
    /**
     * A-获取不同学分的课程数量分布
     * @param {学院} institude 
     */
    getCoursesNumOfDiffCredits_A() {
      AGetCoursesNumOfDiffCredits().then(res => {
        this.setData(res);
      })
    },
    getCoursesNumOfDiffCredits_B() {
      BGetCoursesNumOfDiffCredits().then(res => {
        this.setData(res);
      })
    },
    getCoursesNumOfDiffCredits_C() {
      CGetCoursesNumOfDiffCredits().then(res => {
        this.setData(res);
      })
    },
    getCoursesNumOfDiffCredits_ALL() {
      ALLGetCoursesNumOfDiffCredits().then(res => {
        this.setData(res);
      })
    },
    setData(res) {
      for (let i = 0; i < res.length; ++i) {
        let item = {
          value: res[i],
          name: (i + 3) + '学分',
        }
        console.log(item);
        this.opinionData.push(item);
      }
      this.drawLine();
    }
  }
}
</script>
<style>
</style>