<template>
  <div class="tabs-item" :data-name="name" :class="tabsItemClass" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
// props 如果需要用户（使用者）传值 使用props
// 自身维护值 使用 data 即可
export default {
  name: 'gTabsItem',
  inject: ['eventBus'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    tabsItemClass() {
      return {
        'tabs-item-active': this.active,
        'tabs-item-disabled': this.disabled
      }
    }
  },
  created() {
    this.eventBus && this.eventBus.$on('input', name => {
      this.active = name === this.name
    })
  },
  methods: {
    handleClick() {
      if (this.disabled) return
      this.eventBus.$emit('input', this.name, this)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 12px 16px;
  margin: 0 32px 0 0;
  text-decoration: none;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &.tabs-item-active {
    color: #1890ff;
    font-weight: 500;
  }
  &:hover {
    color: #40a9ff;
  }
  &.tabs-item-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
}
</style>
