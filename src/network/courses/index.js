import request from "@/network/request";
const API = require("@/apis")


// C
export const getAllCoursesFromC = config => request._get(API.ALL_COURSES_FROM_C, config);
export const selectCourseFromC = config => request._get(API.SELECT_COURSE_FROM_C, config);
export const CLoginCheck = config => request._get(API.LOGIN_CHECK_C, config);
export const CGetAllCourses = config => request._get(API.GET_ALL_COURSES_C, config);
// export const CGetSelectedCourses = config => request._get(API.ALL_SELECTED_COURSES_C, config);
export const CDropCourse = config => request._get(API.DROP_COURSE_C, config);
export const CGetSelectedCourses = config => request._get(API.GET_ALL_SELECTED_COURSES_C, config);

// B
export const getAllCoursesFromB = config => request._get(API.ALL_COURSES_FROM_B, config);
export const selectCourseFromB = config => request._get(API.SELECT_COURSE_FROM_B, config);
export const BGetAllCourses = config => request._get(API.GET_ALL_COURSES_B, config);

// A
export const getAllCoursesFromA = config => request._get(API.ALL_COURSES_FROM_A, config);
export const selectCourseFromA = config => request._get(API.SELECT_COURSE_FROM_A, config);
