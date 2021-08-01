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
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
      single: this.single,
      selected: this.selected
    }
  },
  data() {
    return {
      eventBus: new Vue(),
      selectedList: this.selected
    }
  },
  mounted() {
    this.eventBus.$on('change', (name, visible) => {
      if (this.selectedList.length === 0) {
        this.selectedList.push(name)
      } else {
        const index = this.selectedList.findIndex(v => v === name)
        if (visible) {
          this.selectedList.push(name)
        } else {
          this.selectedList.splice(index, 1)
        }
      }
      this.$emit('change', this.selectedList)
    })
  }
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
