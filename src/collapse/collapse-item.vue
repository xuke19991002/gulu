<template>
  <div class="collapseItem">
    <div class="title" @click="handleChange">
      <div>
        <g-icon class="arrow" :name="visible ? 'down' : 'right'" />
      </div>
      <span>{{ title }}</span>
    </div>
    <div class="content" v-if="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { findComponentUpward, findComponentDownward } from '../utils/index'
export default {
  name: 'collapseItem',
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  inject: ['eventBus', 'single', 'selected'],
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    // 默认打开第一项
    if (this.selected.length === 0) {
      const collapseCmp = findComponentUpward(this, 'collapse')
      const firstCollapseItemCmp = findComponentDownward(collapseCmp, 'collapseItem')
      if (firstCollapseItemCmp) {
        if (firstCollapseItemCmp.name === this.name) {
          this.open()
          this.$nextTick(() => this.selected.push(this.name))
        }
      }
    }
    if (this.single) {
      this.eventBus.$on('update:selected', name => {
        if (name !== this.name) {
          this.close()
        }
      })
    }

    if (Array.isArray(this.selected) && this.selected.length > 0) {
      this.selected.includes(this.name) && this.open()
    }

    this.$watch('visible', () => this.eventBus.$emit('change', this.name, this.visible))
  },
  methods: {
    handleChange() {
      const visible = this.visible
      if (visible) {
        this.visible = false
      } else {
        this.visible = true
        this.single && this.eventBus.$emit('update:selected', this.name)
      }
    },
    close() {
      this.visible = false
    },
    open() {
      this.visible = true
    }
  }
}
</script>

<style lang="scss" scoped>
$grey: #d9d9d9;
$border-radius: 2px;
.collapseItem {
  border-bottom: 1px solid $grey;
  .title {
    border-radius: $border-radius;
    position: relative;
    padding: 12px 16px;
    padding-left: 40px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 22px;
    cursor: pointer;
    transition: all 0.3s;
    .arrow {
      color: inherit;
      font-style: normal;
      line-height: 0;
      text-align: center;
      text-transform: none;
      vertical-align: -0.125em;
      text-rendering: optimizeLegibility;
      position: absolute;
      top: 50%;
      left: 16px;
      display: inline-block;
      font-size: 12px;
      transform: translateY(-50%);
    }
  }
  .content {
    border-top: 1px solid $grey;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    background-color: #fff;
    padding: 16px;
  }
  &:first-child .title {
    border-radius: $border-radius $border-radius 0 0;
  }
  &:last-child {
    border-radius: 0 0 $border-radius $border-radius;
    .title {
      border-radius: 0 0 $border-radius $border-radius;
    }
    .content {
      border-radius: 0 0 $border-radius $border-radius;
    }
  }
}
</style>
