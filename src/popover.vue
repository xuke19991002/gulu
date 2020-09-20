<template>
  <div class="popover" @click.stop="handlePopoverClick">
    <div ref="contentWrapper" class="popover-content-wrapper" v-if="visible">
      <div class="popover-arrow" ref="arrow"></div>
      <div class="popover-content-inner">
        <slot name="content"></slot>
      </div>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { offset } from './utils/index'
export default {
  data() {
    return {
      visible: false
    }
  },
  mounted() {},
  methods: {
    setPopoverPosition() {
      const contentWrapper = this.$refs.contentWrapper
      const triggerWrapper = this.$refs.triggerWrapper
      document.body.appendChild(contentWrapper)
      const { top, left } = offset(triggerWrapper)
      // 使popover位于弹出层上方居中位置
      contentWrapper.style.left =
        left - contentWrapper.offsetWidth / 2 + triggerWrapper.offsetWidth / 2 + 'px'
      contentWrapper.style.top = top - contentWrapper.offsetHeight - 13 + 'px'
    },
    handlePopoverClick() {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (!this.visible) {
          this.open()
        } else {
          this.close()
        }
      }
    },
    eventListenerCb(event) {
      if (this.$refs.contentWrapper) {
        if (
          !this.$refs.contentWrapper.contains(event.target) &&
          event.target !== this.$refs.contentWrapper &&
          !this.$refs.triggerWrapper.contains(event.target)
        ) {
          this.close()
        }
      }
    },
    open() {
      this.visible = true
      // 不同代码会在点击后立马执行监听函数 导致打开后监听到了click立马又给关闭了
      // 异步 等待下一次点击 去监听
      this.$nextTick(() => {
        // 设置popover位置
        this.setPopoverPosition()
        // 监听点击其他区域关闭popover
        document.addEventListener('click', this.eventListenerCb)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.eventListenerCb)
    }
    /* 
      未实现功能：
        1：多种事件支持 比如 hover 上去
        2：css的一个问题 如果popover外层元素存在overflow:hidden 会存在popover展示区域无法正常显示的问题
          这也是为啥比较出名的UI库多倾向于直接把popover直接挂载到body上
        3：当用户给popover外层元素绑定点击事件时 此事件不会被执行 因为内部元素的click被阻止冒泡 导致当前绑定的事件无法被触发
    */
  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-flex;
  vertical-align: top;
}
.popover-content-wrapper {
  position: absolute;
}
.popover-content-inner {
  padding: 18px 20px;
  min-width: 150px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  word-break: break-all;
  border-radius: 4px;
}
.popover-arrow {
  position: absolute;
  bottom: -3.8px;
  left: 50%;
  width: 8px;
  height: 8px;
  border-width: 4px;
  border-color: transparent;
  border-right-color: #fff;
  border-bottom-color: #fff;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
  transform: translateX(-50%) rotate(45deg);
  background: #fff;
}
</style>
