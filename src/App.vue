<template>
  <div id="app">
    :::::::::: TODOS :::::::::
    <ul>
      <Item
        :todo='todo'
        :index='index'
        :key='todo.etag'
        :createFn='create'
        :removeFn='remove'
        :updateFn='update'
        v-for='(todo, index) in todos' />
    </ul>
    <Count />
  </div>
</template>

<script>
import Count from './components/Count';
import Item from './components/Item';
import _clone from 'lodash.clone';

export default {
  name: 'app',
  data: () => ({
    todos: ['', 'Buy Groceries', 'Sell Car', 'Upgrade Bicycle']
  }),
  components: { Item, Count },
  methods: {
    create: function(newTodo) { // adds to global todo list
      this.todos = this.todos.concat([newTodo]);
      this.todos[0] = '';
    },
    remove: function(index) { // removes from global todo list
      const left = this.todos.slice(0, index);
      const right = this.todos.slice(index +1);
      this.todos = left.concat(right);
    },
    update: function(value, index) {
      this.todos[index] = value;
    }
  },
  beforeUpdate: function() {
    window.console.log("Todo list before update: ", this.todos.join(', '));
  },
  updated: function() {
    window.console.log("Todo list after update: ", this.todos.join(', '));
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
