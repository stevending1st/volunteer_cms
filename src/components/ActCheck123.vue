<template>
<div>

  <texttemplate
    :compos="compos"
    :ctInfors="isActPass('待通过,已通过')"
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
        }, {
          id: 1,
          size: 'medium',
          type: 'success',
          text: '批量通过',
          fun: 'handleChangeSome',
          parameter: '待发布'
        }, {
          id: 2,
          size: 'medium',
          type: 'danger',
          text: '批量淘汰',
          fun: 'handleChangeSome',
          parameter: '已淘汰'
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
          buttons: /*{
            // modifyButton: 'handleModify',
            passSomeButton: '待发布',
            eliminateSomeButton: '已淘汰'
          } */
          [{
            id: 1,
            size: 'small',
            type: 'success',
            text: '通过',
            fun: 'handleChangeOne',
            parameter: '待发布'
          }, {
            id: 2,
            size: 'small',
            type: 'danger',
            text: '淘汰',
            fun: 'handleChangeOne',
            parameter: '已淘汰'
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
