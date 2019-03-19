<template>
  <div>
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
</style>
