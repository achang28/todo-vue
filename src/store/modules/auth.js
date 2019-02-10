import api from '../../api/imgur';
import qs from 'qs';

const state = {
  token: null
};

const getters = {
  isLoggedIn() {
    const status = !!(window.localStorage.getItem('auth_token') || state.token);
    return status;
  }
};

const actions = {
  login() {
    api.login(); // Make API call to OAuth
  },
  finalizeLogin({ commit }, hash) {
    const parsedQs = qs.parse(hash.replace('#', ''));
    const token = parsedQs.access_token;

    window.localStorage.setItem('auth_token', token);
    commit('setToken', token);
  },
  logout({ commit }) {
    window.localStorage.removeItem('auth_token');
    window.location.replace('/');
    commit('setToken', null);
  }
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  }
};

export default { state, getters, actions, mutations };
