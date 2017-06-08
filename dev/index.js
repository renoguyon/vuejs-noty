import Vue from 'vue'
import App from './App.vue'
import VueNoty from '../src/index'

Vue.use(VueNoty)

new Vue(App)
  .$mount('#app')
