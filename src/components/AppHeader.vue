<template>
  <div class="ui secondary pointing menu">
    <h2 class="ui header">Todo List</h2>
    <span class="right menu">
      <a v-if="isLoggedIn" href="#" @click="logout">Logout</a>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </span>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: "Header",
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login', 'logout']),
    beforeUpdate() {
      window.console.log("*** Header is being updated ***");
    }
  }
</script>

<style scoped>

</style>
