import { Chat } from '../../model/index';

const state = {
  messages: [], // 連想配列の配列
};

const getters = {
  getMessages: (state) => state.messages,
  getChatLogById: (state) => (id) => {
    return state.messages.find((message) => message.id === id).chatLog;
  },
  getLastChat: (state) => (id) => {
    const chatLog = state.messages.find((message) => message.id === id).chatLog;
    return chatLog[chatLog.length - 1];
  },
};

const actions = {
  fetchReply: function ({ commit }, { id, message }) {
    let formdata = new FormData();
    formdata.append('apikey', process.env.VUE_APP_TALK_API_KEY);
    formdata.append('query', message);

    let chat = new Chat();

    fetch('https://api.a3rt.recruit.co.jp/talk/v1/smalltalk', {
      method: 'POST',
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        const date = new Date();

        chat.date =
          date.getFullYear() + '/' + date.getMonth() + '/' + date.getDay();
        chat.timeStamp =
          date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        chat.message = data.results[0].reply;
        chat.isMine = false;

        commit('setMessage', { id: id, chat: chat });
      });
  },
  setMessage: function ({ commit }, { id, message }) {
    let chat = new Chat();
    const date = new Date();

    chat.date =
      date.getFullYear() + '/' + date.getMonth() + '/' + date.getDay();
    chat.timeStamp =
      date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    chat.message = message;
    chat.isMine = true;

    commit('setMessage', { id: id, chat: chat });
  },
  setMessageObj: function ({ commit }, id) {
    commit('setMessageObj', id);
  },
};

const mutations = {
  setMessageObj: (state, id) => {
    const message = {
      id: id,
      chatLog: [],
    };
    state.messages.push(message);
  },
  setMessage: (state, { id: id, chat: chat }) => {
    state.messages.find((message) => message.id === id).chatLog.push(chat);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
