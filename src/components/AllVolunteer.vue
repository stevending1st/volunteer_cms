<template>
<div>
  <texttemplatevolunteer
    :compos="compos"
    :volunteers="isVolunteerPass('all')"
  >
  </texttemplatevolunteer>
</div>
</template>

<script>
import texttemplatevolunteer from '@/components/texttemplatevolunteer'
import { mapGetters } from 'vuex'

export default {
  name: '',
  components: {
    'texttemplatevolunteer': texttemplatevolunteer
  },
  computed: {
    ...mapGetters({
      isVolunteerPass: 'volunteers/isVolunteerPass'
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
            key: '1',
            label: '志愿者编号',
            prop: '',
            sortable: true
          }, {
            key: '2',
            label: '姓名',
            prop: 'volunName',
            sortable: true
          }, {
            key: '3',
            label: '性别',
            prop: 'volunSex',
            sortable: true
          }, {
            key: '4',
            label: '政治面貌',
            prop: 'volunIdent',
            sortable: true
          }, {
            key: '5',
            label: '教学院',
            prop: 'volunFaculty',
            sortable: true
          }, {
            key: '7',
            label: '班级',
            prop: 'volunClass',
            sortable: true
          }, {
            key: '8',
            label: '学号',
            prop: 'volunStuId',
            sortable: true
          }, {
            key: '9',
            label: '站内部门',
            prop: 'volunDivision',
            sortable: true
          }],
          buttons: [{
            id: 1,
            size: 'small',
            type: 'info',
            text: '修改',
            fun: 'handleChangeOne',
            parameter: '待发布'
          }]
        }
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
    width: 50%;
  }
</style>
