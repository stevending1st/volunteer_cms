<template>
<div>
  <texttemplate
    :compos="compos"
    :ctInfors="isActPass('all')"
  >
  </texttemplate>
</div>
</template>

<script>
import texttemplate from '@/components/texttemplate'
import { mapGetters } from 'vuex'

export default {
  name: '',
  components: {
    'texttemplate': texttemplate
  },
  computed: {
    ...mapGetters({
      isActPass: 'activities/isActPass'
    })
  },
  data () {
    return {
      compos: {
        searchInput: {
          IsDisplay: true
        },
        buttons: [{
          id: 0,
          size: 'medium',
          type: 'primary',
          text: '查询',
          fun: 'handleSearch',
          parameter: null
        }],
        tableColumns: {
          texts: [{
            key: 1,
            label: '活动名称',
            prop: 'actName',
            sortable: true
          }, {
            key: 2,
            label: '活动主题',
            prop: 'actTheme',
            sortable: true
          }, {
            key: 3,
            label: '负责单位/个人',
            prop: 'actHost',
            sortable: true
          }, {
            key: 4,
            label: '状态',
            props: 'actHost',
            sortable: true
          }],
          buttons: [{
            id: 0,
            size: 'small',
            type: 'info',
            text: '修改',
            fun: 'handleSearch',
            parameter: null
          }]
        }
      },
      ctInfors: [{
        actName: '梳妆玉龙山志愿服务活动',
        actTheme: ' 梳妆玉龙山梳妆玉龙山志愿服务活动',
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
      }, {
        actName: '梳妆玉龙山志愿服务活动梳妆玉龙山志愿服务活动梳妆玉龙山志愿服务活动',
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
      }, {
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
      }]
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
