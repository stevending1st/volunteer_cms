<template>
  <el-container class="height100per">
    <el-header class="header">
      <el-row :gutter="0">
        <el-col :xs="24" :sm="12" :md="4"><div class="grid-content font-center font-logo" type="primary">志愿服务管理系统</div></el-col>
        <el-col :xs="0" :sm="10" :md="18"><div class="grid-content font-right">{{identity}}：{{admin}}</div></el-col>
      </el-row>
    </el-header>
    <el-container>

        <el-aside style="width: 220px;">
          <el-scrollbar>
            <div style="height:100%">
              <main-sidebar/>
            </div>
          </el-scrollbar>
        </el-aside>

      <el-main class="main" id="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import mainSidebar from './components/mainSidebar'

Vue.use(Element)

export default {
  name: 'App',
  data: function () {
    return {
      identity: '游客',
      admin: '未登录'
    }
  },
  components: {
    mainSidebar
  }
}
</script>

<style>
/** {
  padding: 0;
  margin: 0;
}*/
html {
  height: 100%;
}
body {
  height: 100%;
}
.height100per {
  height: 100%;
}
.header {
  padding: 0;
}
.grid-content {
    border-radius: 4px;
    min-height: 45px;
    font-size: 15px;
    line-height: 60px;
  }
.font-center {
  text-align: center;
}
.font-logo {
  font-size: 20px;
  font-weight: bold;
}
.font-right {
  text-align: right;
}
.header {
  background-color: black;
  color: #fff;
}
</style>
