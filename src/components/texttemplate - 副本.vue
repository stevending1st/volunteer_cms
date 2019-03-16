<template>
<div>
  <!--
  <el-button
    v-for="button in compos.buttons"
    :size="button.size"
    @click="handleEditSome(button.fun)"
    :type="button.type"
    :key="button.text"
  >
  {{ button.text }}
  </el-button>
  -->
  <el-col style="margin: 0 10px;width: 180px;" v-if="compos.searchInput.IsDisplay">
    <el-input v-model="inputSearch" placeholder="请输入查询内容" clearable></el-input>
  </el-col>

  <el-button
    v-for="button in compos.buttons"
    :size="button.size"
    @click = "handleEditSome(button.fun)"
    :type="button.type"
    :key="button.text"
    style="margin: 2px 10px;">
  {{ button.text }}
  </el-button>

  <el-table
    :data="ctInfors.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
            @click="handleEdit(button.fun, scope.$index, scope.row)"
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
      :total = "ctInfors.length"
      :current-page = "currentPage"
      @size-change = "handleSizeChange"
      @current-change = "handleCurrentChange"
      >
  </el-pagination>
</div>
</template>

<script>
import hello from './../https.js'

export default {
  name: '',
  props: ['compos', 'ctInfors'],
  data () {
    return {
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 1,// 每页的数据条数
      tableChecked:[],
      inputSearch: ''
      //batchfun: false //批量操作
      /*v-if ='paginations.total > 0'*/
    }
  },
  methods: {
    selectionChange: function (selection) {
      this.tableChecked = selection;
    },
    handleSizeChange: function(val) {
        console.log(`每页 ${val} 条`);
        this.currentPage = 1;
        this.pageSize = val;
    },
    handleCurrentChange: function(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
    },
    handleEdit: function(fun,index,row){
      //console.log("222");
      //this.$emit(fun, index,row );
      this[fun](index,row);
      //console.log(event);
    },
    handleEditSome: function(fun){
      //console.log(fun);
      //this.$emit(fun);
      this[fun]();
      //[fun]("111");
      //console.log(event);
      //this.https.hello("111");
    },
    //批量通过选中
    handlePassSome: function() {
      let ids = this.tableChecked.map(item => item.actId);
      if(ids.length === 0){
        return;
      }
      //console.log(ids)
      this.$confirm('是否批量通过已选中的'+ ids.length +'条志愿服务活动?', '确认信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        //发出服务器通过申请
        ids.forEach(element =>{
          console.log(element);
          for(let i=0; i< this.ctInfors.length; i++){
            if(this.ctInfors[i].actId === element){
              this.ctInfors.splice(i, 1);
              console.log("批量通过");
              break;
            }
          }
        });
        this.$message({
          type: 'success',
          message: '活动已通过!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        });
      });
    },
    handleEliminateSome: function(index, row) {
      let ids = this.tableChecked.map(item => item.actId);
      if(ids.length === 0){
        return;
      }
      //淘汰本行
      this.$confirm('是否批量淘汰已选中的'+ ids.length +'条志愿服务活动?', '确认信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        //发出服务器删除申请
        ids.forEach(element =>{
          console.log(element);
          for(let i=0; i< this.ctInfors.length; i++){
            if(this.ctInfors[i].actId === element){
              this.ctInfors.splice(i, 1);
              console.log("批量淘汰");
              break;
            }
          }
        });
        this.$message({
          type: 'success',
          message: '活动已淘汰'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        });
      });
      //this.ctInfors.splice(index, 1)
      //console.log("淘汰")
    },
    handlePass: function(index, row) {
      //通过本行
      this.$confirm('是否通过本条志愿服务活动?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        //发出服务器通过申请
        this.ctInfors.splice(index, 1);
        console.log("通过");
        this.$message({
          type: 'success',
          message: '活动已通过!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        });
      });
      //this.ctInfors.splice(index, 1);
      //console.log("通过");
    },
    handleEliminate: function(index, row) {
      console.log(index, row);
      //淘汰本行
      this.$confirm('是否淘汰本条志愿服务活动?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        //发出服务器删除申请
        this.ctInfors.splice(index, 1)
        console.log("淘汰")
        this.$message({
          type: 'success',
          message: '活动已淘汰'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        });
      });
      //this.ctInfors.splice(index, 1)
      //console.log("淘汰")
    },
    handleSearch: function () {
      if(!this.inputSearch){
        return;
      }
      console.log("搜索" + this.inputSearch);
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
  /*.searchInput {
    width: 180px;
    height: 20px;
    display: block;
  }*/
</style>
