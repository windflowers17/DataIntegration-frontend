<template>
  <div>
   <Head :acc="account"></Head>
    <el-table
        :data="tableData"
        border
        show-header
        stripe
        style="width: 100%">
      <el-table-column
          fixed
          prop="Cno"
          label="编号"
          width="200">
      </el-table-column>
      <el-table-column
          prop="Cnm"
          label="名称"
          width="150">
      </el-table-column>
      <el-table-column
          prop="Ctm"
          label="课时"
          width="150">
      </el-table-column>
      <el-table-column
          prop="Cpt"
          label="学分"
          width="150">
      </el-table-column>
      <el-table-column
          prop="Tec"
          label="老师"
          width="150">
      </el-table-column>
      <el-table-column
          prop="Pla"
          label="地点"
          width="150">
      </el-table-column>
      <el-table-column
          label="操作"
          width="200">

        <template slot-scope="scope">
          <el-popconfirm
              confirm-button-text='退课'
              cancel-button-text='取消'
              icon="el-icon-info"
              title="确定退选该课程？"
              @confirm="deleteCourse(scope.row)"
          >
            <el-button slot="reference" type="text" size="small">退课</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
import Head from '@/view/Head.vue'
export default {
  components: {
    Head,
  },
  methods: {
    deleteCourse(row) {
     // console.log(row)
      const cid = row.cid
      const tid = row.tid
    //发送请求

    },
  
   
  },

  data() {
    return {
      tableData: [
        {
          Cno:'01',
          Cnm:'数据集成',
          Ctm:'10',
          Cpt:'2',
          Tec:'lf',
          Pla:'教120',
        },
      ],
     
    }
  },
  mounted(){
    //获取列表
  },
}
</script>