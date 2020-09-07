<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: [Number, String],
    align: {
      type: String,
      validator(value) {
        return ['left', 'right', 'center'].includes(value)
      }
      // default: 'left'
    }
  },
  data() {
    return {}
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + 'px',
        marginRight: -this.gutter / 2 + 'px'
      }
    },
    rowClass() {
      let { align } = this
      return [align && `row-${align}`]
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter || 0
    })
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  &-left {
    justify-content: flex-start;
  }
  &-right {
    justify-content: flex-end;
  }
  &-center {
    justify-content: center;
  }
}
</style>
