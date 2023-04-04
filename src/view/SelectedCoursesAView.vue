<template>
  <div>

    <SelectedCoursesHead :acc="account"></SelectedCoursesHead>
    <h2 class="_title">已选课程</h2>
    <el-table
      :data="courseList"
      style="width: 100%;margin-left: 20px"
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
        label="上课时间"
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
      <!-- 退课 -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="dropCourse(scope.row)"
            type="text"
            class="dropButton"
          >退课 </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
  
<script>
import SelectedCoursesHead from '@/view/SelectedCoursesHead.vue'
import { CDropCourse, CGetSelectedCourses } from '@/network/courses';
const xml2js = require('xml2js');

export default {
  components: {
    SelectedCoursesHead,
  },
  mounted() {
    this.account = sessionStorage.getItem('acc');
    this.getSelectedCourses();
  },
  data() {
    return {
      account: '',
      courseList: [],
    };
  },
  methods: {
    getSelectedCourses() {
      this.courseList = [];
      let sno = sessionStorage.getItem('acc');
      let pack = {
        sno: sno
      }
      let xml = this.json2Xml(pack);
      let config = {
        params: {
          snoXml: xml
        }
      }
      CGetSelectedCourses(config).then(res => {
        console.log(res);
        let xmlDoc = new DOMParser().parseFromString(res, 'text/xml');
        let courses = xmlDoc.getElementsByTagName('课程');
        for (let i = 0; i < courses.length; ++i) {
          let course = courses[i];
          let item = {
            number: course.childNodes[0].innerHTML,//编号
            name: course.childNodes[1].innerHTML,//名称
            time: course.childNodes[2].innerHTML,//课时
            credit: course.childNodes[3].innerHTML,//学分
            teacher: course.childNodes[4].innerHTML,//老师
            place: course.childNodes[5].innerHTML,
          }
          this.courseList.push(item);
        }
      })
    },
    /**
      * 将json转化为xml格式
      * @param {json} json 
      */
    json2Xml(json) {
      let builder = new xml2js.Builder();
      return builder.buildObject({ '选课': json });
    },
    /**
     * 退课操作
     * @param {行} row 
     */
    dropCourse(row) {
      let sno = sessionStorage.getItem('acc');
      let item = {
        cno: row.number,
        sno: sno,
        // grd: 0,
      }
      let xml = this.json2Xml(item);
      let config = {
        params: {
          courses_selectionXml: xml
        }
      }
      CDropCourse(config);
      alert('退课成功！');
      location.reload();
    }
  }
};
</script>

<style scoped>
._title {
  margin-left: 20px;
}
</style>
  