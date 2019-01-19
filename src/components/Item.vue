<template>
  <li>
    <input
      :value='todo'
      @input='onInput'
      @blur="validateItem"/>
    <span :click='remove'></span>
  </li>
</template>

<script>
  import _isEmpty from 'lodash.isempty';

  export default {
    name: "Item",
    props: {
      todo: String,
      index: Number,
      updateFn: Function
    },
    methods: {
      onInput: function(ev) {
        this.updateFn(ev, this.index);
      },
      remove: function(ev) {
        this.updateFn(ev, this.index, 'remove');
      },
      validateItem: function(ev) {
        const { value } = ev.target;
        // When input value is empty, perform different action for...
        // 1) New Item -- DO NOTHING

        // 2) Existing Item -- REMOVE ITEM FROM LIST
        if (_isEmpty(value)) {
          this.remove(ev);
        } else {
          this.updateFn(ev, this.index, 'update');
        }
      }
    }
  }
</script>

<style scoped>

</style>
