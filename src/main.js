import Vue from 'vue'
import App from './App.vue'
import '@/plugins/element.js'
//导入路由模块
import router from '@/router/index.js';

import axios from 'axios';


import '@/assets/css/index.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
