<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'collapse',
  data() {
    return {
    }
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