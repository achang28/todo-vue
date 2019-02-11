<template>
  <a :class='setClass'
     @click='setActive'
     :data-index='setIndex'>{{option}}</a>
</template>

<script>
  export default {
    name: "MenuOption",
    props: {
      index: Number,
      option: String,
      setActive: Function,
      activeIndex: Number
    },
    computed: {
      setIndex() {
        return this.index;
      },
      setClass(){
        return (this.activeIndex === this.index)
          ? 'active item'
          : 'item';
      }
    }
  }
</script>

<style scoped>

</style>
