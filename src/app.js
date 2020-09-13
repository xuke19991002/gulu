import './demo.scss'
import Vue from 'vue'
import Toast from './toast-plugin'

Vue.use(Toast)

import Button from './button/button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button/button-group.vue'

import Input from './input.vue'

import Row from './grid/row.vue'
import Col from './grid/col.vue'

import Layout from './layout/layout.vue'
import Header from './layout/header.vue'
import Content from './layout/content.vue'
import Sider from './layout/sider.vue'
import Footer from './layout/footer.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)

new Vue({
  el: '#app',
  data: {
    loading: false
  },
  mounted() {
    
  },
  methods: {
    handleToast(position){
      this.$toast('智商余额不足', {
        enableHtml: true,
        position,
        autoClose: true,
        closeButton: {
          text: '关闭',
          callback(){
            console.log('用户关闭了toast');
          }
        }
      })
    }
  }
})
