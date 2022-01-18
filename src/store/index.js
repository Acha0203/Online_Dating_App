import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import users from './users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
  },
});
