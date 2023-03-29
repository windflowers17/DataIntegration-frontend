<template>
  <el-container>
    <el-header>
        <div class="header">
            <h1 class="title">南京大学选课系统</h1>
            <span class="stuName">你好，
            <span class="stuAccount">{{ acc }}</span>
            </span>
        </div>
    </el-header>
    <el-container>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
    props: [
        'acc'
    ],
    data() {
        return {
            studentName: '张三'
        }
    },
    methods: {

    }
}
</script>

<style>
.el-header {
    background-color: skyblue;
}
.title {
    display:inline-block;
    line-height: 2px;
    margin-left: 40px;
    font-size: 32px;
}
.stuName {
    float: right;
    line-height: 60px;
    margin-right: 20px;
    font-size: 22px;
}
.main {
    margin-top: 50px;
}

.stuAccount {
    color: blue;
}
</style>