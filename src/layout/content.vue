<template>
  <main class="content">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'gContent'
}
</script>

<style lang="scss" scoped>
.content {
  flex-grow: 1;
}
</style>
