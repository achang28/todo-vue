<template>
  <div class="ui secondary pointing menu">
    <a :index='index'
       :option='option'
       @click='setActive'
       v-for='(option, index) in menuOptions'
       :class="index === activeIndex ? 'active item' : 'item'">{{option}}</a>
    <span class='right menu'>
      <a v-if="isLoggedIn" href="#" @click="logout">Logout</a>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </span>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data: () => ({
      menuOptions: ['All', 'Active', 'Done'],
      activeIndex: 0
    }),
    name: "Header",
    computed: {
      ...mapGetters(['isLoggedIn'])
    },
    methods: {
      ...mapActions(['login', 'logout']),
      setActive() {
        debugger;
      }
    },
    beforeUpdate() {
      window.console.log("*** Header is being updated ***");
    }
  }
</script>

<style scoped>

</style>
