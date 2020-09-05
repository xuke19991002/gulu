<template>
  <svg aria-hidden="true" class="gicon">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
import './svg'
export default {
  props: ['name'],
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.gicon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
