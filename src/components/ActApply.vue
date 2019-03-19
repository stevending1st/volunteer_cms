<template>
<div>
  <texttemplate
    :compos="compos"
    :ctInfors="isActPass('待报名,正在报名,暂停报名')"
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
  methods: {
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
            key: '1',
            label: '自动发布时间',
            prop: 'actRelTime',
            sortable: true
          }, {
            key: '2',
            label: '活动名称',
            prop: 'actName',
            sortable: true
          }, {
            key: '3',
            label: '活动主题',
            prop: 'actTheme',
            sortable: true
          }, {
            key: '4',
            label: '负责单位/个人',
            prop: 'actHost',
            sortable: true
          }],
          buttons: [{
            id: 1,
            size: 'small',
            type: 'success',
            text: '开启报名',
            fun: 'handleChangeOne',
            parameter: '正在报名'
          }, {
            id: 2,
            size: 'small',
            type: 'danger',
            text: '暂停报名',
            fun: 'handleChangeOne',
            parameter: '暂停报名'
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
    width: 100%;
  }
</style>
