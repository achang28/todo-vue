<template>
  <a @click='filter'
     :class='setClass'
     :data-index='setIndex'>{{option}}</a>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: "MenuOption",
    props: {
      index: Number,
      option: String
    },
    computed: {
      ...mapGetters(['activeFilter']),
      setIndex() {
        return this.index;
      },
      setClass(){
        return (this.activeIndex === this.index)
          ? 'active item'
          : 'item';
      }
    },
    methods: mapActions(['filter'])
  }
</script>

<style scoped>

</style>
