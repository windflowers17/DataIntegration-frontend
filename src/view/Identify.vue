<template>
  <div class="login-container">
    <el-card class="login-card">
      <div class="login-title">身份选择</div>
      <el-link
        type="primary"
        @click="chooseIdenfify('A')"
        class="identifyChoice"
        style="margin-left: 40px;"
      >A学生</el-link>
      <el-link
        type="primary"
        @click="chooseIdenfify('B')"
        class="identifyChoice"
      >B学生</el-link>
      <el-link
        type="primary"
        @click="chooseIdenfify('C')"
        class="identifyChoice"
      >C学生</el-link>
      <el-link
        type="primary"
        @click="chooseIdenfify('ADMIN')"
        class="identifyChoice"
      >管理员</el-link>
    </el-card>
  </div>
</template>
    
    <script>
const xml2js = require('xml2js');
import { ALoginCheck } from '@/network/courses';
export default {
  data() {
    return {
    }
  },
  methods: {
    chooseIdenfify(identify) {
        switch(identify) {
            case 'A': this.$router.push('/a-login');break;
            case 'B': this.$router.push('/b-login');break;
            case 'C': this.$router.push('/c-login');break;
            case 'ADMIN': this.$router.push('/admin-login');break;
        }
    }
  }
}
    </script>
    
    <style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-card {
  width: 400px;
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.identifyChoice {
  margin-right: 40px;
}
</style>
    
  