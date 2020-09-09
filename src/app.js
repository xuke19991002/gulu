import Vue from 'vue'
import Button from './button/button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button/button-group.vue'
import Input from './input.vue'
import Row from './grid/row.vue'
import Col from './grid/col.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

new Vue({
  el: '#app',
  data: {
    loading: false
  },
  methods: {}
})
