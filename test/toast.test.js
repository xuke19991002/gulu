const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.exist
  })

  describe('props', function() {
    // 定义 超过10秒才超时
    this.timeout(10000)

    it('接收 autoClose 和 autoColseDelay', done => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: true,
          autoColseDelay: 3000
        }
      }).$mount(div)
      vm.$on('close', () => {
        // 期待body包含挂载的元素
        expect(document.body.contains(vm.$el)).to.eq(false)
        vm.$el.remove()
        vm.$destroy()
        done()
      })
    })

    it('接收 closeButton', done => {
      const callback = sinon.fake()
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '关闭',
            callback
          }
        }
      }).$mount()
      const closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭')
      setTimeout(() => {
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      })
    })

    it('接收 enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHtml: true,
        }
      })
      vm.$slots.default = ['<h1 id="h1">我是标题</h1>']
      vm.$mount()
      const h1 = vm.$el.querySelector('#h1')
      expect(h1).to.exist
    })

    it('接收 position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom',
        }
      })
      vm.$slots.default = ['<h1 id="h1">我是标题</h1>']
      vm.$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })
})
