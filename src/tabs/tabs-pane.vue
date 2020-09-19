<template>
  <div class="tabs-pane" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'gTabsPane',
  inject: ['eventBus'],
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  created() {
    this.eventBus.$on('input', name => {
      this.active = name === this.name
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.tabs-pane {
}
</style>
