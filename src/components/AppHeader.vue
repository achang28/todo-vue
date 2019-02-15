<template>
  <div class="ui secondary pointing menu">
    <MenuOption
      :index='index'
      :option='option'
      :key='option.etag'
      :activeIndex='activeIndex'
      v-for='(option, index) in menuOptions' />
    <span class='right menu'>
      <a v-if="isLoggedIn" href="#" @click="logout">Logout</a>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </span>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import MenuOption from './MenuOption';
  // import _get from 'lodash.get';

  export default {
    data: () => ({
      menuOptions: ['All', 'Active', 'Done']
    }),
    name: "AppHeader",
    components: { MenuOption },
    computed: {
      ...mapGetters(['isLoggedIn', 'activeFilter'])
    },
    methods: {
      ...mapActions(['login', 'logout'])
      // setActive(el) {
      //   this.activeIndex = parseInt(el.target.dataset.index);
      // }
    },
    updated() {
      window.console.log(`*** Active index is now ${this.activeIndex} ***`);
    }
  }
</script>

<style scoped>

</style>
