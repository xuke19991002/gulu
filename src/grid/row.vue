<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: [Number, String],
    // 横向排列
    justify: {
      type: String,
      validator(value) {
        return ['flex-start', 'flex-end', 'center', 'space-around', 'space-between'].includes(value)
      }
    },
    // 垂直排列
    align: {
      type: String,
      validator(value) {
        return ['top', 'middle', 'bottom'].includes(value)
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    rowStyle() {
      const { gutter } = this
      if (!gutter) return {}
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px'
      }
    },
    rowClass() {
      let { justify, align } = this
      return [justify && `row-justify-${justify}`, align && `row-align-${align}`]
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter || 0
    })
  }
}
</script>

<style lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  $justify-position: 'flex-start', 'flex-end', 'center', 'space-around', 'space-between';
  @for $n from 1 through 5 {
    &-justify-#{nth($justify-position, $n)} {
      justify-content: #{nth($justify-position, $n)};
    }
  }
  &-align-top {
    align-items: flex-start;
  }
  &-align-middle {
    align-items: center;
  }
  &-align-bottom {
    align-items: flex-end;
  }
}
</style>
