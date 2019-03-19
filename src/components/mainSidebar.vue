<template>
  <el-menu default-active="1" class="sidebar height100per" router>
    <el-menu-item index="/">
      <span>首页</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <span>活动管理</span>
      </template>
      <el-menu-item index="/AllAct">所有活动</el-menu-item>
      <el-menu-item index="/ActivityBringIn">活动录入</el-menu-item>
      <el-menu-item index="/ActCheck">活动审核</el-menu-item>
      <el-menu-item index="/ManualRele">手动发布</el-menu-item>
      <el-menu-item index="/ActApply">报名管理</el-menu-item>
      <el-menu-item index="/UndoneAct">未完成活动</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <span>志愿者管理</span>
      </template>
      <el-menu-item index="/AllVolunteer">所有志愿者</el-menu-item>
      <el-menu-item index="/VolunteerCheck">注册审核</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <span>审核管理</span>
      </template>
      <el-menu-item index="/ActCheck">活动审核</el-menu-item>
      <el-menu-item index="/VolunteerCheck">注册审核</el-menu-item>
      <el-menu-item index="/SignUpCheck">报名审核</el-menu-item>
      <el-menu-item index="/VolunteerAssess">志愿者评价</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'mainSidebar',
  data () {
    return {
    }
  }
}
</script>

<style>
/*.sidebar {
  position: fixed;
  background-color: #E5E5E5;
  width: 210px;
  top: 45px;
  bottom: 0;
}
ul {
  width: 210px;
  font-size: 14px;
  border-bottom: #CCC;
}
li {
  height: 45px;
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid #CCC;
}*/
</style>
