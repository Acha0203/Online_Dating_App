import axios from 'axios';

const state = {
  users: [],
  usersAreEmply: true,
};

const getters = {
  getAllUsers: (state) => state.users,
  getUserById: (state) => (id) => {
    return state.users.find((user) => user.id === id);
  },
};

const actions = {
  fetchUsers: async function ({ commit }) {
    if (state.usersAreEmply) {
      this.commit('setIsLoading', true);
      let users = [];
      for (let i = 0; i < 30; i++) {
        const response = await axios.get('https://randomuser.me/api/');

        let user = {
          id: response.data.results[0].login.uuid,
          name:
            response.data.results[0].name.first +
            ' ' +
            response.data.results[0].name.last,
          gender: response.data.results[0].gender,
          age: response.data.results[0].dob.age,
          country: response.data.results[0].location.country,
          state: response.data.results[0].location.state,
          city: response.data.results[0].location.city,
          email: response.data.results[0].email,
          imgUrl: response.data.results[0].picture.large,
          talked: false,
        };

        users.push(user);
      }
      this.commit('setUsersAreEmpty', false);
      this.commit('setIsLoading', false);
      commit('setUsers', users);
    }
  },
  setUsersAreEmpty: function ({ commit }, payload) {
    commit('setUsersAreEmpty', payload);
  },
  setTalkedUser: function ({ commit }, payload) {
    commit('setTalkedUser', payload);
  },
};

const mutations = {
  setUsers: function (state, users) {
    state.users = users;
  },
  setUsersAreEmpty: function (state, bool) {
    state.usersAreEmply = bool;
  },
  setTalkedUser: function (state, id) {
    state.users.find((user) => user.id === id)['talked'] = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
