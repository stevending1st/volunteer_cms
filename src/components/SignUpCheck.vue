<template>
<div>
  <texttemplate
    :compos="compos"
    :ctInfors="volunteers"
  >
  </texttemplate>
</div>
</template>

<script>
import texttemplate from '@/components/texttemplate'

export default {
  name: '',
  components: {
    'texttemplate': texttemplate
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
          fun: 'handleSearch'
        }, {
          id: 1,
          size: 'medium',
          type: 'success',
          text: '批量通过',
          fun: 'handlePassSome'
        }, {
          id: 2,
          size: 'medium',
          type: 'danger',
          text: '批量淘汰',
          fun: 'handleEliminateSome'
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
            label: '教学院',
            prop: 'volunFaculty',
            sortable: true
          }, {
            key: '5',
            label: '班级',
            prop: 'volunClass',
            sortable: true
          }, {
            key: '6',
            label: '学号',
            prop: 'volunStuId',
            sortable: true
          }],
          buttons: [{
            id: 1,
            size: 'small',
            type: 'success',
            text: '通过',
            fun: 'handlePass'
          }, {
            id: 2,
            size: 'small',
            type: 'danger',
            text: '淘汰',
            fun: 'handleEliminate'
          }]
        }
      },
      volunteers: [{
        volunId: 'JH1111222222222',
        volunName: '王大卫',
        volunSex: '男',
        volunIdent: '党员',
        volunFaculty: '生物与食品工程学院',
        volunDiscip: '食品',
        volunClassNum: '1601',
        volunClass: '食品1601',
        volunStuId: '1601652020',
        volunPhone: '13031111000',
        volunQq: '1111222333',
        volunWechat: '1111yyy9',
        volunEmail: '23333333@gmail.com',
        volunDivision: '宣传部'
      }, {
        volunId: 'JH1111222222222',
        volunName: '王大卫',
        volunSex: '男',
        volunIdent: '党员',
        volunFaculty: '生物与食品工程学院',
        volunDiscip: '食品',
        volunClassNum: '1601',
        volunClass: '食品1601',
        volunStuId: '1601652020',
        volunPhone: '13031111000',
        volunQq: '1111222333',
        volunWechat: '1111yyy9',
        volunEmail: '23333333@gmail.com',
        volunDivision: '宣传部'
      }, {
        volunId: 'JH1111222222222',
        volunName: '王大卫',
        volunSex: '男',
        volunIdent: '党员',
        volunFaculty: '生物与食品工程学院',
        volunDiscip: '食品',
        volunClassNum: '1601',
        volunClass: '食品1601',
        volunStuId: '1601652020',
        volunPhone: '13031111000',
        volunQq: '1111222333',
        volunWechat: '1111yyy9',
        volunEmail: '23333333@gmail.com',
        volunDivision: '宣传部'
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
    width: 50%;
  }
</style>
