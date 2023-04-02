//路由模块

//导包
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/view/Head.vue"
import CoursesCView from '@/view/CoursesCView.vue'
import StudentView from '@/view/StudentView.vue'
import CLogin from '@/view/CLogin.vue'

import BLogin from '@/view/BLogin.vue'

Vue.use(VueRouter);


//创建对象
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/c-login'
        },
        {
            path: '/c-login',
            component: CLogin
        },
        {
            path: '/c-course',
            component: CoursesCView,
        },
        {
            path: '/student',
            component: StudentView
        },
        {
            path: '/b-login',
            component: BLogin
        }
    ]
})

//向外共享实例对象

export default router;

