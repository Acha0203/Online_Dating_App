<template>
  <div class="container">
    <Loading v-if="isLoading" />
    <UserCard />
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue';
import Loading from '@/components/Loading.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UserList',
  components: {
    UserCard,
    Loading,
  },
  computed: {
    ...mapState(['isLoading']),
  },
  methods: {
    ...mapActions(['fetchUsers']),
  },
  created: function () {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}
</style>
