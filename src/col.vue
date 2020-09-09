<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
const validator = value =>
  value ? Object.keys(value).some(key => ['span', 'offset'].includes(key)) : false
export default {
  props: {
    span: [Number, String],
    offset: [Number, String],
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
    }
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colClass() {
      const { createClass, span, offset, ipad, narrowPc, pc, widePc } = this
      return [
        ...createClass({ span, offset }),
        ...createClass(ipad, 'ipad'),
        ...createClass(narrowPc, 'narrow-pc'),
        ...createClass(pc, 'pc'),
        ...createClass(widePc, 'wide-pc')
      ]
    },
    colStyle() {
      const { gutter } = this
      if (!gutter) return {}
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      }
    }
  },
  methods: {
    createClass(obj, str) {
      if (!obj) return []
      const arr = []
      str = str ? str + '-' : ''
      if (obj.span) {
        arr.push(`g-col-${str}${obj.span}`)
      }
      if (obj.offset) {
        arr.push(`g-col-offset-${str}${obj.offset}`)
      }
      return arr
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
      width: $n / 24 * 100%;
    }
  }
  $class-prefix: g-col-offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: $n / 24 * 100%;
    }
  }

  // 手机屏幕大小
  // @media (min-width: 576px) {
  //   $class-prefix: g-col-phone-;
  //   @for $n from 1 through 24 {
  //     &.#{$class-prefix}#{$n} {
  //       width: $n / 24 * 100%;
  //     }
  //   }
  //   $class-prefix: g-col-offset-phone-;
  //   @for $n from 1 through 24 {
  //     &.#{$class-prefix}#{$n} {
  //       margin-left: $n / 24 * 100%;
  //     }
  //   }
  // }

  // ipad屏幕大小
  @media (min-width: 577px) {
    $class-prefix: g-col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: $n / 24 * 100%;
      }
    }
    $class-prefix: g-col-offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }
  }
  // 窄屏幕 pc
  @media (min-width: 769px) {
    $class-prefix: g-col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: $n / 24 * 100%;
      }
    }
    $class-prefix: g-col-offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }
  }
  // pc
  @media (min-width: 993px) {
    $class-prefix: g-col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: $n / 24 * 100%;
      }
    }
    $class-prefix: g-col-offset-pc;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }
  }
  // 宽的pc
  @media (min-width: 1200px) {
    $class-prefix: g-col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: $n / 24 * 100%;
      }
    }
    $class-prefix: g-col-offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }
  }
}
</style>
