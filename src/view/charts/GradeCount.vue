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
        id="gradeCount"
        style="width:100%;height:278px;float:left;"
      ></div>
    </div>
  </div>
</template>

<script>
import { getGradeDistributionFromA, getGradeDistributionFromB, getGradeDistributionFromC, getGradeDistributionFromAll } from '@/network/courses/index.js';

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
      opinion: ['60分以下', '60-90分', '90分以上'],
      opinionData: [
        // { value: 1, name: '60分以下', },
        // { value: 9, name: '60-90分',  },
        // { value: 5, name: '90分以上',  },
      ],
      titleText: '课程成绩分布情况'
    }
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
    query(){
      this.opinionData=[];
      let config = {
        cno : cno,
      };
      if (this.selectedInstitute === 'A') {
        getGradeDistributionFromA(config).then(res => {
          this.setData(res);
        })
      }
      else if (this.selectedInstitute === 'B') {
        getGradeDistributionFromB(config).then(res => {
          this.setData(res);
        })
      }
      else if (this.selectedInstitute === 'C') {
        getGradeDistributionFromC(config).then(res => {
          this.setData(res);
        })
      }
      else if (this.selectedInstitute === 'ABC') {
        getGradeDistributionFromAll(config).then(res => {
          this.setData(res);
        })
      }
      this.drawLine();
    },
    setData(res) {
      this.opinionData = [
        { value: res[0], name: '60分以下',  },
        { value: res[1], name: '60-90分',  },
        { value: res[2], name: '90分以上',  },
      ];
    }
  }
}
</script>
<style>
</style>