<template>
<div>
  <el-row gutter="10" class="actprewmargin">
    <el-col :span="6" class="textright">活动名称</el-col>
    <el-col :span="14">{{actInfor.actName}}</el-col>
  </el-row>
  <el-row gutter="10" class="actprewmargin">
    <el-col :span="6" class="textright">活动主题</el-col>
    <el-col :span="14">{{actInfor.actTheme}}</el-col>
  </el-row>
  <el-row gutter="10" class="actprewmargin">
    <el-col :span="6" class="textright">活动内容</el-col>
    <el-col :span="14">{{actInfor.actContent}}</el-col>
  </el-row>
  <el-row gutter="10" class="actprewmargin">
    <el-col :span="6" class="textright">责任团队</el-col>
    <el-col :span="14">{{actInfor.actHost}}</el-col>
  </el-row>
  <el-row gutter="10" class="actprewmargin">
    <el-col :span="6" class="textright">发布时间</el-col>
    <el-col :span="14">{{actInfor.actRelTime}}</el-col>
  </el-row>
  <el-row gutter="10" class="actprewmargin">
    <el-col :span="6" class="textright">招募时间</el-col>
    <el-col :span="14">{{actInfor.actStartRegTime}}-{{actInfor.actEndtRegTime}}</el-col>
  </el-row>
  <el-row gutter="10" class="actprewmargin">
    <el-col :span="6" class="textright">活动时间</el-col>
    <el-col :span="14">{{actInfor.actStartTime}}-{{actInfor.actEndtTime}}</el-col>
  </el-row>
  <el-row gutter="10" class="actprewmargin">
    <el-col :span="6" class="textright">服务时长</el-col>
    <el-col :span="14">{{actInfor.actPeriod}}h </el-col>
  </el-row>
  <el-row gutter="10" class="actprewmargin">
    <el-col :span="6" class="textright">活动人数</el-col>
    <el-col :span="14">{{actInfor.actNumOfPeople}}</el-col>
  </el-row>
  <el-row gutter="10" class="actprewmargin">
    <el-col :span="6" class="textright">招募上限</el-col>
    <el-col :span="14">{{actInfor.actNumOfPeopleUpper}}</el-col>
  </el-row>
  <el-row gutter="10" class="actprewmargin">
    <el-col :span="6" class="textright">活动要求</el-col>
    <el-col :span="14">{{actInfor.actMandate}}</el-col>
  </el-row>
  <el-row gutter="10" class="actprewmargin">
    <el-col :span="6" class="textright">其他</el-col>
    <el-col :span="14">{{actInfor.actOtherMandate}}</el-col>
  </el-row>
  <el-row gutter="10" class="actprewmargin">
    <el-col :span="6" class="textright">允许取消</el-col>
    <el-col :span="14">{{actInfor.actCancel}}</el-col>
  </el-row>
  <el-row gutter="10" class="actprewmargin">
    <el-col :span="6" class="textright">报名审核</el-col>
    <el-col :span="14">{{actInfor.actReview}}</el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'actPreviewbox',
  data () {
    return {
      actInfor: {
        actName: '梳妆玉龙山志愿服务活动',
        actTheme: ' 梳妆玉龙山',
        actContent: '1.按照既定安排开展服务工作，先分一下组，比如三四个人一组，负责帮助工作人员进行垃圾的清扫、分类。2.在小广场、玉龙山等地点进行“梳妆化院”活动。1.按照既定安排开展服务工作，先分一下组，比如三四个人一组，负责帮助工作人员进行垃圾的清扫、分类。2.在小广场、玉龙山等地点进行“梳妆化院”活动。1.按照既定安排开展服务工作，先分一下组，比如三四个人一组，负责帮助工作人员进行垃圾的清扫、分类。2.在小广场、玉龙山等地点进行“梳妆化院”活动。3、参与活动的志愿者合影留念，活动结束。',
        actHost: '求索志愿者协会',
        actRelTime: '20181219',
        actStartRegTime: '20181219',
        actEndtRegTime: '20181219',
        actStartTime: '20181219',
        actEndtTime: '20181219',
        actPeriod: '4',
        actNumOfPeople: '10',
        actNumOfPeopleUpper: '15',
        actMandate: '1、吉林化工在校志愿者2、具备志愿服务项目所需要的技能的优秀志愿者3、听从组织安排，活动期间不能擅自脱离组织',
        actOtherMandate: '本次志愿活动的QQ群号码为948814482，了解本次活动更多内容。',
        actCancel: false,
        actReview: true
      }
    }
  }
}
</script>

<style>
.textright {
  text-align: right;
}
.actprewmargin {
  margin: 10px 0;
}
</style>
