import request from "@/network/request";
const API = require("@/apis")


// heart_thought
export const getAllCoursesFromC = config => request._get(API.ALL_COURSES_FROM_C, config);
export const selectCourseFromC = config => request._post(API.SELECT_COURSE_FROM_C, config);

