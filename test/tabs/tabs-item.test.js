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

describe('TabsItem', () => {
  it('存在', () => {
    expect(TabsItem).to.exist
  })

  it('接收name属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: '1'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('1')
  })

  it('接收disabled', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: '1',
        disabled: true
      }
    }).$mount()
    expect(vm.$el.classList.contains('tabs-item-disabled')).to.be.true
    // const callback = sinon.fake()
    // vm.$on('click', callback)
    // vm.$el.click()
    // expect(callback).to.have.not.been.called
  })
})
