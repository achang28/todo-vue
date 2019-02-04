<template>
  <div class="ui sizer vertical segment">
    <span class="ui secondary pointing menu">Todo List</span>
    <span class="right menu">
      <a href="#" class="ui item" @click="login">Login</a>
    </span>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: "Header",
    methods: mapActions(['login'])
  }
</script>

<style scoped>

</style>
