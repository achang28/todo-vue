const state = { todos: [] };
const getters = {
  todos(isDone) {
    // true || false
    if (isDone === undefined) {
      return state.todos;
    } else {
      return state.todos.filter(todo => todo.isDone === isDone);
    }
  }
};

const actions = {
  addTodo() {

  },
  removeTodo() {

  },
  editTodo() {

  },
  saveTodo() {

  }
};

const mutations = {
  changeTodo(index) {

  },
  increaseList(index) {

  },
  decreaseList(index) {

  }
};

export default ( state, getters, actions, mutations );
