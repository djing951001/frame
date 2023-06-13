import App from './App'

import Vue from 'vue'
import store from './store/index.js'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  store,
    ...App
})
app.$mount()
import './boostrap.config.js'
