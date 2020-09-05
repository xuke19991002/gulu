<template>
  <svg aria-hidden="true">
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

<style lang="scss">
</style>
