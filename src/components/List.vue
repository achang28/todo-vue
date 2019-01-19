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

  export default {
    name: 'List',
    props: {
      todos: Array,
      updateListFn: Function
    }, // OR an array of props
    components: { Item },
    methods: {
      updateFn: function(ev, index, action) {
        // 'action' = CREATE, UPDATE, DELETE
        var updatedTodos = null;
        const { value } = ev.target;

        switch (action) {
          case 'create':
            updatedTodos = this.todos.concat([value]);
            break;

          case 'update':
            updatedTodos = this.todos.concat([]);
            break;

          case 'delete':
            var left = this.todos.slice(0, index);
            var right = this.todos.slice(index +1);
            updatedTodos = left.concat(right);
            break;

          default:
            break;
        }

        this.updateListFn(updatedTodos);
      }
    }
  }
</script>

<style scoped>

</style>
