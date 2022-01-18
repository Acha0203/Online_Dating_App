import axios from 'axios';
import { User } from '../model/index';

const state = {
  users: {},
};

const getters = {
  allUsers: (state) => state.users,
};

const actions = {
  fetchUsers: async function ({ commit }) {
    let users = {};
    for (let i = 0; i < 40; i++) {
      const response = await axios.get('https://randomuser.me/api/');
      let key = response.data.results[0].login.uuid;
      let user = new User();

      user.firstName = response.data.results[0].name.first;
      user.lastName = response.data.results[0].name.last;
      user.gender = response.data.results[0].gender;
      user.age = response.data.results[0].dob.age;
      user.state = response.data.results[0].location.state;
      user.city = response.data.results[0].location.city;
      user.email = response.data.results[0].email;
      user.imgUrl = response.data.results[0].picture.large;

      users[key] = user;
    }
    console.log(users);
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
