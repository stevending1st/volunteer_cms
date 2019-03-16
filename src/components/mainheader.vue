<template>
  <el-row :gutter="0">
    <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="1">志愿服务管理系统</el-col>
    <el-col :xs="0" :sm="6" :md="4" :lg="3" :xl="1"></el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">{{identity}}：{{admin}}</el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"></el-col>
  </el-row>
</template>

<script>
import ElementUI from 'element-ui'

export default {
  name: 'mainheader',
  data () {
    return {
      identity: '当前身份',
      admin: '游客'
    }
  }
}
</script>

<style scoped>

</style>
