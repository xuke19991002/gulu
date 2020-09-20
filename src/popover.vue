<template>
  <!-- <div class="popover" @click.stop="handlePopoverClick"> -->
  <div class="popover" ref="popover">
    <div
      ref="contentWrapper"
      class="popover-content-wrapper"
      :class="contentWrapperClass"
      v-if="visible"
    >
      <div class="popover-arrow" ref="arrow"></div>
      <div class="popover-content-inner">
        <slot name="content"></slot>
      </div>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { offset } from './utils/index'
export default {
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].includes(value)
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value){
        return value === 'click' || value === 'hover'
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    contentWrapperClass() {
      return [`content-position-${this.position}`]
    }
  },
  mounted() {
    if(this.trigger === 'click'){
      this.$refs.popover.addEventListener('click', this.handlePopoverClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  methods: {
    setPopoverPosition() {
      const contentWrapper = this.$refs.contentWrapper
      const triggerWrapper = this.$refs.triggerWrapper
      document.body.appendChild(contentWrapper)
      const { top, left } = offset(triggerWrapper)
      const popoverPositionDescription = {
        top: {
          left: left - contentWrapper.offsetWidth / 2 + triggerWrapper.offsetWidth / 2,
          top: top - contentWrapper.offsetHeight - 13
        },
        bottom: {
          left: left - contentWrapper.offsetWidth / 2 + triggerWrapper.offsetWidth / 2,
          top: top + triggerWrapper.offsetHeight + 13
        },
        left: {
          left: left - contentWrapper.offsetWidth - 13,
          top: top - (contentWrapper.offsetHeight - triggerWrapper.offsetHeight) / 2
        },
        right: {
          left: left + triggerWrapper.offsetWidth + 13,
          top: top - (contentWrapper.offsetHeight - triggerWrapper.offsetHeight) / 2
        }
      }
      contentWrapper.style.left = popoverPositionDescription[this.position].left + 'px'
      contentWrapper.style.top = popoverPositionDescription[this.position].top + 'px'

    },
    handlePopoverClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (!this.visible) {
          this.open()
        } else {
          this.close()
        }
      }
    },
    eventListenerCb(event) {
      if (this.$refs.contentWrapper) {
        if (
          !this.$refs.contentWrapper.contains(event.target) &&
          event.target !== this.$refs.contentWrapper &&
          !this.$refs.triggerWrapper.contains(event.target)
        ) {
          console.log('cb 关闭');
          this.close()
        }
      }
    },
    open() {
      this.visible = true
      // 不同代码会在点击后立马执行监听函数 导致打开后监听到了click立马又给关闭了
      // 异步 等待下一次点击 去监听
      this.$nextTick(() => {
        // 设置popover位置
        this.setPopoverPosition()
        // 监听点击其他区域关闭popover
        document.addEventListener('click', this.eventListenerCb)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.eventListenerCb)
    },
    destroyed() {
      this.$refs.popover.removeEventListener('click', this.handlePopoverClick)
      this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
    }
  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-flex;
  vertical-align: top;
}
.popover-content-wrapper {
  position: absolute;
  .popover-content-inner {
    padding: 18px 20px;
    min-width: 150px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    word-break: break-all;
    border-radius: 4px;
  }
  .popover-arrow {
    position: absolute;
    width: 8px;
    height: 8px;
    border-width: 4px;
    border-color: transparent;
    border-right-color: #fff;
    border-bottom-color: #fff;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    background: #fff;
  }
  
  &.content-position-top{
    .popover-arrow{
      bottom: -3.8px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  }
  &.content-position-bottom{
    .popover-arrow{
      top: -3.8px;
      left: 50%;
      transform: translateX(-50%) rotate(-135deg);
    }
  }
  &.content-position-left {
    .popover-arrow{
      right: -3.8px;
      top: 50%;
      transform: translateY(-50%) rotate(-45deg);
    }
  }
  &.content-position-right {
    .popover-arrow{
      left: -3.8px;
      top: 50%;
      transform: translateY(-50%) rotate(-225deg);
    }
  }
}
</style>
