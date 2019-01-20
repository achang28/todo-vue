<template>
  <ul>
    <Item :updateFn='updateFn' />
    <Item
      :todo='todo'
      :index='index'
      :key='todo.etag'
      :updateFn='updateFn'
      v-for='(todo, index) in todos' />
  </ul>
</template>

<script>
  import Item from './Item';
  import _clone from 'lodash.clone';
  
  export default {
    name: 'List',
    data: () => ({
      localTodos: null,
      updated: false
    }),
    props: {
      todos: Array,
      updateGlobalListFn: Function
    }, // OR an array of props
    components: { Item },
    beforeMount: function() {
      // Insertion of blank todo represents new todo
      this.localTodos = [''].concat(this.todos);
    },
    beforeUpdate: function() {
      if (this.updated) {
        this.localTodos = _clone(this.todos);
        this.updated = false;
      }
    },
    methods: {
      createFn: function(value) { // adds to global todo list
        this.updateGlobalList(value, 0, () => this.updated = true)
      },
      removeFn: function(value, index) { // removes from global todo list
        this.updateGlobalList(index);
      },
      updateGlobalList: function(value, index) {
        this.updateGlobalListFn(value, index, () => this.updated = true)
      },
      updateFn: function(value, index) {
        this.localTodos[index] = value;
      }
    }
  }
</script>

<style scoped>

</style>
