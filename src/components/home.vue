<template>
  <div>
    <el-row class="marginbottom20">
      <el-col class="numbercard marginleft0">
        <el-card >
          <h1>999999</h1>
          <p>在册志愿者</p>
        </el-card>
      </el-col>
      <el-col class="numbercard">
        <el-card>
          <h1>999999.5</h1>
          <p>已完成服务(件)</p>
        </el-card>
      </el-col>
      <el-col class="numbercard">
        <el-card>
          <h1>999999</h1>
          <p>已完成服务时长(h)</p>
        </el-card>
      </el-col>
      <el-col class="numbercard marginright0">
        <el-card>
          <h1>999999</h1>
          <p>待完成服务(件)</p>
        </el-card>
      </el-col>
    </el-row>
    <el-tabs type="border-card">
      <el-tab-pane label="待报名">
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date01" label="发布日期" width="180" header-align="center" sortable >
            </el-table-column>
            <el-table-column prop="data03" label="活动名称" header-align="center">
            </el-table-column>
          </el-table>
        </template>
      </el-tab-pane>
      <el-tab-pane label="正在报名">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date01" label="发布日期" width="180" header-align="center" sortable >
          </el-table-column>
          <el-table-column prop="date02" label="招募结束日期" width="180" header-align="center" sortable >
          </el-table-column>
          <el-table-column prop="data03" label="活动名称" header-align="center">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="审核未完成">
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date01" label="发布日期" width="180" header-align="center" sortable >
            </el-table-column>
            <el-table-column prop="data03" label="活动名称" header-align="center">
            </el-table-column>
          </el-table>
        </template>
      </el-tab-pane>
      <el-tab-pane label="待进行">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date01" label="活动开始日期" width="180" header-align="center" sortable >
          </el-table-column>
          <el-table-column prop="data03" label="活动名称" header-align="center">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="正在进行">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date01" label="活动开始日期" width="180" header-align="center" sortable >
          </el-table-column>
          <el-table-column prop="date02" label="活动结束日期" width="180" header-align="center" sortable >
          </el-table-column>
          <el-table-column prop="data03" label="活动名称" header-align="center">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待评价">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date01" label="活动结束日期" width="180" header-align="center" sortable >
          </el-table-column>
          <el-table-column prop="date01" label="自动评价日期" width="180" header-align="center" sortable >
          </el-table-column>
          <el-table-column prop="data03" label="活动名称" header-align="center">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      tableData: []
    }
  }
}
</script>

<style>
.numbercard {
  width: 22%;
  margin: 0 2%;
  text-align: center;
}
.marginleft0 {
  margin-left: 0;
}
.marginright0 {
  margin-right: 0;
}
.marginbottom20 {
  margin-bottom: 20px;
}
</style>
