<template>
<div>
  <el-col style="margin: 0 10px;width: 180px;" v-if="compos.searchInput.IsDisplay">
    <el-input v-model="inputSearch" placeholder="请输入查询内容" clearable></el-input>
  </el-col>

  <el-button
    v-for="button in compos.buttons"
    :size="button.size"
    @click="handleEditSome(button.fun, button.parameter)"
    :type="button.type"
    :key="button.text"
    style="margin: 2px 10px;">
  {{ button.text }}
  </el-button>

  <el-table
    :data="volunteers.slice((currentPage - 1)*pageSize,currentPage*pageSize)"
    style="width: 100%"
    @selection-change="selectionChange">
    <el-table-column type="selection" width="55">
    </el-table-column>

    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="活动名称">
            <span>{{ props.row.actName }}</span>
          </el-form-item>
          <el-form-item label="活动主题">
            <span>{{ props.row.actTheme }}</span>
          </el-form-item>
          <el-form-item label="活动内容">
            <span>{{ props.row.actContent }}</span>
          </el-form-item>
          <el-form-item label="责任团队">
            <span>{{ props.row.actHost }}</span>
          </el-form-item>
          <el-form-item label="发布时间">
            <span>{{ props.row.actRelTime }}</span>
          </el-form-item>
          <el-form-item label="招募时间">
            <span>{{ props.row.actStartRegTime }}-{{ props.row.actEndtRegTime }}</span>
          </el-form-item>
          <el-form-item label="活动时间">
            <span>{{ props.row.actStartTime }}-{{ props.row.actEndtTime }}</span>
          </el-form-item>
          <el-form-item label="服务时长">
            <span>{{ props.row.actPeriod }}h</span>
          </el-form-item>
          <el-form-item label="活动人数">
            <span>{{ props.row.actNumOfPeople }}</span>
          </el-form-item>
          <el-form-item label="招募上限">
            <span>{{ props.row.actNumOfPeopleUpper }}</span>
          </el-form-item>
          <el-form-item label="活动要求">
            <span>{{ props.row.actMandate }}</span>
          </el-form-item>
          <el-form-item label="其他">
            <span>{{ props.row.actOtherMandate }}</span>
          </el-form-item>
          <el-form-item label="允许取消">
            <span>{{ props.row.actCancel }}</span>
          </el-form-item>
          <el-form-item label="报名审核">
            <span>{{ props.row.actReview }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>

    <el-table-column
      v-for="text in compos.tableColumns.texts"
      :key="text.key"
      :label="text.label"
      :prop="text.prop"
      :sortable="text.sortable"
    >
    </el-table-column>

    <el-table-column v-if="compos.tableColumns.buttons">
      <template scope="scope">
        <el-col
          :xs="24"
          :sm="24"
          :lg="12"
          v-for="button in compos.tableColumns.buttons"
          :key="button.key">
          <el-button
            :key="button.key"
            :size="button.size"
            @click="handleEditOne(button.fun, scope.row, button.parameter)"
            :type="button.type"
            style="margin:10px 0;">
              {{ button.text }}
          </el-button>
        </el-col>
      </template>
    </el-table-column>

  </el-table>

  <el-pagination
      align ="center"
      :page-sizes="[1, 5, 10,  20]"
      :page-size = "pageSize"
      layout = "total, sizes, prev, pager, next, jumper"
      :total = "volunteers.length"
      :current-page = "currentPage"
      @size-change = "handleSizeChange"
      @current-change = "handleCurrentChange"
      >
  </el-pagination>

</div>
</template>

<script>
// import { mapMutations } from 'vuex'
// import hello from './../https.js'

export default {
  name: '',
  props: ['compos', 'volunteers'],
  data () {
    return {
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 1, // 每页的数据条数
      // tableChecked: [],
      inputSearch: ''
      // batchfun: false //批量操作
      /* v-if ='paginations.total > 0' */
    }
  },
  methods: {
    /**
     * 勾选触发
     */
    selectionChange: function (selection) {
      let selectionId = []
      for (let i = 0; i < selection.length; i++) {
        selectionId.push(selection[i].volunId)
      }
      this.$store.commit('volunteers/reserveChecked', selectionId)
    },

    // 单行触发
    handleEditOne: function (fun, row, changeCondition) {
      this[fun](row, changeCondition)
    },

    // 批量触发
    handleEditSome: function (fun, changeCondition) {
      this[fun](changeCondition)
    },

    // 翻页
    handleSizeChange: function (val) {
      console.log(`每页 ${val} 条`)
      this.currentPage = 1
      this.pageSize = val
    },
    handleCurrentChange: function (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    },

    // 批量处理
    handleChangeSome: function (changeCondition) {
      let ids = this.$store.state.volunteers.tableChecked.length
      if (ids === 0) {
        return
      }
      this.$confirm('是否将已选中的' + ids + '位志愿者的状态批量修改为【' + changeCondition + '】?', '操作提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        // 发出服务器通过申请
        this.$store.commit('volunteers/changeSomeVolunCondition', changeCondition)
        this.$message({
          type: 'success',
          message: '已将志愿者状态修改为【' + changeCondition + '】！'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    },

    // 单条处理
    handleChangeOne: function (row, changeCondition) {
      if (row.volunCondition === changeCondition) {
        return
      }
      let change = {}
      change.volunId = row.volunId
      change.changeCondition = changeCondition
      // 通过本行
      this.$confirm('是否将编号为【' + change.volunId + '】的志愿者状态设置为【' + changeCondition + '】?', '操作提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        // 发出服务器通过申请
        this.$store.commit('volunteers/changeOneVolunCondition', change)
        this.$message({
          type: 'success',
          message: '已将编号为【' + change.volunId + '】活动状态修改为【' + changeCondition + '】！'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    },

    // 检索
    handleSearch: function () {
      if (!this.inputSearch) {
        return
      }
      console.log('搜索' + this.inputSearch)
    }

  }
}
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }
  .mainTopButton {
    size: medium;
    margin: 2px 10px;
  }
  .rowButton  {
    margin: 10px 0;
  }
  /* .searchInput {
    width: 180px;
    height: 20px;
    display: block;
  } */
</style>
