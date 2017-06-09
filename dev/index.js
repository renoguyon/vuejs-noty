import Vue from 'vue'
import App from './App.vue'
import VueNoty from '../src/index'

Vue.use(VueNoty, {
  layout: 'topCenter',
  timeout: 1000,
  progressBar: false
})

new Vue(App)
  .$mount('#app')
