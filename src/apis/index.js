// 开发模式
const REQUEST_BASE_URL_DEV = "/api"
// 生产模式
const REQUEST_BASE_URL_PROD = "http://121.37.247.178:8080"

// const REQUEST_BASE_URL = REQUEST_BASE_URL_DEV

// const REQUEST_BASE_URL_A = "http://192.168.43.58:8082"
// const REQUEST_BASE_URL_B = "http://192.168.43.220:8083"
// const REQUEST_BASE_URL_C = "http://192.168.43.26:8084"
// const REQUEST_BASE_URL_ABC = "http://192.168.43.195:8081"


const REQUEST_BASE_URL_C = "http://localhost:8084"
const REQUEST_BASE_URL_B = "http://localhost:8083"
const REQUEST_BASE_URL_A = "http://localhost:8082"
// 集成服务器
const REQUEST_BASE_URL_ABC = "http://localhost:8081"

// C
const ALL_COURSES_FROM_C = REQUEST_BASE_URL_C + '/courses'
const SELECT_COURSE_FROM_C = REQUEST_BASE_URL_C + '/courses_selection/add'
const LOGIN_CHECK_C = REQUEST_BASE_URL_C + '/login'
const ALL_SELECTED_COURSES_C = REQUEST_BASE_URL_C + '/courses_selection/searchBySno'
const DROP_COURSE_C = REQUEST_BASE_URL_C + '/courses_selection/delete'
// C从集成服务器获取所有课程信息
const GET_ALL_COURSES_C = REQUEST_BASE_URL_ABC + '/integration/CshowAllcourses'
// C从集成服务器获取所有已选课程信息
const GET_ALL_SELECTED_COURSES_C = REQUEST_BASE_URL_ABC + '/integration/CaskCourse'

// B
const LOGIN_CHECK_B = REQUEST_BASE_URL_B + '/login'
const ALL_COURSES_FROM_B = REQUEST_BASE_URL_B + '/courses'
const SELECT_COURSE_FROM_B = REQUEST_BASE_URL_B + '/courses_selection/add'
const DROP_COURSE_B = REQUEST_BASE_URL_B + '/courses_selection/delete'
// B从集成服务器获取所有课程信息
const GET_ALL_COURSES_B = REQUEST_BASE_URL_ABC + '/integration/BshowAllcourses'
// B从集成服务器获取所有已选课程信息
const GET_ALL_SELECTED_COURSES_B = REQUEST_BASE_URL_ABC + '/integration/BaskCourse'

// A
const LOGIN_CHECK_A = REQUEST_BASE_URL_A + '/login'
const ALL_COURSES_FROM_A = REQUEST_BASE_URL_A + '/courses'
const SELECT_COURSE_FROM_A = REQUEST_BASE_URL_A + '/courses_selection/add'
const ALL_SELECTED_COURSES_A = REQUEST_BASE_URL_A + '/courses_selection/searchBySno'
const DROP_COURSE_A = REQUEST_BASE_URL_A + '/courses_selection/delete'
// A从集成服务器获取所有课程信息
const GET_ALL_COURSES_A = REQUEST_BASE_URL_ABC + '/integration/AshowAllcourses'
// A从集成服务器获取所有已选课程信息
const GET_ALL_SELECTED_COURSES_A = REQUEST_BASE_URL_ABC + '/integration/AaskCourse'

module.exports = {
    // C
    ALL_COURSES_FROM_C,
    SELECT_COURSE_FROM_C,
    LOGIN_CHECK_C,
    GET_ALL_COURSES_C,
    ALL_SELECTED_COURSES_C,
    DROP_COURSE_C,
    GET_ALL_SELECTED_COURSES_C,

    // B
    LOGIN_CHECK_B,
    ALL_COURSES_FROM_B,
    SELECT_COURSE_FROM_B,
    GET_ALL_COURSES_B,
    GET_ALL_SELECTED_COURSES_B,
    DROP_COURSE_B,

    // A
    LOGIN_CHECK_A,
    ALL_COURSES_FROM_A,
    SELECT_COURSE_FROM_A,
    ALL_SELECTED_COURSES_A,
    DROP_COURSE_A,
    GET_ALL_COURSES_A,
    GET_ALL_SELECTED_COURSES_A,

};
