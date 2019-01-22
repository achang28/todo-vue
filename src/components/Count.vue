<template>
  <div>{{description}}</div>
</template>

<script>
  export default {
    name: "Count",
    props: {
      todos: Array
    },
    computed: {
      description: function() {
        const length = this.todos.length - 1;
        var desc = '';

        if (length === 1) {
          desc = `${length} item`;
        } else if (length > 1) {
          desc = `${length} items`;
        }

        return desc;
      }
    }
  }
</script>

<style scoped>

</style>
