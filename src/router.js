import Vue from 'vue';
import VueRouter from 'vue-router';
import TopPage from '@/pages/TopPage.vue';
import UserList from '@/pages/UserList.vue';
import UserDetail from '@/pages/UserDetail.vue';
import Chat from '@/pages/Chat.vue';
import MessageList from '@/pages/MessageList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'toppage',
    component: TopPage,
  },
  {
    path: '/user',
    name: 'userlist',
    component: UserList,
  },
  {
    path: '/user/:id',
    name: 'userdetail',
    component: UserDetail,
  },
  {
    path: '/user/:id/chat',
    name: 'chat',
    component: Chat,
  },
  {
    path: '/message-list',
    name: 'messagelist',
    component: MessageList,
  },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
