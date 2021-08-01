<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'collapse',
  props: {
    single: {
      type: Boolean,
      default: false
    }
  },
  provide() {
    return {
      eventBus: this.single ? this.eventBus : null
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
$grey: #d9d9d9;
$border-radius: 2px;
.collapse {
  border: 1px solid $grey;
  border-bottom: 0;
  border-radius: $border-radius;
}
</style>
