<template>
<div>
  <texttemplate
    :compos="compos"
    :ctInfors="isActPass('待发布')"
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
        }, {
          id: 1,
          size: 'medium',
          type: 'success',
          text: '批量手动发布',
          fun: 'handleChangeSome',
          parameter: '待报名'
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
            text: '手动发布',
            fun: 'handleChangeOne',
            parameter: '待报名'
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
