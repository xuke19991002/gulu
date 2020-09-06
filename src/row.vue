<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: [Number, String]
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
}
</style>
