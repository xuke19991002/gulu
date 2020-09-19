<template>
  <div class="tabs">
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val){
        return ['horizontal', 'vertical'].includes(val)
      }
    }
  },
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
.tabs{

}
</style>
