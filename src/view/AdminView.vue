<template>
  <div>

    <Head
      :acc="account"
      :in="'ADMIN'"
    ></Head>
    <el-row class="tac">
      <el-col :span="5">
        <h1 style="margin-left: 22px;">查看图表</h1>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
        >
          <el-menu-item
            index="1"
            class="navSide"
            @click="handleClick(1)"
          >
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>最受欢迎课程</span>
            </template>
          </el-menu-item>
          <el-menu-item
            index="2"
            class="navSide"
            @click="handleClick(2)"
          >
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>不同学分课程的数量分布</span>
            </template>
          </el-menu-item>
          <el-menu-item
            index="3"
            class="navSide"
            @click="handleClick(3)"
          >
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>课程的选课学生院系分布</span>
            </template>
          </el-menu-item>
          <el-menu-item
            index="4"
            class="navSide"
            @click="handleClick(4)"
          >
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>课程成绩分布</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-col>
      <div class="rightSide">
        <CoursesSelectionCount v-if="this.index===1"></CoursesSelectionCount>
        <CoursesNumOfDiffCredits v-if="this.index===2"></CoursesNumOfDiffCredits>
        <InstituteCount v-if="this.index===3"></InstituteCount>
        <GradeCount v-if="this.index===4"></GradeCount>
      </div>
    </el-row>

  </div>

</template>
    
<script>
import Head from '@/view/Head.vue'
import CoursesNumOfDiffCredits from './charts/CoursesNumOfDiffCredits.vue';
import CoursesSelectionCount from './charts/CoursesSelectionCount.vue';
import InstituteCount from './charts/InstituteCount.vue';
import GradeCount from './charts/GradeCount.vue';
const xml2js = require('xml2js');

export default {
  components: {
    Head,
    CoursesSelectionCount,
    CoursesNumOfDiffCredits,
    InstituteCount,
    GradeCount,
  },
  mounted() {
    sessionStorage.setItem('acc', 'admin'); //TODO: 最后需要删除
    this.account = sessionStorage.getItem('acc');
  },
  data() {
    return {
      account: '',
      index: 2,
    }
  },
  methods: {
    handleClick(index) {
        console.log(index)
        this.index = index;
    }
  }
}
</script>
    
<style>
.tac {
  margin-left: 37px;
}

.navSide {
  font-size: 20px;
}

.rightSide {
    position:absolute;
    left: 30%;
    top:25%;
}
</style>