// import activitiesApi from '../../mock/activities'
import Vue from 'vue'
import Vuex from 'vuex'

// import state from './state'
// import getters from './getters'
// import actions from './actions'
// import mutations from './mutations'
// import volunteers from './modules/volunteers'
import activities from './modules/activities.js'
import volunteers from './modules/volunteers.js'

Vue.use(Vuex)

const state = {
  // ctInfors: []
}

const getters = {
}

export default new Vuex.Store({
  getters,
  state,
  modules: {
    activities: activities,
    volunteers: volunteers
  }
})
