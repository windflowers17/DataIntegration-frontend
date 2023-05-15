<template>
  <el-container>
    <el-header style="margin-bottom: 20px">
      <div class="header">
        <h1 class="title">南京大学选课系统</h1>
        <span class="stuName">你好，
          <span class="stuAccount">{{ acc }}</span>
        </span>
        <el-button
          type="text"
          class="courseLink"
          @click="showSelectedCourse"
          v-if="this.in != 'ADMIN'"
        >查看已选课程</el-button>
      </div>
    </el-header>
    <!-- <el-container>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container> -->
  </el-container>
</template>

<script>
export default {
  props: [
    'acc',
    'in'
  ],
  data() {
    return {

    }
  },
  methods: {
    showSelectedCourse() {
        //TODO: router switch
        switch(this.in) {
            case 'C': this.$router.push('/c-selectedCourses'); break;
            case 'B': this.$router.push('/b-selectedCourses'); break;
            case 'A': this.$router.push('/a-selectedCourses'); break;
            default: console.log('error');
        }
    }
  }
}
</script>

<style>
.el-header {
  background-color: #0080ff;
}
.title {
  display: inline-block;
  line-height: 2px;
  margin-left: 40px;
  font-size: 32px;
  color: #ffffff;
}
.stuName {
  float: right;
  line-height: 60px;
  margin-right: 20px;
  font-size: 22px;
  color: black;
}
.main {
  margin-top: 50px;
}

.stuAccount {
  color: #212121;
}

.courseLink {
  float: right;
  line-height: 37px;
  margin-right: 40px;
  font-size: 22px;
  color: #ffffff;
}
</style>