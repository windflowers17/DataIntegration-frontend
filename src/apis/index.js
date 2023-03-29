// 开发模式
const REQUEST_BASE_URL_DEV = "/api"
// 生产模式
const REQUEST_BASE_URL_PROD = "http://121.37.247.178:8080"

const REQUEST_BASE_URL = REQUEST_BASE_URL_DEV

const ALL_COURSES_FROM_C = REQUEST_BASE_URL + '/courses'
const SELECT_COURSE_FROM_C = REQUEST_BASE_URL + '/courses_selection/add'
const LOGIN_CHECK = REQUEST_BASE_URL + '/login'

// const ALL_COURSES_FROM_B = REQUEST_BASE_URL + '/getCCourses'


module.exports = {
    ALL_COURSES_FROM_C,
    SELECT_COURSE_FROM_C,
    LOGIN_CHECK,
    

};
