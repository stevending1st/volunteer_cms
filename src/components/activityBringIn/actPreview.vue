<template>
<div>
  <act-previewbox></act-previewbox>
  <el-col class="setcenter">
    <el-button type="primary" round>上一步</el-button>
    <el-button type="primary" round>确认</el-button>
  </el-col>
</div>
</template>

<script>
import actPreviewbox from './../cell/actPreviewbox'

export default {
  name: 'actPreview',
  data () {
    return {
    }
  },
  components: {
    actPreviewbox
  }
}
</script>

<style>
</style>
