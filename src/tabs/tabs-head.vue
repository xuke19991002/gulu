<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gTabsHead',
  inject: ['eventBus'],
  mounted(){
    this.eventBus.$on('input', (name, vm) => {
      const {width, height, top, left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.cssText = `
        width: ${width}px;
        transform: translate3d(${vm.$el.offsetLeft}px, 0px, 0px);
      `
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs-head {
  margin: 0 0 16px;
  border-bottom: 1px solid #e8e8e8;
  outline: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1.5;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  > .actions-wrapper {
    margin-left: auto;
  }
  > .line {
    bottom: -1px;
    height: 2px;
    background-color: #1890ff;
    position: absolute;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      width 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
      left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}
</style>
