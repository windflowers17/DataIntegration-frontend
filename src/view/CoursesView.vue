<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="NO"
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
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          NO: '000123123',
          name: '数据集成',
          time: '周二',
          credit: '4'
        },

      ]
    }
  }
}
</script>

<style>
</style>