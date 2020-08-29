<template>
  <svg aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
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
