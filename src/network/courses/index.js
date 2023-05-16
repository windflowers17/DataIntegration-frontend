import request from "@/network/request";
const API = require("@/apis")


// C
export const getAllCoursesFromC = config => request._get(API.ALL_COURSES_FROM_C, config);
export const selectCourseFromC = config => request._get(API.SELECT_COURSE_FROM_C, config);
export const CLoginCheck = config => request._get(API.LOGIN_CHECK_C, config);
export const CGetAllCourses = config => request._get(API.GET_ALL_COURSES_C, config);
export const CDropCourse = config => request._get(API.DROP_COURSE_C, config);
export const CGetSelectedCourses = config => request._get(API.GET_ALL_SELECTED_COURSES_C, config);

// B
export const getAllCoursesFromB = config => request._get(API.ALL_COURSES_FROM_B, config);
export const selectCourseFromB = config => request._get(API.SELECT_COURSE_FROM_B, config);
export const BGetAllCourses = config => request._get(API.GET_ALL_COURSES_B, config);
export const BLoginCheck = config => request._get(API.LOGIN_CHECK_B, config);
export const BDropCourse = config => request._get(API.DROP_COURSE_B, config);
export const BGetSelectedCourses = config => request._get(API.GET_ALL_SELECTED_COURSES_B, config);

// A
export const ALoginCheck = config => request._get(API.LOGIN_CHECK_A, config);
export const getAllCoursesFromA = config => request._get(API.ALL_COURSES_FROM_A, config);
export const selectCourseFromA = config => request._get(API.SELECT_COURSE_FROM_A, config);
export const ADropCourse = config => request._get(API.DROP_COURSE_A, config);
export const AGetSelectedCourses = config => request._get(API.GET_ALL_SELECTED_COURSES_A, config);
export const AGetAllCourses = config => request._get(API.GET_ALL_COURSES_A, config);

// ADMIN
// 1
export const AGetCoursesSelectionCount = config => request._get(API.GET_COURSES_SELECTION_COUNT_A, config);
export const BGetCoursesSelectionCount = config => request._get(API.GET_COURSES_SELECTION_COUNT_B, config);
export const CGetCoursesSelectionCount = config => request._get(API.GET_COURSES_SELECTION_COUNT_C, config);
export const ALLGetCoursesSelectionCount = config => request._get(API.GET_COURSES_SELECTION_COUNT_ALL, config);

// 2
export const AGetCoursesNumOfDiffCredits = config => request._get(API.GET_COURSES_NUM_OF_DIFF_CREDITS_A, config);
export const BGetCoursesNumOfDiffCredits = config => request._get(API.GET_COURSES_NUM_OF_DIFF_CREDITS_B, config);
export const CGetCoursesNumOfDiffCredits = config => request._get(API.GET_COURSES_NUM_OF_DIFF_CREDITS_C, config);
export const ALLGetCoursesNumOfDiffCredits = config => request._get(API.GET_COURSES_NUM_OF_DIFF_CREDITS_ALL, config);

//3
export const getStudentDistributionFromA = config => request._get(API.GET_STUDENT_DISTRIBUTION_A, config);
export const getStudentDistributionFromB = config => request._get(API.GET_STUDENT_DISTRIBUTION_B, config);
export const getStudentDistributionFromC = config => request._get(API.GET_STUDENT_DISTRIBUTION_C, config);
export const getStudentDistributionFromAll = config => request._get(API.GET_STUDENT_DISTRIBUTION_ALL, config);

//4
export const getGradeDistributionFromA = config => request._get(API.GET_GRADE_DISTRIBUTION_A, config);
export const getGradeDistributionFromB = config => request._get(API.GET_GRADE_DISTRIBUTION_B, config);
export const getGradeDistributionFromC = config => request._get(API.GET_GRADE_DISTRIBUTION_C, config);
export const getGradeDistributionFromAll = config => request._get(API.GET_GRADE_DISTRIBUTION_ALL, config);