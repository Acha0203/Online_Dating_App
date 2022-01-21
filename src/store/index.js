import Vue from 'vue';
import Vuex from 'vuex';
import users from './users';
import messages from './messages';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  actions: {
    setIsLoading: function (context, payload) {
      context.commit('setIsLoading', payload);
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
