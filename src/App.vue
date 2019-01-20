<template>
  <div id="app">
    :::::::::: TODOS :::::::::
    <List :todos="todos" :updateGlobalListFn="updateList" />
    <Count />
  </div>
</template>

<script>
import List from './components/List';
import Count from './components/Count';

export default {
  name: 'app',
  data: () => ({
    todos: ['Buy Groceries', 'Sell Car', 'Upgrade Bicycle']
  }),
  components: { List, Count },
  methods: {
    updateList: function(newTodo, index, fn) {
      this.todos[index] = newTodo;
      fn();
    }
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
