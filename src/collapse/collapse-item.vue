<template>
  <div class="collapseItem">
    <div class="title" @click="handleChange">
      {{ title }}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collapseItem',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  inject: ['eventBus'],
  data() {
    return {
      open: false
    }
  },
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', vm => {
      if (vm !== this) {
        this.close()
      }
    })
  },
  methods: {
    handleChange() {
      const state = this.open
      if (state) {
        this.open = false
      } else {
        this.open = true
        this.eventBus && this.eventBus.$emit('update:selected', this)
      }
    },
    close() {
      this.open = false
    }
  }
}
</script>

<style lang="scss" scoped>
$grey: #d9d9d9;
$border-radius: 2px;
.collapseItem {
  border-bottom: 1px solid $grey;
  .title {
    border-radius: $border-radius;
    position: relative;
    padding: 12px 16px;
    padding-left: 40px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 22px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .content {
    border-top: 1px solid $grey;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    background-color: #fff;
    padding: 16px;
  }
  &:first-child .title {
    border-radius: $border-radius $border-radius 0 0;
  }
  &:last-child {
    border-radius: 0 0 $border-radius $border-radius;
    .title {
      border-radius: 0 0 $border-radius $border-radius;
    }
    .content {
      border-radius: 0 0 $border-radius $border-radius;
    }
  }
}
</style>
