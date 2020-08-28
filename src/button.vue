<template>
  <!-- iconPosition:  icon-left | icon-right -->
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <g-icon :name="icon" v-if="icon"></g-icon>
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
  &:icon-right {
    > .gicon {
      margin-left: 5px;
      order: 2;
    }
    > .content {
      order: 1;
    }
  }
}
</style>
