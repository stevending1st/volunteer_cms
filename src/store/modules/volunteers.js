const state = {
  tableChecked: [],
  volunteers: [{
    volunId: 'JH1111222222220',
    volunName: '王大卫1',
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
    volunDivision: '宣传部',
    volunCondition: '待审核'
  }, {
    volunId: 'JH1111222222221',
    volunName: '王大卫2',
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
    volunDivision: '宣传部',
    volunCondition: '待审核'
  }, {
    volunId: 'JH1111222222222',
    volunName: '王大卫3',
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
    volunDivision: '宣传部',
    volunCondition: '待审核'
  }, {
    volunId: 'JH111122222223',
    volunName: '王大卫4',
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
    volunDivision: '宣传部',
    volunCondition: '待审核'
  }, {
    volunId: 'JH1111222222224',
    volunName: '王大卫5',
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
    volunDivision: '宣传部',
    volunCondition: '待审核'
  }, {
    volunId: 'JH1111222222225',
    volunName: '王大卫6',
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
    volunDivision: '宣传部',
    volunCondition: '未通过'
  }, {
    volunId: 'JH1111222222226',
    volunName: '王大卫7',
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
    volunDivision: '宣传部',
    volunCondition: '已审核'
  }]
}

const getters = {
  isVolunteerPass: (state) => (volunCondition) => {
    if (volunCondition === 'all') {
      return state.volunteers
    } else {
      volunCondition = volunCondition.split(',')
      return state.volunteers.filter(volunteer => volunCondition.indexOf(volunteer.volunCondition) >= 0)
    }
  }
}
// changeSomeVolunCondition
const mutations = {
  /**
   * 批量改变“状态”(volunCondition)
   * changeCondition: String // 修改后的服务状态
   */
  changeSomeVolunCondition: (state, changeCondition) => {
    for (let i = 0; i < state.volunteers.length; i++) {
      for (let j = 0; j < state.tableChecked.length; j++) {
        if (state.volunteers[i].volunId === state.tableChecked[j]) {
          state.volunteers[i].volunCondition = changeCondition
        }
      }
    }
  },

  /**
   * 修改单个“状态”
   * change: {
   *   changeCondition: String //修改后事件的“状态”
   *   volunId: Number //被修改事件的内容的id
   * }
   */
  changeOneVolunCondition: (state, change) => {
    for (let i = 0; i < state.volunteers.length; i++) {
      if (state.volunteers[i].volunId === change.volunId) {
        state.volunteers[i].volunCondition = change.changeCondition
      }
    }
  },

  /**
   * 多选内容至state
   */
  reserveChecked: (state, Checked) => {
    state.tableChecked = Checked
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
