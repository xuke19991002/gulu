const expect = chai.expect
import Vue from 'vue'
import Row from '../src/grid/row.vue'
import Col from '../src/grid/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在', () => {
    expect(Row).to.exist
  })

  // 注意 done 的用处 如果不写这个done 测试框架会认为 函数里的代码全部是同步的，只有写done，函数里的异步代码才有效
  it('接收gutter属性', done => {
    Vue.component('g-row', Row)
    Vue.component('g-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-row gutter="20">
        <g-col span="12"></g-col>
        <g-col span="12"></g-col>
      </g-row>
    `
    // 注意：col组件中的gutter值是在row组件mounted生命周期函数被调用时才进行修改的 我们的console.log是同步代码 vue组件创建实例并挂载是一个异步过程 console.log执行的时候 row的mounted可能并未被触发 导致直接 vm.$el.outerHTML 打印出来的 div.col 中不存在我们想要得到的padding样式
    const vm = new Vue().$mount(div)
    // console.log(vm.$el.outerHTML)

    const fn = () => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')

      vm.$el.remove()
      vm.$destroy()
    }

    setTimeout(() => {
      // console.log(vm.$el.outerHTML)
      fn()
      // 调用done函数 说明异步代码执行完毕
      done()
    })
  })

  it('接收justify属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        justify: 'space-between'
      }
    }).$mount(div)

    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.eq('space-between')

    vm.$destroy()
  })
})
