const expect = chai.expect
import Vue from 'vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在', () => {
    expect(Col).to.exist
  })

  it('接收span属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: 1
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('g-col-1')).to.eq(true)
  })

  it('接收span属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: 1
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('g-col-offset-1')).to.eq(true)
  })

  it('接收ipad属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        ipad: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('g-col-ipad-1')).to.eq(true)
    expect(element.classList.contains('g-col-offset-ipad-2')).to.eq(true)
  })

  it('接收narrowPc属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        narrowPc: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('g-col-narrow-pc-1')).to.eq(true)
    expect(element.classList.contains('g-col-offset-narrow-pc-2')).to.eq(true)
  })

  it('接收pc属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('g-col-pc-1')).to.eq(true)
    expect(element.classList.contains('g-col-offset-pc-2')).to.eq(true)
  })

  it('接收widePc属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        widePc: {
          span: 1,
          offset: 2
        }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('g-col-wide-pc-1')).to.eq(true)
    expect(element.classList.contains('g-col-offset-wide-pc-2')).to.eq(true)
  })
})
