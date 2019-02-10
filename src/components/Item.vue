<template>
  <li class="field">
    <div class="ui fluid action input">
      <input
        type="text"
        @input='onInput'
        @blur="checkItem"
        :value='todoValue' />
      <button
        @click='remove'
        v-if='allowedIndex'
        class="ui icon button red">
        <i class="window close icon" />
      </button>
    </div>
  </li>
</template>

<script>
  import _isEmpty from 'lodash.isempty';
  import _isEqual from 'lodash.isequal';
  function _extractValue(ev) {
    const value = ev.target.value || '';
    return value;
  }

  /* ACTIONS
  1. Exit out of input field OR press 'Enter' button
  - Check for the following:
    A) Actual data update: Update existing index to new value
    B) when value is '', remove from list
   No changes: do nothing

  2. Type, or paste data into input field
  - Check whether value differs from old value
  - Different value => update existing list w/ new data

  3. Press "Remove" button
  - Remove selected todo from existing list
   */
  export default {
    name: "Item",
    props: {
      isDone: Boolean,
      todo: String,
      index: Number,
      createFn: Function,
      removeFn: Function,
      updateFn: Function
    },
    computed: {
      todoValue: function() {
        window.console.log("Todo #", this.index);
        return this.todo;
      },
      allowedIndex: function() {
        return this.index > 0;
      }
    },
    methods: {
      onInput: function(ev) { // updates local todo list onlo
        const value = _extractValue(ev);
        !_isEqual(value, this.todo) && this.updateFn(value, this.index);
      },
      remove: function() {
        this.removeFn(this.index);
      },
      checkItem: function(ev) {
        // 1. Same as previous value, don't do anything
        const value = _extractValue(ev);

        if (!_isEqual(value, this.todo)) {
          // 2. Remove when empty string ('')
          if (this.index === 0) {
            this.$el.children[0].value = '';
            this.createFn(value);
          } else if (_isEmpty(value)) {
            this.remove();
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
