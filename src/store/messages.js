import axios from 'axios';
import { Chat, Message } from '../model/index';

const state = {
  messages: [],
};

const getters = {
  getMessageById: (state) => (UUId) => {
    console.log(state.messages);
    console.log(UUId);
    return state.messages.find((message) => message.id === UUId).chatList;
  },
};

const actions = {
  setMessages: function (context, { id, message }) {
    let chat = new Chat();
    const date1 = new Date();
    const date2 = new Date();

    chat.myMessage = message;
    chat.reply = 'Hello!';
    chat.timeOfMyMessage =
      date1.getFullYear() +
      '/' +
      date1.getMonth() +
      '/' +
      date1.getDay() +
      ' ' +
      date1.getHours() +
      ':' +
      date1.getMinutes() +
      ':' +
      date1.getSeconds();
    chat.timeOfReply =
      date2.getFullYear() +
      '/' +
      date2.getMonth() +
      '/' +
      date2.getDay() +
      ' ' +
      date2.getHours() +
      ':' +
      date2.getMinutes() +
      ':' +
      date2.getSeconds();

    context.commit('setMessages', { id, chat });
    console.log(id);
  },
  setChatList: function (context, UUId) {
    context.commit('setChatList', UUId);
  },
};

const mutations = {
  setChatList: (state, UUId) => {
    state.messages.push(new Message(UUId, []));
    console.log(state.messages[0].chatList);
  },
  setMessages: (state, { id, chat }) => {
    console.log(id);
    state.messages.find((message) => message.id === id).chatList.push(chat);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
