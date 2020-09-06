<template>
  <div class="col" :class="[`g-col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: [Number, String]
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: grey;
  border: 1px solid red;
  width: 100%;
  $class-prefix: g-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>
