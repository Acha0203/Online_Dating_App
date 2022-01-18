import axios from 'axios';
import { User } from '../model/index';

const state = {
  users: {},
};

const getters = {
  allUsers: (state) => state.users,
  getUserById: (state) => (uuid) => {
    return state.users[uuid];
  },
};

const actions = {
  fetchUsers: async function ({ commit }) {
    this.commit('setIsLoading', true);
    let users = {};
    for (let i = 0; i < 30; i++) {
      const response = await axios.get('https://randomuser.me/api/');
      let key = response.data.results[0].login.uuid;
      let user = new User();

      user.firstName = response.data.results[0].name.first;
      user.lastName = response.data.results[0].name.last;
      user.gender = response.data.results[0].gender;
      user.age = response.data.results[0].dob.age;
      user.country = response.data.results[0].location.country;
      user.state = response.data.results[0].location.state;
      user.city = response.data.results[0].location.city;
      user.email = response.data.results[0].email;
      user.imgUrl = response.data.results[0].picture.large;

      users[key] = user;
    }
    this.commit('setIsLoading', false);
    commit('setUsers', users);
  },
};

const mutations = {
  setUsers: function (state, users) {
    state.users = users;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
