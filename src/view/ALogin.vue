<template>
  <div class="login-container">
    <el-card class="login-card">
      <div class="login-title">登录</div>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        label-width="80px"
        class="login-form"
      >
        <el-form-item
          label="学号"
          prop="studentId"
        >
          <el-input
            v-model="loginForm.studentId"
            placeholder="请输入学号"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="login"
            class="loginButton"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
  
  <script>
const xml2js = require('xml2js');
import { ALoginCheck } from '@/network/courses';
export default {
  data() {
    return {
      loginForm: {
        studentId: '',
        password: ''
      },
      loginRules: {
        studentId: [
          { required: true, message: '请输入学号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 处理登录逻辑，发送请求验证学号和密码是否匹配
          let form = {
            '账户名': this.loginForm.studentId,
            '密码': this.loginForm.password,
          }
          let xml = this.json2Xml(form);
          console.log(xml);
          let config = {
            params: {
              userAccountXml: xml
            }
          }
          ALoginCheck(config).then(res => {
            console.log(res);
            let xmlDoc = new DOMParser().parseFromString(res, 'text/xml');
            let map = xmlDoc.getElementsByTagName('string');
            // console.log(map);
            if (map.length == 2) {
              alert('账户不存在，请先注册！');
              //TODO:跳转注册
            }
            else {
              let xmlDoc = new DOMParser().parseFromString(res, 'text/xml');
              // let token = xmlDoc.getElementsByTagName('string')[3].innerHTML;
              // console.log(token);
              sessionStorage.setItem('acc', this.loginForm.studentId);
              // sessionStorage.setItem('token', token);
              alert('登录成功!');
              this.$router.push('/a-course');
            }
          })
        } else {
          console.log('表单校验失败');
        }
      });
    },
    json2Xml(json) {
      let builder = new xml2js.Builder();
      return builder.buildObject({ 账户: json });
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

.login-form {
  margin-top: 20px;
}

.loginButton {
  margin-left: 65px;
}
</style>
  
