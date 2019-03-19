import Vue from 'vue'
import Router from 'vue-router'

import Nothing404 from '@/components/404'
import Home from '@/components/home'
import AllAct from '@/components/AllAct'
import ActivityBringIn from '@/components/activityBringIn/activityBringIn'
import ActCheck from '@/components/ActCheck'
import ManualRele from '@/components/ManualRele'
import ActApply from '@/components/ActApply'
import UndoneAct from '@/components/UndoneAct'
import AllVolunteer from '@/components/AllVolunteer'
import VolunteerCheck from '@/components/VolunteerCheck'
import SignUpCheck from '@/components/SignUpCheck'
import VolunteerAssess from '@/components/VolunteerAssess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/AllAct',
      name: 'AllAct',
      component: AllAct
    }, {
      path: '/ActivityBringIn',
      name: 'ActivityBringIn',
      component: ActivityBringIn
    }, {
      path: '/ActCheck',
      name: 'ActivityCheck',
      component: ActCheck
    }, {
      path: '/ManualRele',
      name: 'ManualRele',
      component: ManualRele
    }, {
      path: '/ActApply',
      name: 'ActApply',
      component: ActApply
    }, {
      path: '/UndoneAct',
      name: 'UndoneAct',
      component: UndoneAct
    }, {
      path: '/AllVolunteer',
      name: 'AllVolunteer',
      component: AllVolunteer
    }, {
      path: '/VolunteerCheck',
      name: 'VolunteerCheck',
      component: VolunteerCheck
    }, {
      path: '/SignUpCheck',
      name: 'SignUpCheck',
      component: SignUpCheck
    }, {
      path: '/VolunteerAssess',
      name: 'VolunteerAssess',
      component: VolunteerAssess
    }, {
      path: '*',
      component: Nothing404
    }
  ]
})
