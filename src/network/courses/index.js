import request from "@/network/request";
const API = require("@/apis")


// C
export const getAllCoursesFromC = config => request._get(API.ALL_COURSES_FROM_C, config);
export const selectCourseFromC = config => request._get(API.SELECT_COURSE_FROM_C, config);
export const CLoginCheck = config => request._get(API.LOGIN_CHECK_C, config);
export const getAllCourses = config => request._get(API.GET_ALL_COURSES, config);


