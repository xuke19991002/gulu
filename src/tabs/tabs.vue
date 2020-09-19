<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

// 向下找到所有指定的组件
const findComponentsDownward = (context, componentName) => {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

export default {
  name: 'gTabs',
  props: {
    value: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].includes(val)
      }
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  created() {
    this.eventBus.$on('input', name => {
      this.$emit('input', name)
    })
  },
  mounted() {
    // 注意：$children 只能获取到子组件 普通dom元素不行
    if(this.$children.length === 0){
      console.warn('tabs组件内容结构错误，请检查写法')
    }
    // 需要注意 父组件广播事件 需要等待子组件初始化监听函数完毕后父组件再广播事件
    const TabsItems = findComponentsDownward(this, 'gTabsItem')
    TabsItems && TabsItems.forEach(vm => {
      if(vm.name === this.value){
        this.eventBus.$emit('input', this.value, vm)
      }
    })
    
  },
  beforeUpdate() {
    this.$emit('tab-click', this.value)
  }
}
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
