const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在', () => {
    expect(Input).to.exist
  })

  // 分组
  describe('Attributes', () => {
    // beforeEach(() => {})

    const Constructor = Vue.extend(Input)
    let vm

    afterEach(() => {
      vm.$destroy()
    })

    it('接收value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.value).to.eq('1234')
      vm.$destroy()
    })

    it('接收disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true // false => disabled: undefined
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.disabled).to.eq(true)
      vm.$destroy()
    })

    it('接收readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      // useElement.readonly === undefined 不可直接获取值
      // expect(useElement.readonly).to.equal('readonly')
      expect(useElement.getAttribute('readonly')).to.eq('readonly')
      vm.$destroy()
    })

    it('接收error', () => {
      vm = new Constructor({
        propsData: {
          error: '操作错误'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      const errorMessage = vm.$el.querySelector('.error-message')
      expect(useElement.getAttribute('xlink:href')).to.eq('#icon-info-circle-fill')
      expect(errorMessage.innerText).to.eq('操作错误')
      vm.$destroy()
    })
  })

  // 测试事件
  describe('Events', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('支持 change/input/focus/blur 事件', () => {
      ;['change', 'input', 'focus', 'blur'].forEach(eventName => {
        vm = new Constructor().$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        // 触发input的change事件
        const inputElement = vm.$el.querySelector('input')
        const event = new Event(eventName)
        // 我们期待当触发一个change事件后 我们的回调会被调用 同时调用的时候传递的第一个参数是event
        // 注意：模拟的事件 事件对象中不存在target
        // 模拟 event.target.value
        Object.defineProperty(event, 'target', {
          value: {
            value: 'test'
          },
          enumerable: true
        })
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('test')
      })
    })
  })
})
