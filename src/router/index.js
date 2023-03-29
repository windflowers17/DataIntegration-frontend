//路由模块

//导包
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/view/Home.vue"
import CoursesCView from '@/view/CoursesCView.vue'
import StudentView from '@/view/StudentView.vue'

Vue.use(VueRouter);


//创建对象
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/course'
        },
        {
            path: '/home',
            name: 'enter',
            component: Home,
            children: [
                {
                    path: '/course', component: CoursesCView
                },
                {
                    path: '/student', component: StudentView
                },
            ]
        },
    ]
})

//向外共享实例对象

export default router;

