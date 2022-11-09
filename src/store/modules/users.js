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
      const response = await axios.get('https://randomuser.me/api/?results=30');
      console.log(response.data);
      for (let i = 0; i < 30; i++) {
        let user = {
          id: response.data.results[i].login.uuid,
          name:
            response.data.results[i].name.first +
            ' ' +
            response.data.results[i].name.last,
          gender: response.data.results[i].gender,
          age: response.data.results[i].dob.age,
          country: response.data.results[i].location.country,
          state: response.data.results[i].location.state,
          city: response.data.results[i].location.city,
          email: response.data.results[i].email,
          imgUrl: response.data.results[i].picture.large,
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
