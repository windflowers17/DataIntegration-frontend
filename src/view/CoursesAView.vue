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
          // let res = '<?xml version="1.0" ?><list><课程><课程编号>1001</课程编号><课程名称>微积分一</课程名称><学分>4</学分><授课老师>a1老师</授课老师><授课地点>教301</授课地点><共享>0</共享></课程><课程><课程编号>1002</课程编号><课程名称>线性代数</课程名称><学分>3</学分><授课老师>b1老师</授课老师><授课地点>教302</授课地点><共享>0</共享></课程><课程><课程编号>1003</课程编号><课程名称>数学分析</课程名称><学分>3</学分><授课老师>c1老师</授课老师><授课地点>教303</授课地点><共享>0</共享></课程><课程><课程编号>1004</课程编号><课程名称>微积分二</课程名称><学分>4</学分><授课老师>d1老师</授课老师><授课地点>教304</授课地点><共享>0</共享></课程><课程><课程编号>1005</课程编号><课程名称>拓扑学</课程名称><学分>4</学分><授课老师>e1老师</授课老师><授课地点>教305</授课地点><共享>0</共享></课程><课程><课程编号>1006</课程编号><课程名称>实变函数</课程名称><学分>3</学分><授课老师>f1老师</授课老师><授课地点>教306</授课地点><共享>0</共享></课程><课程><课程编号>1007</课程编号><课程名称>概率论</课程名称><学分>4</学分><授课老师>g1老师</授课老师><授课地点>教307</授课地点><共享>0</共享></课程><课程><课程编号>1008</课程编号><课程名称>数理统计</课程名称><学分>3</学分><授课老师>h1老师</授课老师><授课地点>教308</授课地点><共享>0</共享></课程><课程><课程编号>1009</课程编号><课程名称>拓扑学</课程名称><学分>4</学分><授课老师>i1老师</授课老师><授课地点>教309</授课地点><共享>0</共享></课程><课程><课程编号>1010</课程编号><课程名称>复变函数</课程名称><学分>4</学分><授课老师>j1老师</授课老师><授课地点>教310</授课地点><共享>0</共享></课程><课程><课程编号>2001</课程编号><课程名称>中国文学</课程名称><学分>4</学分><授课老师>a2授课老师</授课老师><授课地点>教301</授课地点><共享>1</共享></课程><课程><课程编号>2002</课程编号><课程名称>西方文学</课程名称><课时>20</课时><学分>4</学分><授课老师>b2授课老师</授课老师><授课地点>教302</授课地点><共享>0</共享></课程><课程><课程编号>2003</课程编号><课程名称>古代汉语</课程名称><课时>20</课时><学分>3</学分><授课老师>c2授课老师</授课老师><授课地点>教303</授课地点><共享>0</共享></课程><课程><课程编号>2004</课程编号><课程名称>现代汉语</课程名称><课时>20</课时><学分>4</学分><授课老师>d2授课老师</授课老师><授课地点>教304</授课地点><共享>0</共享></课程><课程><课程编号>2005</课程编号><课程名称>逻辑学</课程名称><课时>20</课时><学分>3</学分><授课老师>e2授课老师</授课老师><授课地点>教305</授课地点><共享>0</共享></课程><课程><课程编号>2006</课程编号><课程名称>基础写作</课程名称><课时>20</课时><学分>4</学分><授课老师>f2授课老师</授课老师><授课地点>教306</授课地点><共享>0</共享></课程><课程><课程编号>2007</课程编号><课程名称>应用文写作</课程名称><课时>20</课时><学分>4</学分><授课老师>g2授课老师</授课老师><授课地点>教307</授课地点><共享>0</共享></课程><课程><课程编号>2008</课程编号><课程名称>文字学</课程名称><课时>20</课时><学分>3</学分><授课老师>h2授课老师</授课老师><授课地点>教308</授课地点><共享>0</共享></课程><课程><课程编号>2009</课程编号><课程名称>档案管理</课程名称><课时>20</课时><学分>3</学分><授课老师>i2授课老师</授课老师><授课地点>教309</授课地点><共享>0</共享></课程><课程><课程编号>2010</课程编号><课程名称>文学原理</课程名称><课时>20</课时><学分>4</学分><授课老师>j2授课老师</授课老师><授课地点>教310</授课地点><共享>0</共享></课程></list><课程><课程编号>3001</课程编号><课程名称>操作系统</课程名称><学分>4</学分><授课老师>a老师</授课老师><授课地点>教101</授课地点><共享>1</共享></课程><课程><课程编号>3002</课程编号><课程名称>计算机网络</课程名称><ctm>20</ctm><学分>4</学分><授课老师>b老师</授课老师><授课地点>教102</授课地点><共享>1</共享></课程><课程><课程编号>3003</课程编号><课程名称>软件工程</课程名称><ctm>20</ctm><学分>5</学分><授课老师>c老师</授课老师><授课地点>教103</授课地点><共享>0</共享></课程><课程><课程编号>3004</课程编号><课程名称>云计算</课程名称><ctm>10</ctm><学分>3</学分><授课老师>d老师</授课老师><授课地点>教104</授课地点><共享>0</共享></课程><课程><课程编号>3005</课程编号><课程名称>嵌入式</课程名称><ctm>10</ctm><学分>3</学分><授课老师>e老师</授课老师><授课地点>教105</授课地点><共享>0</共享></课程><课程><课程编号>3006</课程编号><课程名称>web前端</课程名称><ctm>10</ctm><学分>3</学分><授课老师>f老师</授课老师><授课地点>教106</授课地点><共享>0</共享></课程><课程><课程编号>3007</课程编号><课程名称>自动化分析</课程名称><ctm>20</ctm><学分>4</学分><授课老师>g老师</授课老师><授课地点>教107</授课地点><共享>0</共享></课程><课程><课程编号>3008</课程编号><课程名称>大数据分析</课程名称><ctm>10</ctm><学分>3</学分><授课老师>h老师</授课老师><授课地点>教108</授课地点><共享>0</共享></课程><课程><课程编号>3009</课程编号><课程名称>商务智能</课程名称><ctm>10</ctm><学分>3</学分><授课老师>i老师</授课老师><授课地点>教109</授课地点><共享>0</共享></课程><课程><课程编号>3010</课程编号><课程名称>数据集成</课程名称><ctm>20</ctm><学分>4</学分><授课老师>j老师</授课老师><授课地点>教110</授课地点><共享>0</共享></课程></list>'
          this.courseTable = [];
          let xmlDoc = new DOMParser().parseFromString(res, 'text/xml');
          let courses = xmlDoc.getElementsByTagName('课程');
          for (let i = 0; i < courses.length; ++i) {
            let course = courses[i];

            let isACourse = course.childNodes[0].innerHTML.charAt(0) === '1';
            let share = isACourse ? course.childNodes[5].innerHTML : course.childNodes[6].innerHTML;
            if(!isACourse && share != '1') {
              continue;
            }
            let item = {
              number: course.childNodes[0].innerHTML,//编号
              name: course.childNodes[1].innerHTML,//名称
              credit: course.childNodes[2].innerHTML,//学分
              teacher: course.childNodes[3].innerHTML,//老师
              place: course.childNodes[4].innerHTML //地点
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
        '学号': sno,
        '成绩': 0,
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