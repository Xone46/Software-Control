import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import './assets/formulate.css'

import VueFormulate from '@braid/vue-formulate'
Vue.use(VueFormulate)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
