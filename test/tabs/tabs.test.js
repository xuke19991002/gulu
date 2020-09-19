const expect = chai.expect
import Vue from 'vue'
import Tabs from '../../src/tabs/tabs.vue'
import TabsHead from '../../src/tabs/tabs-head.vue'
import TabsBody from '../../src/tabs/tabs-body.vue'
import TabsItem from '../../src/tabs/tabs-item.vue'
import TabsPane from '../../src/tabs/tabs-pane.vue'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在', () => {
    expect(Tabs).to.exist
  })

  it('接收value', done => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-tabs value="2">
        <g-tabs-head>
          <g-tabs-item name="1">美女</g-tabs-item>
          <g-tabs-item name="2">财经</g-tabs-item>
          <g-tabs-item name="3">体育</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="1">美女相关咨询</g-tabs-pane>
          <g-tabs-pane name="2">财经相关咨询</g-tabs-pane>
          <g-tabs-pane name="3">体育相关咨询</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    `
    const vm = new Vue().$mount(div)
    setTimeout(() => {
      const tabsItem = vm.$el.querySelector('.tabs-item[data-name="2"]')
      expect(tabsItem.classList.contains('tabs-item-active')).to.be.true
      done()
    }, 1500)
  })
})
