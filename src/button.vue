<template>
  <!-- iconPosition:  icon-left | icon-right -->
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon class="gicon" :name="icon" v-if="icon && !loading"></g-icon>
    <g-icon class="loading gicon" name="loading" v-if="loading"></g-icon>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'gButton',
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(val) {
        return val !== 'left' || val !== 'right'
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .gicon {
    order: 1; // flex 更改元素排列顺序 数字越小越靠前
    margin-right: 5px;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .gicon {
      margin-left: 5px;
      margin-right: 0;
      order: 2;
    }
    > .content {
      order: 1;
    }
  }
  @keyframes loadingCircle {
    100% {
      transform: rotate(360deg);
    }
  }
  .loading {
    animation: loadingCircle 1s infinite linear;
  }
}
</style>
