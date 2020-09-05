import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import gButtonGroup from './button-group.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', gButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false
  }
})
