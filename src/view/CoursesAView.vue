<template>
  <div>

    <Head
      :acc="account"
      :in="'A'"
    ></Head>
    <div class="institudeQuery">
      <el-select
        v-model="selectedInstitude"
        placeholder="请选择查看范围"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button
        type="primary"
        @click="queryCourses"
        class="queryButton"
      >查询</el-button>
    </div>
    <div class="courseMsg">
      <el-table
        :data="courseTable"
        style="width: 100%"
      >
        <el-table-column
          prop="number"
          label="课程编号"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="课程名称"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="time"
          label="课时"
        >
        </el-table-column>
        <el-table-column
          prop="credit"
          label="学分"
        >
        </el-table-column>
        <el-table-column
          prop="teacher"
          label="老师"
        >
        </el-table-column>
        <el-table-column
          prop="place"
          label="地点"
        >
        </el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="selectCourse(scope.row)"
              type="text"
              class="selectButton"
            >选课</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
  
  <script>
import Head from '@/view/Head.vue'
import { getAllCoursesFromA, AGetAllCourses, selectCourseFromA } from '@/network/courses/index.js';
const xml2js = require('xml2js');

export default {
  components: {
    Head,
  },
  mounted() {
    this.loadCoursesFromA();
    this.account = sessionStorage.getItem('acc');
  },
  data() {
    return {
      courseTable: [
        // {
        //   NO: '000123123',
        //   name: '数据集成',
        //   time: '周二',
        //   credit: '4'
        // },
      ],
      options: [
        {
          value: 'A',
          label: 'A学院'
        },
        {
          value: 'ABC',
          label: '所有学院'
        },
      ],
      selectedInstitude: 'A',
      account: '',
    }
  },
  methods: {
    queryCourses() {
      if (this.selectedInstitude === 'A') {
        this.loadCoursesFromA();
      }
      else if (this.selectedInstitude === 'ABC') {
        AGetAllCourses().then(res => {
          this.courseTable = [];
          let xmlDoc = new DOMParser().parseFromString(res, 'text/xml');
          let courses = xmlDoc.getElementsByTagName('课程');
          for (let i = 0; i < courses.length; ++i) {
            let course = courses[i];

            let index = 1;
            let isACourse = course.childNodes[0].innerHTML.charAt(0) === '1';
            // let isBCourse = course.childNodes[0].innerHTML.charAt(0) === '2';
            let share = isACourse ? course.childNodes[5].innerHTML : course.childNodes[6].innerHTML;
            if(!isACourse && share != '1') {
              continue;
            }
            let item = {
              number: course.childNodes[0].innerHTML,//编号
              name: course.childNodes[1].innerHTML,//名称
              time: isACourse ? '/' : course.childNodes[++index].innerHTML,//课时
              credit: course.childNodes[++index].innerHTML,//学分
              teacher: course.childNodes[++index].innerHTML,//老师
            }
            this.courseTable.push(item);
          }
        })
      }
    },
    /**
     * 默认加载A学院的课程
     */
    loadCoursesFromA() {
      this.courseTable = [];
      getAllCoursesFromA().then(res => {
        let xmlDoc = new DOMParser().parseFromString(res, 'text/xml');
        let courses = xmlDoc.getElementsByTagName('课程');
        for (let i = 0; i < courses.length; ++i) {
          let course = courses[i];
          // console.log(course);
          let item = {
            number: course.childNodes[0].innerHTML,//编号
            name: course.childNodes[1].innerHTML,//名称
            time: '/',//课时
            credit: course.childNodes[2].innerHTML,//学分
            teacher: course.childNodes[3].innerHTML,//老师
            place: course.childNodes[4].innerHTML,
          }
          this.courseTable.push(item);
        }
      })
    },
    /**
     * 选课操作
     */
    selectCourse(row) {
      let sno = sessionStorage.getItem('acc');
      let item = {
        '课程编号': row.number,
        '学生编号': sno,
        '得分': 0,
      }
      let xml = this.json2Xml(item);
      let config = {
        params: {
          courses_selectionXml: xml
        }
      }
      selectCourseFromA(config);
      alert('选课成功!')

    },
    /**
     * 将json转化为xml格式
     * @param {json} json 
     */
    json2Xml(json) {
      let builder = new xml2js.Builder();
      return builder.buildObject({ '选课': json });
    }

  }
}
  </script>
  
  <style>
.courseMsg {
  margin-top: 20px;
  margin-left: 30px;
}
.institudeQuery {
  margin-left: 30px;
}
.queryButton {
  margin-left: 20px;
}
</style>