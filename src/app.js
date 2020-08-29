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

// 单元测试
import char from 'chai'
const expect = char.expect

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'upload'
    }
  })
  vm.$mount() // 不挂载到页面是挂载到内存的 所以一下能获取到dom
  const useElement = vm.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.equal('#icon-upload')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'upload',
      loading: true
    }
  })
  vm.$mount()
  const useElement = vm.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.equal('#icon-loading')
  vm.$el.remove()
  vm.$destroy()
}

{
  // 获取元素实际渲染样式需要把dom插入到html中取渲染才可以
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'loading'
    }
  })
  vm.$mount(div)
  const svg = vm.$el.querySelector('svg')
  const { order } = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}

{
  // 获取元素实际渲染样式需要把dom插入到html中取渲染才可以
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'loading',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  const svg = vm.$el.querySelector('svg')
  const { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'loading'
    }
  })
  vm.$mount()
  vm.$on('click', () => {
    console.log('handleClick event run is ok')
  })
  const button = vm.$el
  button.click()
  // 期望这个函数被执行
}
