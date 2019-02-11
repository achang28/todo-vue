<template>
  <form id="app" class="ui raised very padded text container segment">
    <AppHeader />
    <router-view></router-view>
    <ol class="ui form">
      <Item
        :todo='todo'
        :index='index'
        :key='todo.etag'
        :createFn='create'
        :removeFn='remove'
        :updateFn='update'
        v-for='(todo, index) in todos' />
    </ol>
    <div>{{count}}</div>
  </form>
</template>

<script>
import AppHeader from './components/AppHeader';
import Item from './components/Item';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'app',
  components: { AppHeader, Item },
  computed: {
    ...mapGetters(['count']),
    todos() {
      return this.$store.getters.todos();
    }
  },
  methods: mapActions(['create', 'edit', 'remove']),
  beforeUpdate() {
    window.console.log("Todo list before update: ", this.todos.join(', '));
  },
  updated() {
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
