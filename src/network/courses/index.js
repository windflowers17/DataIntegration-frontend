import request from "@/network/request";
const API = require("@/apis")


// heart_thought
export const getAllCoursesFromC = config => request._get(API.ALL_COURSES_FROM_C, config);
export const selectCourseFromC = config => request._get(API.SELECT_COURSE_FROM_C, config);
export const CLoginCheck = config => request._get(API.LOGIN_CHECK, config);

