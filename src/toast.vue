<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  mounted() {
    
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.7);
.toast{
  position: fixed;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  font-size: $font-size;
  height: $toast-height;
  display: flex;
  align-items: center;
  background-color: $toast-bg;
  border-radius: 8px;
  padding: 8px 12px;
  color: #fff;
  min-width: 96px;
  justify-content: center;
}

</style>
