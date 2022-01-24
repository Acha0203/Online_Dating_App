import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';
import messages from './modules/messages';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  actions: {
    setIsLoading: function ({ commit }, payload) {
      commit('setIsLoading', payload);
    },
  },
  mutations: {
    setIsLoading: function (state, flag) {
      state.isLoading = flag;
    },
  },
  modules: {
    users,
    messages,
  },
});
