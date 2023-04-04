//路由模块

//导包
// C
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/view/Head.vue"
import CoursesCView from '@/view/CoursesCView.vue'
import StudentView from '@/view/StudentView.vue'
import CLogin from '@/view/CLogin.vue'
import CSelectedCourses from '@/view/SelectedCoursesCView.vue'


// B
import BLogin from '@/view/BLogin.vue'
import CoursesBView from '@/view/CoursesBView.vue'

// A
import ALogin from '@/view/ALogin.vue'
import CoursesAView from '@/view/CoursesAView.vue'

Vue.use(VueRouter);


//创建对象
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/c-login'
        },
        // CC
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
            path: '/c-selectedCourses',
            component: CSelectedCourses
        },
        // B
        {
            path: '/b-login',
            component: BLogin
        },
        {
            path: '/b-course',
            component: CoursesBView
        },
        // A
        {
            path: '/a-login',
            component: ALogin
        },
        {
            path: '/a-course',
            component: CoursesAView
        }
    ]
})

//向外共享实例对象

export default router;

