<template>
  <div class="popover" @click="handlePopover">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      visible: false
    }
  },
  mounted() {

  },
  methods: {
    handlePopover(){
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.popover{
  display: inline-flex;
  vertical-align: top;
  position: relative;
  .content-wrapper{
    position: absolute;
    bottom: 100%;
    left: 0;
    padding: 18px 20px;
    min-width: 150px;
    background: #fff;
    box-shadow: 3px 3px 7px rgba(0,0,0,.07);
    word-break: break-all;
    border-radius: 4px;
  }
}
</style>
