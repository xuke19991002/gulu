<template>
  <div class="ginput-wrapper" :class="{error}">
    <input :disabled="disabled" :readonly="readonly" :value="value" type="text" />

    <template v-if="error">
      <icon class="icon-error" name="info-circle-fill"></icon>
      <span class="explain">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  components: {
    Icon
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      defalut: false
    },
    readonly: {
      type: Boolean,
      defalut: false
    },
    error: {
      type: String
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
$font-color: rgba(0, 0, 0, 0.65);
$design-color: #40a9ff;
$error-color: #f5222d;
$height: 32px;
$border-color: #d9d9d9;
$border-color-error: $error-color;
$border-color-hover: $design-color;
$border-color-focus: $design-color;
$box-shadow-color: rgba(24, 144, 255, 0.2);
$font-size: 14px;
$border-radius: 4px;
.ginput-wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    transition: all 0.3s;
    height: 32px;
    border: 1px solid $border-color;
    padding: 4px 11px;
    border-radius: $border-radius;
    font-size: inherit;
    color: $font-color;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      border-color: $border-color-focus;
      box-shadow: 0 0 0 2px $box-shadow-color;
      outline: 0;
    }
    &[disabled] {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      cursor: not-allowed;
      &:hover {
        border-color: $border-color;
      }
    }
    &[readonly] {
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $border-color-error;
      &:focus {
        border-color: #ff4d4f;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
      }
    }
    .icon-error {
      color: $error-color;
      & + .explain {
        color: $error-color;
      }
    }
  }
}
</style>
