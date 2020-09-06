<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: [Number, String],
    offset: [Number, String]
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colClass() {
      const { span, offset } = this
      return {
        [`g-col-${span}`]: span,
        [`g-col-offset-${offset}`]: offset
      }
    },
    colStyle() {
      const { gutter } = this
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  width: 100%;
  $class-prefix: g-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: g-col-offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
