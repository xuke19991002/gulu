<template>
  <div class="toast" :class="toastClasses" ref="toast">
    <div class="content">
      <slot v-if="!enableHtml"></slot>
      <div v-html="$slots.default[0]" v-else></div>
    </div>
    <template v-if="closeButton">
      <div class="line" ref="line"></div>
      <span class="close" @click="handleCloseToast">{{closeButton.text}}</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoColseDelay: {
      type: Number,
      default: 2000
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: null
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'bottom', 'middle'].includes(val)
      }
    }
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoColseDelay)
      }
    },
    updateStyles() {
      if (this.closeButton) {
        this.$nextTick(() => {
          this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
        })
      }
    },
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    handleCloseToast() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.7);
.toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  min-height: $toast-height;
  display: flex;
  align-items: center;
  background-color: $toast-bg;
  border-radius: 8px;
  color: #fff;
  min-width: 96px;
  justify-content: center;
  &.position-top{
    top: 30px;
  }
  &.position-middle{
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  &.position-bottom{
    bottom: 30px;
  }
  .content {
    max-width: 400px;
    text-align: center;
    min-width: 150px;
    padding: 8px 12px;
  }
  .close {
    cursor: pointer;
    padding: 8px 15px;
    flex-shrink: 0;
  }
  .line {
    border-left: 1px solid #fff;
    opacity: 0.3;
  }
}
</style>
