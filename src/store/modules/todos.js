const initialState = {
  activeFilter: 0,
  todos: ['', 'Buy Groceries', 'Sell Car', 'Upgrade Bicycle']
};

const getters = {
  activeFilter: state => state.activeFilter,
  count(state) {
    const length = state.todos.length - 1;
    var desc = '';

    if (length === 1) {
      desc = `${length} item`;
    } else if (length > 1) {
      desc = `${length} items`;
    }

    return desc;
  },
  todos(state) {
    // true || false
    return function(isDone) {
      if (isDone === undefined) {
        return state.todos;
      } else {
        return state.todos.filter(todo => todo.isDone === isDone);
      }
    }
  }
};

const actions = {
  create({commit, newTodo}) {
    const newTodoList = state.todos.concat([newTodo]);

    commit ('updateTodo', index, '');
    commit('setTodos', newTodoList);
  },
  edit({commit}, index, newValue) {
    commit('updateTodo', index, newValue);
  },
  remove({commit}, index) {
    const left = state.todos.slice(0, index);
    const right = state.todos.slice(index +1);
    const updatedTodos = left.concat(right);

    commit('setTodos', updatedTodos);
  },
  filter({commit}, index) {
    commit('setActiveIndex', index);
  }
};

const mutations = {
  setTodos(state, newTodos) {
    state.todos = newTodos;
  },
  updateTodo(state, index, newValue) {
    state.todos[index] = newValue;
  },
  setActiveIndex(state, index) {
    state.activeFilter = index;
  }
};

export default { state: initialState, getters, actions, mutations };
