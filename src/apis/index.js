// 开发模式
const REQUEST_BASE_URL_DEV = "/api"
// 生产模式
const REQUEST_BASE_URL_PROD = "http://121.37.247.178:8080"

const REQUEST_BASE_URL = REQUEST_BASE_URL_DEV

const ALL_COURSES_FROM_C = REQUEST_BASE_URL + '/getCCourses'



module.exports = {
    ALL_COURSES_FROM_C,

};
