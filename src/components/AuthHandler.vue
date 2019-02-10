<template>
  <div v-if='!isLoggedIn'>Please wait...</div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: "AuthHandler",
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['finalizeLogin']),
    created: function() {
      !this.isLoggedIn && this.finalizeLogin(window.location.hash);
    }
  }
</script>

<style scoped>

</style>
