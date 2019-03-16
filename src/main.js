import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router/index'
import vuex from 'vuex'
import store from './store'

Vue.use(ElementUI)
Vue.use(vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
