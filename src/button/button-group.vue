<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    // 防止button-group嵌套非button组件外的元素造成的样式错乱
    for (const node of this.$el.children) {
      const name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`g-button-group组件的子元素应该全是g-button，但是你写的是${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
    // 此方法不好使 边框在hover的时候有一边会不显示
    // &:not(:first-child) {
    //   border-left: none;
    // }
  }
}
</style>
