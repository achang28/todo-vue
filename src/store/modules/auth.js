import api from '../../api/imgur';

const state = {
  token: null
};

const getters = {
  isLoggedIn: () => !!state.token
};

const actions = {
  login: () => api.login(), // Make API call to OAuth
  logout: ({ commit }) => commit('setToken', null)
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default { state, getters, actions, mutations };
