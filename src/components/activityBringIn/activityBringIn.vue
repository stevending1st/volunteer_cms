<template>
  <div>
    <!--
    <el-steps :active="activeStep" finish-status="finish" process-status="finish" simple>
      <el-step title="基本信息设置" ></el-step>
      <el-step title="活动预览并确定" ></el-step>
    </el-steps>
    -->
    <div class="margin20">
      <act-form/>
    </div>
  </div>
</template>

<script>
// import actPreview from './../actPreview'
import actForm from './../cell/actForm'

export default{
  name: 'activityBringIn',
  data () {
    return {
      // activeStep: 0
    }
  },
  components: {
    // actPreview,
    actForm
  }
}
</script>

<style>
.margin20 {
  margin: 20px 40px;
}
.setcenter {
  text-align: center;
}
</style>
