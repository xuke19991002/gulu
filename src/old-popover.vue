<template>
  <div class="popover" @click.stop="handlePopover">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  mounted() {},
  methods: {
    handlePopover() {
      this.visible = !this.visible
      if (this.visible) {
        // 不同代码会在点击后立马执行监听函数 导致打开后监听到了click立马又给关闭了
        // 异步 等待下一次点击 去监听
        this.$nextTick(() => {
          document.addEventListener('click', this.eventListenerCb)
        })
      }
    },
    eventListenerCb() {
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
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    padding: 18px 20px;
    min-width: 150px;
    background: #fff;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    word-break: break-all;
    border-radius: 4px;
  }
}
</style>
