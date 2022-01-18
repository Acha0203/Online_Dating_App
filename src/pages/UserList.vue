<template>
  <div class="bg-gradient">
    <Loading v-if="isLoading" />
    <UserCard />
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue';
import Loading from '@/components/Loading.vue';
import { mapState } from 'vuex';

export default {
  name: 'UserList',
  components: {
    UserCard,
    Loading,
  },
  computed: {
    ...mapState(['isLoading']),
  },
};
</script>

<style scoped>
.bg-gradient {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}
</style>
