import Toast from './toast.vue'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions = {}) {
      const Constructor = Vue.extend(Toast)
      const toast = new Constructor({
        propsData: {
          ...toastOptions
        }
      })
      console.log(message)
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
